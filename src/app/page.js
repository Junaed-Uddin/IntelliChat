"use client";
import { useEffect, useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { ImSpinner9 } from "react-icons/im";
import { FaMicrophone } from "react-icons/fa";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedMessages = localStorage.getItem("chat-history");
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (error) {
        console.error("Error loading chat history:", error);
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("chat-history", JSON.stringify(messages));
    }
  }, [messages, mounted]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    try {
      setIsLoading(true);
      const userMessage = { role: "user", content: inputText };

      // Add user message to chat
      setMessages((prev) => [...prev, userMessage]);

      const response = await fetch(
        "https://api.echogpt.live/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_ECHOGPT_API_KEY || "",
          },
          body: JSON.stringify({
            messages: [
              userMessage,
            ],
            model: "EchoGPT",
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      if (data.choices?.[0]?.message) {
        setMessages((prev) => [...prev, data.choices[0].message]);
      }
      setInputText("");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen pt-20">
      <div className="px-5 flex flex-col min-h-[585px] justify-between pb-40">
        <div className="flex-1 overflow-y-auto">
          <div className="py-4 rounded-2xl w-full max-w-5xl mx-auto mb-4 space-y-4">
            {messages.map((message, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg ${message.role === "user"
                  ? "bg-gray-700 ml-auto w-1/2"
                  : "mr-auto max-w-full text-left"
                  }`}
              >
                {message.content}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full px-5 bg-[#0A0A0A]">
        <p
          className={`text-center text-2xl m-5 ${messages.length ? "hidden" : ""
            }`}
        >
          Hi, echoGPT
        </p>
        <div className="flex relative justify-end items-center pt-6">
          {/* Input Area */}
          <div className="grow justify-end h-full w-full max-w-5xl mx-auto border border-gray-700 rounded-xl bg-[#1E1E1E] text-white px-3 pt-3 shadow-md">
            <div className="p-3 rounded-lg bg-[#1E1E1E] border border-gray-700">
              <textarea
                placeholder="Type your Question"
                className="w-full text-white outline-none resize-none bg-transparent"
                rows={3}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={isLoading}
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-2 mt-3 p-2 border-t border-gray-700">
              <button className="btn btn-accent my-1" disabled={isLoading}>
                <FaMicrophone></FaMicrophone>
                Speak
              </button>
              <button
                type="button"
                className={`btn btn-primary my-1`}
                onClick={handleSend}
                disabled={isLoading || !inputText.trim()}
              >
                <ImSpinner9
                  className={`mr-3 ${isLoading ? "animate-spin" : "hidden"}`}
                ></ImSpinner9>
                <IoIosSend className={`${isLoading ? "hidden" : ""}`} />
                <span className={`${isLoading ? "hidden" : ""}`}>Send</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center text-sm mt-3 mb-1 text-gray-500">
          <p>AI Generated Only</p>
        </div>
      </div>
    </div>
  );
}
