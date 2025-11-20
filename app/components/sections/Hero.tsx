"use client";

import Image from "next/image";
import Link from "next/link";
import GlassCard from "../GlassCard";
import Container from "../Container";
import { useState, useEffect } from "react";

export default function Hero() {
  const phrases = [
    "AI Teammate",
    "AI Adoption Partner",
    "AI Team Optimizer",
    "AI Productivity Driver",
    "AI Efficiency Tracker",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 30 : 50;
    const pauseDuration = 3000; // 2 seconds pause

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting && displayedText === currentPhrase) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, isPaused, currentPhraseIndex, phrases]);

  return (
    <section
      className="relative flex flex-col items-center overflow-hidden"
      style={{
        paddingTop: "184px",
        paddingBottom: "88px",
      }}
    >
      {/* Linear Gradient Background */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "calc(100% - 150px)",
          background:
            "radial-gradient(502.62% 100% at 50% 0%, #0A0A0A 40%, #6938EF 80%, #FFFFFF 100%)",
        }}
      />

      {/* Background Pattern Image */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "calc(100% - 150px)",
          backgroundImage: "url('/hero_background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
        }}
      />

      {/* Content */}
      <Container>
        <div
          className="relative z-10 flex flex-col items-center"
          style={{ gap: "80px" }}
        >
          {/* Text Content */}
          <div
            className="w-full flex flex-col items-center"
            style={{ gap: "40px" }}
          >
            <div
              className="w-full flex flex-col items-center"
              style={{ gap: "24px" }}
            >
              {/* Heading */}
              <h1
                className="md:text-7xl text-5xl text-center font-bold min-h-[196px] md:min-h-0"
                style={{
                  lineHeight: "1em",
                  fontFamily: "Geist",
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FAFAFA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                An {displayedText}
                <span
                  className="inline-block"
                  style={{
                    width: "3px",
                    height: "1em",
                    marginLeft: "4px",
                    borderRight: "3px solid rgba(255, 255, 255, 0.8)",
                    verticalAlign: "top",
                    animation: "blink 1s step-end infinite",
                  }}
                ></span>
                <br />
                That Feels Native
              </h1>

              {/* Subtitle */}
              <p
                className="text-center max-w-[668px]"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.5555em",
                  color: "rgba(255, 255, 255, 0.8)",
                }}
              >
                Delegate the tedious work, accelerate delivery, improve code
                quality, and unlock measurable savings
              </p>
            </div>

            {/* Button */}
            <div
              className="flex w-full md:w-[160px]"
              style={{ paddingTop: "16px" }}
            >
              <Link href="/book-a-demo" className="w-full">
                <GlassCard
                  borderRadius="12px"
                  className="transition-all hover:scale-105 cursor-pointer w-full"
                >
                  <div
                    className="relative"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(105, 56, 239, 0.3) 0%, rgba(105, 56, 239, 0.1) 100%), #FFFFFF",
                      borderRadius: "8px",
                      padding: "12px 20px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "1.5em",
                        color: "#6938EF",
                        textAlign: "center",
                      }}
                    >
                      Book a demo
                    </span>
                  </div>
                </GlassCard>
              </Link>
            </div>
          </div>

          {/* Dashboard Screenshot */}
          <GlassCard
            className="w-full"
            padding="8px"
            style={{
              boxShadow:
                "0px 4px 12px rgba(0, 0, 0, 0.1), 0px 8px 32px rgba(105, 56, 239, 0.2)",
            }}
          >
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/admin_view.png"
                alt="Beezi Dashboard"
                width={1440}
                height={900}
                priority
                className="w-full h-auto"
              />
            </div>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}
