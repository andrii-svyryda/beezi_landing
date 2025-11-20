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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const lastScrollY = useRef(0);
  const lastScrollDirection = useRef<"up" | "down">("down");

  const tabs = [
    {
      id: 0,
      label: "Ticket",
      image: "/ticket_system/first.svg",
      description:
        "Created in your project management tool and automatically added to your backlog",
      width: 1262,
      top: -57,
      left: 108,
      background: "rgba(25, 104, 219, 0.3)",
    },
    {
      id: 1,
      label: "Score",
      image: "/ticket_system/second.svg",
      description:
        "AI scores the task description — clear ones move on, unclear ones get flagged.",
      width: 1519,
      top: 16,
      left: 56,
      background:
        "linear-gradient(287.15deg, #110C26 50%, rgba(105, 56, 239, 0.4) 100%)",
    },
    {
      id: 2,
      label: "Clarify",
      image: "/ticket_system/third.svg",
      description:
        "If details are missing, a short chat helps fill the gaps until everything’s clear.",
      width: 817,
      top: 0,
      left: 0,
      background: "linear-gradient(73.33deg, #110C26 30.21%, #401F46 98.53%)",
      additionalImage: "/ticket_system/third_additional.svg",
      additionalImageWidth: 580,
      additionalImageLeft: 636,
      additionalImageTop: 108,
      additionalImageBorder: true,
    },
    {
      id: 3,
      label: "Plan",
      image: "/ticket_system/fourth.svg",
      description:
        "A README-style implementation plan is generated and refined through quick dialogue.",
      width: 927,
      left: 124,
      top: 0,
      background: "linear-gradient(270deg, #110C26 48.38%, #401F46 100%)",
      additionalImage: "/ticket_system/fourth_additional.svg",
      additionalImageWidth: 860,
      additionalImageLeft: 176,
      additionalImageTop: 279,
    },
    {
      id: 4,
      label: "PR",
      image: "/ticket_system/fifth.svg",
      description:
        "Code is produced in minutes and pushed as a Pull Request, ready for review and comments.",
      width: 997,
      top: 0,
      left: 100,
      background: "rgba(17, 12, 38, 1)",
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
    if (tabId === activeTab) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setActiveTab(tabId);
      setIsTransitioning(false);
    }, 150);

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

      // Track scroll direction
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? "down" : "up";
      const directionChanged = direction !== lastScrollDirection.current;

      lastScrollY.current = currentScrollY;
      lastScrollDirection.current = direction;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const isSectionStuck = rect.top <= 0 && rect.bottom >= windowHeight;

      // If scrolling up and in section (not at step 1), jump to step 1 and scroll to top
      if (direction === "up" && isSectionStuck && activeTab === 4) {
        setIsTransitioning(true);
        setActiveTab(0);

        // Scroll to the top of the section
        window.scrollTo({
          top: section.offsetTop + 400,
          behavior: "instant",
        });

        setTimeout(() => {
          setIsTransitioning(false);
        }, 300);
        return;
      }

      // If scrolling up and at first tab, allow scroll-through
      if (direction === "up" && activeTab === 0 && rect.top >= 0) {
        // Allow natural scrolling up past the section
        return;
      }

      // Check if section is in viewport
      if (isSectionStuck) {
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

        // Only progress through steps when scrolling down
        // Section is "stuck" - calculate scroll progress
        const scrollProgress =
          Math.abs(rect.top) / (rect.height - windowHeight);
        const newTab = Math.min(
          Math.floor(scrollProgress * tabs.length),
          tabs.length - 1
        );

        if (newTab !== activeTab) {
          setIsTransitioning(true);
          setActiveTab(newTab);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 300);
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
            <div className="flex flex-col items-center w-full gap-6 md:gap-8">
              <h2
                className="text-3xl md:text-5xl font-bold text-center"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  lineHeight: "1.2em",
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FAFAFA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Smart Ticket System
              </h2>

              {/* Screenshot with tabs */}
              <div className="flex flex-col gap-3 md:gap-0 w-full max-w-[1440px]">
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

                {/* Blue background container with pattern */}
                <GlassCard padding={"8px"}>
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{
                      background: tabs[activeTab].background,
                      transition:
                        "background 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <div
                      className="relative w-full rounded-xl overflow-hidden"
                      style={{
                        backgroundImage: `url(/smart_system_background_pattern.svg)`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "auto",
                        paddingLeft: isMobile ? "16px" : "24px",
                        paddingTop: isMobile ? "16px" : "32px",
                        paddingBottom: isMobile ? "16px" : "0",
                        paddingRight: isMobile ? "16px" : "0",
                      }}
                    >
                      {/* Black fade-in overlay at the bottom */}

                      {/* Screenshot with description - overflowing container */}
                      <div
                        className="relative h-[160px] md:h-[680px]"
                        style={{
                          zIndex: 0,
                        }}
                      >
                        {!isMobile && (
                          <div
                            style={{
                              position: "absolute",
                              bottom: 0,
                              left: -24,
                              right: 0,
                              height: "350px",
                              background:
                                "linear-gradient(180deg, rgba(5, 0, 17, 0) 0%, rgba(5, 0, 17, 1) 90%)",
                              pointerEvents: "none",
                              zIndex: 1,
                            }}
                          />
                        )}
                        <div
                          style={{
                            padding: isMobile ? "6px" : "24px",
                            borderRadius: isMobile ? "12px" : "24px",
                            border: "1px solid rgba(255, 255, 255, 0.5)",
                            background: "rgba(255, 255, 255, 0.01)",
                            backdropFilter: "blur(2px)",
                            WebkitBackdropFilter: "blur(2px)",
                            position: "absolute",
                            left: isMobile ? 0 : tabs[activeTab].left,
                            top: isMobile ? 0 : tabs[activeTab].top,
                            width: isMobile
                              ? "100%"
                              : tabs[activeTab].width + 48,
                            opacity: isTransitioning ? 0 : 1,
                            transform: isTransitioning
                              ? "translateY(20px) scale(0.95)"
                              : "translateY(0) scale(1)",
                            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        >
                          <div
                            style={{
                              borderRadius: isMobile ? "0" : "12px",
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
                          </div>
                        </div>
                        {!!tabs[activeTab].additionalImage && (
                          <div
                            style={{
                              borderRadius: "12px",
                              position: "absolute",
                              left:
                                tabs[activeTab].additionalImageLeft +
                                tabs[activeTab].left,
                              top:
                                tabs[activeTab].additionalImageTop +
                                tabs[activeTab].top,
                              width: tabs[activeTab].additionalImageWidth,
                              background: "rgba(255, 255, 255, 0.1)",
                              backdropFilter: "blur(20px)",
                              WebkitBackdropFilter: "blur(20px)",
                              opacity: isTransitioning ? 0 : 1,
                              transform: isTransitioning
                                ? "translateY(30px) scale(0.93)"
                                : "translateY(0) scale(1)",
                              transition:
                                "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                            }}
                          >
                            <Image
                              src={tabs[activeTab].additionalImage}
                              alt={tabs[activeTab].label}
                              width={1440}
                              height={900}
                              className="w-full h-auto"
                              style={{
                                transition: "opacity 0.3s ease",
                              }}
                            />
                          </div>
                        )}

                        {/* Description - at bottom on desktop */}
                        <div
                          className="hidden md:block absolute bottom-4 left-1/2"
                          style={{
                            transform: isTransitioning
                              ? "translateX(-50%) translateY(20px)"
                              : "translateX(-50%) translateY(0)",
                            maxWidth: "600px",
                            width: "calc(100% - 64px)",
                            zIndex: 2,
                            opacity: isTransitioning ? 0 : 1,
                            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        >
                          <GlassCard padding="8px">
                            <div
                              className="flex items-center gap-3 p-8 rounded-xl"
                              style={{
                                background: "rgba(13, 8, 27, 1)",
                              }}
                            >
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
                </GlassCard>
                {/* Description - below image on mobile */}
                <div
                  className="md:hidden md:mt-4 z-2"
                  style={{
                    opacity: isTransitioning ? 0 : 1,
                    transform: isTransitioning
                      ? "translateY(10px)"
                      : "translateY(0)",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
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
        </Container>
      </div>
    </section>
  );
}
