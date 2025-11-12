"use client";

import { useState, useEffect, useRef } from "react";
import Container from "../Container";
import GlassCard from "../GlassCard";
import Image from "next/image";

export default function Demo() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [manuallySelected, setManuallySelected] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const tabs = [
    {
      id: 0,
      label: "Ticket",
      image: "/admin_view.png",
      description: "Created in Jira and automatically lands in the backlog.",
    },
    {
      id: 1,
      label: "Score",
      image: "/admin_view.png",
      description:
        "Beezi analyzes complexity and provides an estimated difficulty score.",
    },
    {
      id: 2,
      label: "Clarify",
      image: "/admin_view.png",
      description:
        "AI reviews requirements and asks clarifying questions if needed.",
    },
    {
      id: 3,
      label: "Plan",
      image: "/admin_view.png",
      description:
        "Creates a detailed implementation plan with step-by-step approach.",
    },
    {
      id: 4,
      label: "PR",
      image: "/admin_view.png",
      description:
        "Generates code and submits a pull request ready for review.",
    },
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);

    // Only do scroll behavior on desktop
    if (!isMobile) {
      setManuallySelected(true);

      // Scroll to the position where this tab would be active
      if (sectionRef.current) {
        const section = sectionRef.current;
        const sectionRect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = section.offsetHeight;

        // Calculate scroll progress needed for this tab (target middle of tab range)
        const scrollProgress = (tabId + 0.5) / tabs.length;

        // Calculate the scroll position relative to the section
        const scrollableHeight = sectionHeight - windowHeight;
        const targetScrollTop =
          section.offsetTop + scrollProgress * scrollableHeight;

        // Smooth scroll to the target position
        window.scrollTo({
          top: targetScrollTop,
          behavior: "instant",
        });
      }

      // Reset manual selection after a short delay to re-enable scroll behavior
      setTimeout(() => {
        setManuallySelected(false);
      }, 100);
    }
  };

  useEffect(() => {
    // Only enable scroll behavior on desktop
    if (isMobile) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is in viewport
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        // Don't auto-switch if manually selected
        if (manuallySelected) {
          // Allow scrolling out of section if at boundaries
          if (activeTab === 0 && rect.top < 0) {
            // At first tab, allow scroll up
            return;
          }
          if (activeTab === tabs.length - 1 && rect.bottom > windowHeight) {
            // At last tab, allow scroll down
            return;
          }
        }

        // Section is "stuck" - calculate scroll progress
        const scrollProgress =
          Math.abs(rect.top) / (rect.height - windowHeight);
        const newTab = Math.min(
          Math.floor(scrollProgress * tabs.length),
          tabs.length - 1
        );

        if (newTab !== activeTab) {
          setActiveTab(newTab);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab, tabs.length, manuallySelected, isMobile]);

  return (
    <section
      ref={sectionRef}
      id="demo"
      className="py-16 md:py-22 relative"
      style={{
        minHeight: isMobile ? "auto" : `${tabs.length * 100}vh`,
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          position: isMobile ? "relative" : "sticky",
          top: isMobile ? "auto" : 0,
          height: isMobile ? "auto" : "100vh",
        }}
      >
        <Container>
          <div className="flex flex-col items-center gap-12 md:gap-20">
            {/* Section Title */}
            <div className="flex flex-col items-center w-full gap-8 md:gap-12">
              <h2
                className="text-3xl md:text-5xl font-bold text-center"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  lineHeight: "1em",
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FAFAFA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Smart ticket system
              </h2>

              {/* Screenshot with tabs */}
              <div className="flex flex-col gap-6 md:gap-0 w-full max-w-[1200px]">
                {/* Tabs - above image on mobile, overlapping on desktop */}
                <div
                  className="flex justify-center md:relative md:-mb-6"
                  style={{
                    zIndex: 10,
                  }}
                >
                  <div
                    className="flex gap-0.5 p-1 rounded-full"
                    style={{
                      background: "#050011",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className="px-4 py-2 rounded-full transition-all"
                        style={{
                          background:
                            activeTab === tab.id ? "#6938EF" : "transparent",
                          border: "none",
                          color: "#FAFAFA",
                          fontFamily: "Geist, sans-serif",
                          fontSize: "16px",
                          fontWeight: 700,
                          lineHeight: "1.5em",
                          cursor: "pointer",
                        }}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Screenshot with description */}
                <div className="relative w-full">
                  <GlassCard
                    padding="8px"
                    style={{
                      width: "100%",
                      boxShadow:
                        "0px 4px 12px rgba(0, 0, 0, 0.1), 0px 8px 32px rgba(105, 56, 239, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "12px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <Image
                        src={tabs[activeTab].image}
                        alt={tabs[activeTab].label}
                        width={1440}
                        height={900}
                        className="w-full h-auto"
                        style={{
                          transition: "opacity 0.3s ease",
                        }}
                      />

                      {/* Description - at bottom on desktop */}
                      <div
                        className="hidden md:block absolute bottom-8 left-1/2"
                        style={{
                          transform: "translateX(-50%)",
                          maxWidth: "600px",
                          width: "calc(100% - 64px)",
                        }}
                      >
                        <GlassCard padding="4px">
                          <div
                            className="flex items-center gap-3 p-4 rounded-xl"
                            style={{
                              background: "rgba(13, 8, 27, 1)",
                            }}
                          >
                            {/* Icon */}
                            <div
                              className="flex items-center justify-center px-3 py-1.5 rounded-full"
                              style={{
                                background: "rgba(105, 56, 239, 0.2)",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "Geist, sans-serif",
                                  fontSize: "14px",
                                  fontWeight: 600,
                                  color: "#FAFAFA",
                                }}
                              >
                                /
                              </span>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-1 flex-1">
                              <h4
                                style={{
                                  fontFamily: "Geist, sans-serif",
                                  fontSize: "18px",
                                  fontWeight: 700,
                                  lineHeight: "1em",
                                  color: "#FAFAFA",
                                }}
                              >
                                {tabs[activeTab].label}
                              </h4>
                              <p
                                style={{
                                  fontFamily: "Geist, sans-serif",
                                  fontSize: "14px",
                                  lineHeight: "1.43em",
                                  color: "rgba(255, 255, 255, 0.5)",
                                }}
                              >
                                {tabs[activeTab].description}
                              </p>
                            </div>
                          </div>
                        </GlassCard>
                      </div>
                    </div>
                  </GlassCard>

                  {/* Description - below image on mobile */}
                  <div className="md:hidden mt-6">
                    <GlassCard padding="8px">
                      <div
                        className="flex items-center gap-3 p-4 rounded-xl"
                        style={{
                          background: "rgba(13, 8, 27, 1)",
                        }}
                      >
                        {/* Icon */}
                        <div
                          className="flex items-center justify-center px-3 py-1.5 rounded-full"
                          style={{
                            background: "rgba(105, 56, 239, 0.2)",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Geist, sans-serif",
                              fontSize: "14px",
                              fontWeight: 600,
                              color: "#FAFAFA",
                            }}
                          >
                            /
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-1 flex-1">
                          <h4
                            style={{
                              fontFamily: "Geist, sans-serif",
                              fontSize: "18px",
                              fontWeight: 700,
                              lineHeight: "1em",
                              color: "#FAFAFA",
                            }}
                          >
                            {tabs[activeTab].label}
                          </h4>
                          <p
                            style={{
                              fontFamily: "Geist, sans-serif",
                              fontSize: "14px",
                              lineHeight: "1.43em",
                              color: "rgba(255, 255, 255, 0.5)",
                            }}
                          >
                            {tabs[activeTab].description}
                          </p>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
