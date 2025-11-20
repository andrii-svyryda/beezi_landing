"use client";

import { useState, useEffect, useRef } from "react";
import Container from "../Container";
import GlassCard from "../GlassCard";
import Image from "next/image";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLDivElement>(null);

  const timelineItems = [
    {
      icon: "/chain-link-icon.svg",
      title: "Connect Tools",
      description:
        "Link Jira, Slack, and GitHub in a few clicks — Beezi instantly syncs your workspace.",
    },
    {
      icon: "/settings-toggle-icon.svg",
      title: "Choose Admin or Tenant Mode",
      description:
        "Set up Beezi for full visibility and control as a team lead, or go developer-only for a focused view.",
    },
    {
      icon: "/terminal-icon.svg",
      title: "Train Once (Optional)",
      description:
        "Teach Beezi your code style and structure — or skip training and start coding right away.",
    },
    {
      icon: "/play-circle-icon.svg",
      title: "Start Work",
      description:
        "Create or import tickets, and Beezi begins assisting your team immediately.",
    },
  ];

  // Scroll-based activation (desktop only) with sticky behavior
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate when section is in the "sticky" zone
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      // Define the sticky zone - requires more scroll to progress through items
      const stickyStart = viewportHeight * 0.2; // Start sticky when section is 20% from top
      const stickyEnd = -sectionHeight + viewportHeight * 0.8; // End when section is mostly scrolled past

      // Calculate progress through the section (0 to 1)
      // This requires much more scrolling to progress through items
      const scrollProgress = Math.max(
        0,
        Math.min(1, (stickyStart - sectionTop) / (stickyStart - stickyEnd))
      );

      // Determine which item should be active based on scroll progress
      // Each item gets an equal portion of the scroll range
      const itemProgress = scrollProgress * timelineItems.length;
      const newIndex = Math.min(
        timelineItems.length - 1,
        Math.floor(itemProgress)
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, timelineItems.length]);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);

    // On desktop, also scroll to the corresponding position
    if (!isMobile && sectionRef.current) {
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Calculate the scroll position for this item
      // Based on the same logic used in handleScroll
      const stickyStart = viewportHeight * 0.2;
      const stickyEnd = -sectionHeight + viewportHeight * 0.8;
      const scrollRange = stickyStart - stickyEnd;

      // Calculate where in the scroll range this item should be
      // Add a small offset to center the item in its range
      const itemProgress = (index + 0.5) / timelineItems.length;
      const targetScrollOffset = itemProgress * scrollRange;

      // Calculate the absolute scroll position
      const targetScrollPosition =
        sectionTop - stickyStart + targetScrollOffset;

      // Smooth scroll to the target position
      window.scrollTo({
        top: targetScrollPosition,
        behavior: "instant",
      });
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
      <section
        ref={sectionRef}
        className="w-full py-16 md:py-0"
        style={{
          minHeight: isMobile ? "auto" : "200vh",
          position: "relative",
        }}
      >
        <div
          style={{
            position: isMobile ? "relative" : "sticky",
            top: isMobile ? "auto" : "80px",
            paddingTop: isMobile ? "0" : "7rem",
            paddingBottom: isMobile ? "0" : "7rem",
            zIndex: 1,
          }}
        >
          <Container>
            <div className="flex flex-col md:flex-row gap-8 md:gap-20 w-full">
              {/* Title Section - Order 1 on mobile */}
              <div className="flex flex-col gap-4 md:gap-6 md:hidden">
                <h2
                  className="text-3xl font-bold text-center"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    lineHeight: "1em",
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FAFAFA 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    margin: 0,
                  }}
                >
                  From Setup to Shipping in 20 Minutes
                </h2>
                <p
                  className="text-base text-center"
                  style={{
                    fontFamily: "Geist, sans-serif",
                    fontWeight: 400,
                    lineHeight: "1.5555555555555556em",
                    color: "rgba(255, 255, 255, 0.8)",
                    margin: 0,
                  }}
                >
                  Beezi integrates fast, fits naturally into your workflow, and
                  starts delivering value right away — no disruption, no long
                  onboarding, no retraining needed.
                </p>
              </div>

              {/* Gray Rectangle - Order 2 on mobile */}
              <div
                className="w-full md:w-[616px] h-[400px] md:h-[616px] md:order-last"
                style={{
                  borderRadius: "20px",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/setup-shipping-image.svg"
                  alt="Timeline"
                  width={616}
                  height={616}
                />
              </div>

              {/* Left wrapper for desktop - contains title and items */}
              <div className="flex flex-col gap-8 md:gap-15 flex-1">
                {/* Title Section for desktop only */}
                <div className="hidden md:flex flex-col gap-4 md:gap-6">
                  <h2
                    className="text-5xl font-bold text-left"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      lineHeight: "1em",
                      background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FAFAFA 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      margin: 0,
                    }}
                  >
                    From Setup to Shipping in 20 Minutes
                  </h2>
                  <p
                    className="text-lg text-left"
                    style={{
                      fontFamily: "Geist, sans-serif",
                      fontWeight: 400,
                      lineHeight: "1.5555555555555556em",
                      color: "rgba(255, 255, 255, 0.8)",
                      margin: 0,
                    }}
                  >
                    Beezi integrates fast, fits naturally into your workflow,
                    and starts delivering value right away — no disruption, no
                    long onboarding, no retraining needed.
                  </p>
                </div>

                {/* Timeline Items - Order 3 on mobile */}
                <div className="flex flex-col gap-4">
                  {timelineItems.map((item, index) => {
                    const isActive = activeIndex === index;

                    if (isActive) {
                      // Active item with GlassCard
                      return (
                        <div
                          key={index}
                          className="cursor-pointer transition-all duration-500 ease-out"
                          onClick={() => handleItemClick(index)}
                          style={{
                            animation: "fadeInScale 0.5s ease-out",
                          }}
                        >
                          <GlassCard
                            padding="8px"
                            style={{
                              boxShadow:
                                "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08), 0px 2px 24px 0px rgba(105, 56, 239, 0.12)",
                              transition: "all 0.5s ease-out",
                            }}
                          >
                            <div
                              className="p-4 md:p-6"
                              style={{
                                background: "#0D081B",
                                borderRadius: "12px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  gap: "16px",
                                  alignItems: "flex-start",
                                }}
                              >
                                {/* Icon */}
                                <div
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                    flexShrink: 0,
                                  }}
                                >
                                  <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={24}
                                    height={24}
                                  />
                                </div>

                                {/* Content */}
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                    flex: 1,
                                  }}
                                >
                                  <h3
                                    className="text-lg md:text-xl font-bold"
                                    style={{
                                      fontFamily: "Geist, sans-serif",
                                      lineHeight: "1em",
                                      color: "#FAFAFA",
                                      margin: 0,
                                    }}
                                  >
                                    {item.title}
                                  </h3>
                                  {item.description && (
                                    <p
                                      className="text-sm"
                                      style={{
                                        fontFamily: "Geist, sans-serif",
                                        fontWeight: 400,
                                        lineHeight: "1.4285714285714286em",
                                        color: "rgba(255, 255, 255, 0.5)",
                                        margin: 0,
                                      }}
                                    >
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>
                          </GlassCard>
                        </div>
                      );
                    } else {
                      // Inactive item without GlassCard
                      return (
                        <div
                          key={index}
                          className="rounded-xl py-3 pl-6 md:pl-8 cursor-pointer"
                          style={{
                            opacity: 0.6,
                            transition: "all 0.3s ease-out",
                            transform: "scale(0.98)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = "0.8";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = "0.6";
                            e.currentTarget.style.transform = "scale(0.98)";
                          }}
                          onClick={() => handleItemClick(index)}
                        >
                          <div className="flex gap-4 items-center">
                            {/* Icon */}
                            <div
                              style={{
                                width: "24px",
                                height: "24px",
                                flexShrink: 0,
                              }}
                            >
                              <Image
                                src={item.icon}
                                alt={item.title}
                                width={24}
                                height={24}
                              />
                            </div>

                            {/* Title */}
                            <h3
                              className="text-lg md:text-xl font-bold"
                              style={{
                                fontFamily: "Geist, sans-serif",
                                lineHeight: "1em",
                                color: "#FAFAFA",
                                margin: 0,
                              }}
                            >
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}
