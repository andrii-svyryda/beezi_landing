"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/sections/Footer";
import Container from "../components/Container";
import { useState } from "react";

export default function BookADemo() {
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
    <div className="w-full bg-[#050011]">
      <Navbar hideBookButton={true} />

      {/* Header Section */}
      <section className="w-full flex flex-col items-center md:px-16 pt-48 pb-24">
        <Container>
          <div className="flex flex-col items-center gap-20">
            <div className="flex flex-col items-center gap-6 w-full max-w-[620px]">
              <div className="flex flex-col items-center w-full gap-6">
                <h1
                  className="text-7xl font-bold text-center leading-normal w-full"
                  style={{
                    fontFamily: "Geist, sans-serif",
                    background:
                      "linear-gradient(0deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 1) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Contact us
                </h1>
                <p className="text-lg text-white/80 text-center w-full">
                  Get in touch with our sales and support teams for demos,
                  onboarding support, or product questions.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Form Section */}
      <section className="w-full md:px-16">
        <Container maxWidth="904px">
          <div className="flex flex-col items-center w-full gap-20">
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
                <div className="flex flex-col items-center w-full rounded-xl md:py-16 md:px-16 py-8 px-4 bg-[#0D081B]">
                  {/* Content */}
                  <div className="flex flex-col items-center w-full gap-8">
                    {/* Section Title */}
                    <div className="w-full flex flex-col items-center gap-1">
                      <div className="flex flex-col items-center w-full gap-3">
                        <h2
                          className="text-5xl font-bold text-center leading-none w-full"
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            background:
                              "linear-gradient(0deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 1) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          Request a demo
                        </h2>
                        <p
                          className="text-lg text-center w-full"
                          style={{
                            background:
                              "linear-gradient(0deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 1) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          Book a free, personalized demo to see Beezi in action.
                        </p>
                      </div>
                    </div>

                    {/* Form */}
                    <div className="flex flex-col items-center gap-4 pt-4 w-full max-w-[513px]">
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
                                className="flex items-center w-full gap-1 py-1 px-3 border border-white/10 rounded-lg text-sm text-[#737373]"
                                style={{
                                  height: "32px",
                                  background: "rgba(255, 255, 255, 0.04)",
                                }}
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
                                className="flex items-center w-full gap-1 py-1 px-3 border border-white/10 rounded-lg text-sm text-[#737373]"
                                style={{
                                  height: "32px",
                                  background: "rgba(255, 255, 255, 0.04)",
                                }}
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
                                className="flex items-center w-full gap-1 py-1 px-3 border border-white/10 rounded-lg text-sm text-[#737373]"
                                style={{
                                  height: "32px",
                                  background: "rgba(255, 255, 255, 0.04)",
                                }}
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
                              className="flex w-full gap-2 py-2 px-3 border border-white/10 rounded-lg text-sm text-[#737373] resize-none"
                              style={{
                                minHeight: "100px",
                                background: "rgba(255, 255, 255, 0.04)",
                              }}
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
                              Book a demo
                            </button>
                          </div>
                        </div>
                      </form>

                      {/* Terms Text */}
                      <p className="text-xs text-center text-[#FAFAFA] w-full leading-normal">
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
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
