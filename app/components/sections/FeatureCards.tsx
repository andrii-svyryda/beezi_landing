"use client";

import Container from "../Container";
import GlassCard from "../GlassCard";
import Image from "next/image";
import CountUp from "react-countup";

export default function FeatureCards() {
  // Configurable integrations list
  const integrations = [
    { icon: "/jira-icon.svg", alt: "Jira", width: 38, height: 16 },
    { icon: "/slack-icon.svg", alt: "Slack", width: 63, height: 16 },
    { icon: "/github-icon.svg", alt: "GitHub", width: 65, height: 16 },
    { icon: "/azure-icon.svg", alt: "Azure", width: 55, height: 16 },
    { icon: "/teams-feature-icon.svg", alt: "Teams", width: 17, height: 16 },
  ];

  const features = [
    {
      title: "Stay in your workflow. No disruption.",
      description:
        "Beezi runs inside your existing tools — GitHub, Jira, and Slack — keeping developers in flow without changing how they work.",
      visual: "workflow",
      width: "wider", // 787px equivalent
    },
    {
      title: "Cut cost per feature by 45%.",
      description:
        "Save from day one with optimized prompting, model routing, and shorter development cycles.",
      visual: "cost",
      width: "standard",
    },
    {
      title: "Keep your code safe.",
      description:
        "Enterprise-grade security with SSO, audit logs, and end-to-end encryption, so your team can code with confidence.",
      visual: "security",
      width: "standard",
    },
    {
      title: "Track performance, usage, and AI impact.",
      description:
        "See how AI changes your workflow — monitor velocity, token spend, adoption, and ROI in real time.",
      visual: "analytics",
      width: "wider",
    },
  ];

  return (
    <section className="pt-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {features.map((feature, index) => (
            <GlassCard
              key={index}
              padding="8px"
              className={`${
                feature.width === "wider" ? "md:col-span-3" : "md:col-span-2"
              }`}
              style={{
                boxShadow:
                  "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08), 0px 2px 24px 0px rgba(105, 56, 239, 0.12)",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(105, 56, 239, 0.1)",
              }}
            >
              <div className="bg-[#0D081B] rounded-xl overflow-hidden h-full">
                {/* Image Section */}
                <div
                  className="relative min-h-[200px] md:min-h-[240px] overflow-hidden"
                  style={{
                    background:
                      feature.visual === "workflow" ||
                      feature.visual === "analytics"
                        ? "radial-gradient(circle at 50% 0%, rgba(105, 56, 239, 0.16) 0%, rgba(105, 56, 239, 0.08) 100%)"
                        : "radial-gradient(circle at 50% 0%, rgba(105, 56, 239, 0.3) 0%, rgba(105, 56, 239, 0.1) 100%)",
                  }}
                >
                  {/* Background Pattern - Scaled and positioned */}
                  {(feature.visual === "workflow" ||
                    feature.visual === "security") && (
                    <div
                      style={{
                        position: "absolute",
                        left: "-560px",
                        top: "-0.1px",
                        width: "2560px",
                        height: "1270px",
                        backgroundImage: "url(/hero_background.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 1,
                      }}
                    />
                  )}

                  {/* Dark radial gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "0",
                      width: "100%",
                      height: "240px",
                      background:
                        "radial-gradient(circle at 50% 45.79%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
                    }}
                  />

                  {/* Purple gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      left: "0",
                      top: "0",
                      width: "100%",
                      height: "240px",
                      background:
                        "radial-gradient(circle at 50% 100%, rgba(105, 56, 239, 0.4) 0%, rgba(105, 56, 239, 0) 100%)",
                    }}
                  />

                  {/* Feature-specific visual content */}
                  {feature.visual === "workflow" && (
                    <>
                      <style jsx>{`
                        @keyframes scroll-left {
                          0% {
                            transform: translate(0, -50%);
                          }
                          100% {
                            transform: translate(-50%, -50%);
                          }
                        }
                        .scroll-container {
                          animation: scroll-left 45s linear infinite;
                        }
                      `}</style>
                      <div
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          className="scroll-container"
                          style={{
                            position: "absolute",
                            left: "-36.5px",
                            top: "50%",
                            display: "flex",
                            alignItems: "center",
                            gap: "24px",
                            width: "max-content",
                            transform: "translateY(-50%)",
                          }}
                        >
                          {/* Duplicate integrations for seamless loop */}
                          {[
                            ...integrations,
                            ...integrations,
                            ...integrations,
                            ...integrations,
                          ].map((integration, index) => (
                            <div
                              key={index}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "24px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  background: "white",
                                  padding: "12px 20px",
                                  borderRadius: "999px",
                                  border: "1px solid white",
                                  boxShadow:
                                    "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08)",
                                }}
                              >
                                <Image
                                  src={integration.icon}
                                  alt={integration.alt}
                                  width={integration.width}
                                  height={integration.height}
                                />
                              </div>
                              {/* Purple divider line */}
                              <div
                                style={{
                                  width: "24px",
                                  height: "1px",
                                  background: "#6938EF",
                                }}
                              />
                            </div>
                          ))}
                        </div>

                        {/* Beezi Logo in center */}
                        <div
                          style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 10,
                            background: "rgba(105, 56, 239, 0.2)",
                            border: "1px solid rgba(105, 56, 239, 0.4)",
                            borderRadius: "20px",
                            padding: "8px",
                            backdropFilter: "blur(10px)",
                          }}
                        >
                          <div
                            style={{
                              width: "64px",
                              height: "64px",
                              background: "white",
                              borderRadius: "12px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow:
                                "0px 0.5px 1px -0.25px rgba(0, 0, 0, 0.08), 0px 1px 24px 0px rgba(105, 56, 239, 0.2)",
                            }}
                          >
                            <Image
                              src="/logo-icon.svg"
                              alt="Beezi"
                              width={50}
                              height={50}
                              style={{
                                filter: "brightness(0) saturate(100%)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {feature.visual === "cost" && (
                    <div
                      style={{
                        position: "absolute",
                        height: "100%",
                        overflow: "hidden",
                        width: "500px",
                        left: "50%",
                        transform: "translateX(-50%)",
                      }}
                    >
                      {/* Vertical dashed lines */}
                      {[40, 90, 140, 190, 240, 286, 287, 340, 390, 440].map(
                        (x, index) => (
                          <div
                            key={index}
                            style={{
                              position: "absolute",
                              left: `${x}px`,
                              top: "30px",
                              width: "0px",
                              height: "180px",
                              borderLeft:
                                x === 286
                                  ? "2px solid #6938EF"
                                  : "1px dashed rgba(105, 56, 239, 0.2)",
                              borderStyle: x === 286 ? "solid" : "dashed",
                            }}
                          />
                        )
                      )}

                      {/* Logo at top center */}
                      <div
                        style={{
                          position: "absolute",
                          left: "275px",
                          top: "11.9px",
                          display: "flex",
                          alignItems: "center",
                          background: "white",
                          padding: "4px",
                          borderRadius: "999px",
                          border: "2px solid #6938EF",
                          boxShadow:
                            "0px 0.09375px 0.1875px -0.046875px rgba(0, 0, 0, 0.08), 0px 0.1875px 4.5px 0px rgba(105, 56, 239, 0.2)",
                          zIndex: 10,
                        }}
                      >
                        <Image
                          src="/logo-icon.svg"
                          alt="Beezi"
                          width={12}
                          height={12}
                          style={{
                            filter: "brightness(0) saturate(100%)",
                          }}
                        />
                      </div>

                      {/* Feature 1 - Top pill */}
                      <div
                        style={{
                          position: "absolute",
                          left: "96px",
                          top: "41.9px",
                          display: "flex",
                          width: "320px",
                          height: "32px",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            background: "#6938EF",
                            padding: "8px 24px",
                            borderRadius: "999px 0 0 999px",
                            width: "192px",
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Space Grotesk, sans-serif",
                              fontWeight: 700,
                              fontSize: "12px",
                              lineHeight: "1em",
                              letterSpacing: "0.05em",
                              textTransform: "uppercase",
                              color: "white",
                              textShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
                            }}
                          >
                            Feature 1
                          </span>
                        </div>
                        <div
                          style={{
                            background: "#8B6EF7",
                            backgroundImage:
                              "repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(105, 56, 239, 0.6) 8px, rgba(105, 56, 239, 0.6) 10px)",
                            padding: "4px",
                            borderRadius: "0 999px 999px 0",
                            width: "128px",
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          <div
                            style={{
                              background: "white",
                              border: "1px solid white",
                              padding: "6px 10px",
                              borderRadius: "999px",
                              boxShadow:
                                "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08), 0px 2px 48px 0px rgba(105, 56, 239, 0.2)",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontWeight: 700,
                                fontSize: "12px",
                                lineHeight: "1em",
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                                color: "#6938EF",
                              }}
                            >
                              Cost -40%
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Feature 2 - Middle pill (main) */}
                      <div
                        style={{
                          position: "absolute",
                          left: "48px",
                          top: "85.9px",
                          display: "flex",
                          width: "400px",
                          height: "32px",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            background: "#6938EF",
                            padding: "8px 24px",
                            borderRadius: "999px 0 0 999px",
                            width: "240px",
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Space Grotesk, sans-serif",
                              fontWeight: 700,
                              fontSize: "12px",
                              lineHeight: "1em",
                              letterSpacing: "0.05em",
                              textTransform: "uppercase",
                              color: "white",
                            }}
                          >
                            Feature 2
                          </span>
                        </div>
                        <div
                          style={{
                            background: "#8B6EF7",
                            backgroundImage:
                              "repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(105, 56, 239, 0.6) 8px, rgba(105, 56, 239, 0.6) 10px)",
                            padding: "4px",
                            borderRadius: "0 999px 999px 0",
                            width: "160px",
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          <div
                            style={{
                              background: "white",
                              border: "1px solid white",
                              padding: "6px 10px",
                              borderRadius: "999px",
                              boxShadow:
                                "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08), 0px 2px 48px 0px rgba(105, 56, 239, 0.2)",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontWeight: 700,
                                fontSize: "12px",
                                lineHeight: "1em",
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                                color: "#6938EF",
                              }}
                            >
                              Cost -45%
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Feature 3 - Bottom pill */}
                      <div
                        style={{
                          position: "absolute",
                          left: "96px",
                          top: "129.9px",
                          display: "flex",
                          width: "320px",
                          height: "32px",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            background: "#6938EF",
                            padding: "8px 24px",
                            borderRadius: "999px 0 0 999px",
                            width: "192px",
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Space Grotesk, sans-serif",
                              fontWeight: 700,
                              fontSize: "12px",
                              lineHeight: "1em",
                              letterSpacing: "0.05em",
                              textTransform: "uppercase",
                              color: "white",
                            }}
                          >
                            Feature 3
                          </span>
                        </div>
                        <div
                          style={{
                            background: "#8B6EF7",
                            backgroundImage:
                              "repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(105, 56, 239, 0.6) 8px, rgba(105, 56, 239, 0.6) 10px)",
                            padding: "4px",
                            borderRadius: "0 999px 999px 0",
                            width: "108px",
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            height: "100%",
                          }}
                        >
                          <div
                            style={{
                              background: "white",
                              border: "1px solid white",
                              padding: "6px 10px",
                              borderRadius: "999px",
                              boxShadow:
                                "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08), 0px 2px 48px 0px rgba(105, 56, 239, 0.2)",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontWeight: 700,
                                fontSize: "12px",
                                lineHeight: "1em",
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                                color: "#6938EF",
                              }}
                            >
                              Cost -32%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.visual === "security" && (
                    <div
                      style={{
                        position: "relative",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "180px",
                          height: "180px",
                        }}
                      >
                        {/* Outer shield - semi-transparent */}
                        <svg
                          width="120"
                          height="137"
                          viewBox="0 0 120 137"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            position: "absolute",
                            left: "30px",
                            top: "22.5px",
                          }}
                        >
                          <path
                            d="M120 20.625L60 0L0 20.625V66.7425C0 104.036 30 119.9 60 136.084C90 119.9 120 104.036 120 66.7425V20.625Z"
                            fill="rgba(255, 255, 255, 0.4)"
                            stroke="rgba(255, 255, 255, 0.4)"
                            strokeWidth="1.5"
                          />
                        </svg>

                        {/* Inner shield - solid white */}
                        <svg
                          width="80"
                          height="91"
                          viewBox="0 0 80 91"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            position: "absolute",
                            left: "50px",
                            top: "45px",
                          }}
                        >
                          <path
                            d="M80 13.75L40 0L0 13.75V44.495C0 69.357 20 79.933 40 90.723C60 79.933 80 69.357 80 44.495V13.75Z"
                            fill="#FFFFFF"
                            stroke="rgba(255, 255, 255, 0.4)"
                            strokeWidth="1"
                          />
                        </svg>

                        {/* Lock icon - purple */}
                        <div
                          style={{
                            position: "absolute",
                            left: "77px",
                            top: "70px",
                          }}
                        >
                          <Image
                            src="/lock-icon.svg"
                            alt="Lock"
                            width={26}
                            height={26}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.visual === "analytics" && (
                    <div className="relative min-h-[200px] md:min-h-[240px] flex flex-col items-center justify-center p-4 md:p-5 gap-4 md:gap-5">
                      {/* Simple vertical bars background */}
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          display: "flex",
                          gap: "16px",
                          alignItems: "flex-end",
                          height: "180px",
                          opacity: 0.1,
                        }}
                      >
                        {[60, 75, 85, 65, 80, 70, 85, 75, 68].map(
                          (height, index) => (
                            <div
                              key={index}
                              style={{
                                width: "66px",
                                height: `${height}%`,
                                background: "#FFFFFF",
                                borderRadius: "4px",
                              }}
                            />
                          )
                        )}
                      </div>

                      {/* Gradient overlay */}
                      <div
                        className="absolute w-full left-0 pointer-events-none z-[1]"
                        style={{
                          height: "136px",
                          top: "103.9px",
                          background:
                            "linear-gradient(180deg, rgba(13, 8, 27, 0) 0%, #0D081B 100%)",
                        }}
                      />

                      {/* Metric Cards - Full opacity, on top */}
                      <div className="flex flex-col md:flex-row gap-2 w-full max-w-full md:max-w-[707px] relative z-10">
                        {/* Total Cost Card */}
                        <div
                          className="flex-1 rounded-xl p-1"
                          style={{
                            background: "rgba(105, 56, 239, 0.2)",
                            border: "1px solid rgba(105, 56, 239, 0.4)",
                          }}
                        >
                          <div className="bg-white rounded-lg p-4 md:px-6 h-full flex flex-col justify-between flex-grow">
                            <div className="flex flex-col gap-2 mb-3 flex-grow justify-between">
                              <span
                                className="text-xs md:text-sm font-medium text-[#737373]"
                                style={{ fontFamily: "Geist, sans-serif" }}
                              >
                                Total Cost
                              </span>
                              <span
                                className="text-xs md:text-sm font-medium text-green-600"
                                style={{ fontFamily: "Geist, sans-serif" }}
                              >
                                +38.11%
                              </span>
                            </div>
                            <span
                              className="text-2xl md:text-4xl font-bold text-[#0A0A0A]"
                              style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                lineHeight: "1em",
                              }}
                            >
                              $
                              <CountUp
                                end={253.68}
                                decimals={2}
                                duration={2.5}
                                enableScrollSpy
                                scrollSpyOnce
                                start={0}
                              />
                            </span>
                          </div>
                        </div>

                        {/* Beezi Completed Tasks Card */}
                        <div
                          className="flex-1 rounded-xl p-1"
                          style={{
                            background: "rgba(105, 56, 239, 0.2)",
                            border: "1px solid rgba(105, 56, 239, 0.4)",
                          }}
                        >
                          <div className="bg-white rounded-lg p-4 md:px-6 h-full flex flex-col justify-between flex-grow">
                            <div className="flex flex-col gap-2 mb-3 flex-grow justify-between">
                              <span
                                className="text-xs md:text-sm font-medium text-[#737373]"
                                style={{ fontFamily: "Geist, sans-serif" }}
                              >
                                Beezi Completed Tasks
                              </span>
                              <span
                                className="text-xs md:text-sm font-medium text-green-600"
                                style={{ fontFamily: "Geist, sans-serif" }}
                              >
                                +33.2%
                              </span>
                            </div>
                            <span
                              className="text-2xl md:text-4xl font-bold text-[#0A0A0A]"
                              style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                lineHeight: "1em",
                              }}
                            >
                              <CountUp
                                end={146}
                                duration={2.5}
                                enableScrollSpy
                                scrollSpyOnce
                                start={0}
                              />
                            </span>
                          </div>
                        </div>

                        {/* Company Adoption Rate Card */}
                        <div
                          className="flex-1 rounded-xl p-1"
                          style={{
                            background: "rgba(105, 56, 239, 0.2)",
                            border: "1px solid rgba(105, 56, 239, 0.4)",
                          }}
                        >
                          <div className="bg-white rounded-lg p-4 md:px-6 h-full flex flex-col justify-between flex-grow">
                            <div className="flex flex-col gap-2 mb-10 flex-grow justify-between">
                              <span
                                className="text-xs md:text-sm font-medium text-[#737373]"
                                style={{ fontFamily: "Geist, sans-serif" }}
                              >
                                Company Adoption Rate
                              </span>
                            </div>
                            <span
                              className="text-2xl md:text-4xl font-bold text-[#0A0A0A]"
                              style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                lineHeight: "1em",
                              }}
                            >
                              <CountUp
                                end={59.11}
                                duration={2.5}
                                enableScrollSpy
                                scrollSpyOnce
                                start={0}
                              />
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col gap-2">
                  <h3
                    className="text-2xl md:text-3xl font-bold text-[#FAFAFA]"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      lineHeight: "1em",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-6 text-white/50"
                    style={{
                      fontFamily: "Geist, sans-serif",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
