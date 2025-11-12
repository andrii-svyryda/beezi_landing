"use client";

import Container from "../Container";
import Image from "next/image";
import { useState } from "react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="w-full py-28">
      <Container>
        <div className="flex items-stretch gap-4 w-full">
          {/* Card Wrapper */}
          <div
            className="w-full p-2 rounded-[20px]"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow:
                "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08), 0px 2px 24px 0px rgba(105, 56, 239, 0.12)",
            }}
          >
            {/* Card */}
            <div className="flex flex-col items-center w-full rounded-xl overflow-hidden relative bg-[#0D081B]">
              {/* Linear Gradient Background */}
              <div
                className="absolute w-full h-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(502.62% 100% at 50% 0%, #050011 40%, #6938EF 80%, #FFFFFF 100%)",
                  top: "-0.1px",
                }}
              />

              {/* Pattern Overlay */}
              <div
                className="absolute w-full h-full pointer-events-none"
                style={{
                  backgroundImage: "url('/cta-pattern.svg')",
                  backgroundSize: "auto",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center w-full gap-8 py-16 px-3 md:px-12">
                {/* Section Title */}
                <div className="w-full max-w-[768px] flex flex-col items-center gap-4">
                  <div className="flex flex-col items-center w-full gap-6">
                    <h2
                      className="md:text-5xl text-4xl font-bold text-center leading-normal w-full"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        background:
                          "linear-gradient(0deg, rgba(255, 255, 255, 0.8) 0%, rgba(250, 250, 250, 1) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Ready to make AI adoption simple?
                    </h2>
                    <p className="text-lg text-white/80 text-center w-full">
                      Your team gonna love it!
                    </p>
                  </div>
                </div>

                {/* Form */}
                <div className="flex flex-col items-center gap-8 pt-4 w-full max-w-[513px]">
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center w-full gap-4"
                  >
                    {/* Name Input */}
                    <div className="flex w-full gap-3">
                      <div className="flex flex-col gap-2 flex-1">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-white/60"
                        >
                          Name
                        </label>
                        <div className="flex flex-col w-full gap-2">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="flex items-center w-full gap-1 py-1 px-3 bg-white border border-[#E5E5E5] rounded-lg text-sm text-[#737373]"
                            style={{ height: "32px" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="flex w-full gap-3">
                      <div className="flex flex-col gap-2 flex-1">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-white/60"
                        >
                          Work email
                        </label>
                        <div className="flex flex-col w-full gap-2">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="flex items-center w-full gap-1 py-1 px-3 bg-white border border-[#E5E5E5] rounded-lg text-sm text-[#737373]"
                            style={{ height: "32px" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company Input */}
                    <div className="flex w-full gap-3">
                      <div className="flex flex-col gap-2 flex-1">
                        <label
                          htmlFor="company"
                          className="text-sm font-medium text-white/60"
                        >
                          Company name (optional)
                        </label>
                        <div className="flex flex-col w-full gap-2">
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="flex items-center w-full gap-1 py-1 px-3 bg-white border border-[#E5E5E5] rounded-lg text-sm text-[#737373]"
                            style={{ height: "32px" }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="flex w-full gap-3">
                      <div className="flex flex-col gap-2 flex-1">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-white/60"
                        >
                          Message (optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="flex w-full gap-2 py-2 px-3 bg-white border border-[#E5E5E5] rounded-lg text-sm text-[#737373] resize-none"
                          style={{ minHeight: "100px" }}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col items-center w-full gap-2 pt-4">
                      <div
                        className="p-1 rounded-xl"
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          boxShadow:
                            "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(105, 56, 239, 0.12)",
                          width: "160px",
                        }}
                      >
                        <button
                          type="submit"
                          className="flex items-center justify-center w-full gap-2 py-3 px-6 rounded-lg text-base font-medium"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(105, 56, 239, 0.3) 0%, rgba(105, 56, 239, 0.1) 100%), #FFFFFF",
                            border: "1px solid rgba(255, 255, 255, 0.8)",
                            color: "#6938EF",
                          }}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>

                  {/* Terms Text */}
                  <p
                    className="text-xs text-center text-[#0A0A0A] w-full"
                    style={{
                      fontFamily: "Roboto, sans-serif",
                      lineHeight: "1.5em",
                    }}
                  >
                    By clicking Book a demo you&apos;re confirming that you
                    agree with our{" "}
                    <a
                      href="https://beezi.ai/terms-and-conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-80"
                    >
                      Terms and Conditions
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
