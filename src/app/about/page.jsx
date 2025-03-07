"use client";
import React from "react";
import Image from "next/image";
import u1 from "../../../public/u1.jpg";
import u2 from "../../../public/u2.jpg";
import u3 from "../../../public/u3.jpg";

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Elena Rodriguez",
      role: "Chief AI Scientist",
      bio: "PhD in Machine Learning from Stanford, 10+ years experience in NLP research",
      image: u1,
    },
    {
      name: "Michael Chen",
      role: "Engineering Director",
      bio: "Former Cloud Infrastructure Lead at major tech company, AI systems specialist",
      image: u2,
    },
    {
      name: "Sarah Johnson",
      role: "Product Architect",
      bio: "AI product development expert with focus on enterprise solutions",
      image: u3,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Pioneering the Future of Artificial Intelligence
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transforming industries through cutting-edge language models and
            machine learning innovations
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                IntelliChat
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-300">
                  We believe artificial intelligence should augment human
                  potential while maintaining rigorous ethical standards. Our
                  models are designed with responsible AI principles at their
                  core.
                </p>
                <p className="text-lg text-gray-300">
                  Through continuous research and development, we push the
                  boundaries of what's possible in natural language processing
                  while ensuring safety and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-base-200 border border-t-blue-400 border-b-0 border-l-0 border-r-0 rounded-tl-[60px] rounded-tr-[60px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              World-Class AI Team
            </h2>
            <p className="text-xl text-gray-300">
              Combining decades of experience in machine learning and software
              engineering
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <Image src={member.image} className="h-52 object-contain object-center bg-gray-300" alt="user-image"/>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#0A0A0A">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Core Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                Pushing boundaries in AI research while maintaining practical
                applications
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Transparency
              </h3>
              <p className="text-gray-600">
                Clear documentation and open communication about AI capabilities
              </p>
            </div>

            <div className="p-8 bg-white rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Responsibility
              </h3>
              <p className="text-gray-600">
                Ethical AI development with built-in safeguards and monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-base-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Start Your AI Journey
          </button>
        </div>
      </section>
    </div>
  );
}
