"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function HistoryPage() {
  const [chatHistory, setChatHistory] = useState([]);

  // Load chat history
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("chat-history")) || [];
    setChatHistory(history);
  }, []);

  // Delete chat
  const deleteChat = (index) => {
    const updatedHistory = chatHistory.filter((_, i) => i !== index);
    setChatHistory(updatedHistory);
    localStorage.setItem("chat-history", JSON.stringify(updatedHistory));
  };

  return (
    <div className="p-4 max-w-2xl mx-auto min-h-screen">
      <h1 className="text-2xl mb-6 text-center">Chat History</h1>

      {chatHistory.length === 0 ? (
        <p className="text-center text-gray-500">No chats found</p>
      ) : (
        <div className="space-y-2">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 bg-gray-800 rounded"
            >
              <Link
                href="/"
                className="hover:text-blue-400 truncate"
                onClick={() =>
                  localStorage.setItem("current-chat", JSON.stringify(chat))
                }
              >
                {chat[0]?.content
                  ? `ChatGPT - ${chat[0].content.slice(0, 50)}${
                      chat[0].content.length > 50 ? "..." : ""
                    }`
                  : `Chat Session ${index + 1}`}
              </Link>

              <button
                onClick={() => deleteChat(index)}
                className="text-red-400 hover:text-red-300 ml-4"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
