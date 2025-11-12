"use client";

import { useState, useEffect, useRef } from "react";
import Container from "../Container";
import GlassCard from "../GlassCard";
import Image from "next/image";

export default function Demo() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [manuallySelected, setManuallySelected] = useState(false);

  const tabs = [
    { id: 0, label: "Ticket", image: "/admin_view.png" },
    { id: 1, label: "Score", image: "/admin_view.png" },
    { id: 2, label: "Clarify", image: "/admin_view.png" },
    { id: 3, label: "Plan", image: "/admin_view.png" },
    { id: 4, label: "PR", image: "/admin_view.png" },
  ];

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
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
  };

  useEffect(() => {
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
  }, [activeTab, tabs.length, manuallySelected]);

  return (
    <section
      ref={sectionRef}
      id="demo"
      style={{
        minHeight: `${tabs.length * 100}vh`,
        paddingTop: "88px",
        paddingBottom: "88px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "80px",
            }}
          >
            {/* Section Title */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                gap: "46px",
              }}
            >
              <h2
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  fontSize: "48px",
                  lineHeight: "1em",
                  textAlign: "center",
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FAFAFA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Smart ticket system
              </h2>

              {/* Screenshot with overlapping tabs */}
              <div
                style={{
                  position: "relative",
                  maxWidth: "1200px",
                  width: "100%",
                }}
              >
                {/* Tabs - positioned to overlap the image */}
                <div
                  style={{
                    position: "absolute",
                    top: "-24px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 10,
                    display: "flex",
                    gap: "2px",
                    padding: "4px",
                    background: "#050011",
                    borderRadius: "999px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      style={{
                        padding: "8px 16px",
                        borderRadius: "999px",
                        background:
                          activeTab === tab.id ? "#6938EF" : "transparent",
                        border: "none",
                        color: "#FAFAFA",
                        fontFamily: "Geist, sans-serif",
                        fontSize: "16px",
                        fontWeight: 700,
                        lineHeight: "1.5em",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Screenshot */}
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
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
