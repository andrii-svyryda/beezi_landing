"use client";

import Container from "../Container";
import GlassCard from "../GlassCard";
import Image from "next/image";

export default function FeatureCards() {
  // Configurable integrations list
  const integrations = [
    { icon: "/jira-icon.svg", alt: "Jira", width: 52, height: 22 },
    { icon: "/slack-icon.svg", alt: "Slack", width: 86, height: 22 },
    { icon: "/github-icon.svg", alt: "GitHub", width: 90, height: 22 },
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
    <section
      style={{
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <Container>
        <div
          className="grid grid-cols-1 md:grid-cols-5"
          style={{
            gap: "12px",
          }}
        >
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
              <div
                style={{
                  background: "#0D081B",
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                {/* Image Section */}
                <div
                  style={{
                    position: "relative",
                    height: "240px",
                    background:
                      feature.visual === "workflow" ||
                      feature.visual === "analytics"
                        ? "radial-gradient(circle at 50% 0%, rgba(105, 56, 239, 0.16) 0%, rgba(105, 56, 239, 0.08) 100%)"
                        : "radial-gradient(circle at 50% 0%, rgba(105, 56, 239, 0.3) 0%, rgba(105, 56, 239, 0.1) 100%)",
                    overflow: "hidden",
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
                          animation: scroll-left 20s linear infinite;
                        }
                      `}</style>
                      <div
                        style={{
                          position: "relative",
                          height: "100%",
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
                          }}
                        >
                          {/* Duplicate integrations for seamless loop */}
                          {[
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
                                  padding: "12px 24px",
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
                        position: "relative",
                        height: "100%",
                        overflow: "hidden",
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
                    <div
                      style={{
                        position: "relative",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                        gap: "20px",
                      }}
                    >
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
                        style={{
                          position: "absolute",
                          width: "100%",
                          height: "136px",
                          left: "0",
                          top: "103.9px",
                          background:
                            "linear-gradient(180deg, rgba(13, 8, 27, 0) 0%, #0D081B 100%)",
                          pointerEvents: "none",
                        }}
                      />

                      {/* Metric Cards - Full opacity, on top */}
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          width: "100%",
                          maxWidth: "707px",
                        }}
                      >
                        {/* Total Cost Card */}
                        <div
                          style={{
                            flex: 1,
                            background: "rgba(105, 56, 239, 0.2)",
                            border: "1px solid rgba(105, 56, 239, 0.4)",
                            borderRadius: "12px",
                            padding: "4px",
                          }}
                        >
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: "8px",
                              padding: "16px 24px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                                marginBottom: "12px",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "Geist, sans-serif",
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  lineHeight: "1.43em",
                                  color: "#737373",
                                }}
                              >
                                Total Cost
                              </span>
                              <span
                                style={{
                                  fontFamily: "Geist, sans-serif",
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  lineHeight: "1.43em",
                                  color: "#16A34A",
                                }}
                              >
                                +38.11%
                              </span>
                            </div>
                            <span
                              style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontSize: "36px",
                                fontWeight: 700,
                                lineHeight: "1em",
                                color: "#0A0A0A",
                              }}
                            >
                              $253.68
                            </span>
                          </div>
                        </div>

                        {/* Beezi Completed Tasks Card */}
                        <div
                          style={{
                            flex: 1,
                            background: "rgba(105, 56, 239, 0.2)",
                            border: "1px solid rgba(105, 56, 239, 0.4)",
                            borderRadius: "12px",
                            padding: "4px",
                          }}
                        >
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: "8px",
                              padding: "16px 24px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                                marginBottom: "12px",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "Geist, sans-serif",
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  lineHeight: "1.43em",
                                  color: "#737373",
                                }}
                              >
                                Beezi Completed Tasks
                              </span>
                              <span
                                style={{
                                  fontFamily: "Geist, sans-serif",
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  lineHeight: "1.43em",
                                  color: "#16A34A",
                                }}
                              >
                                +33.2%
                              </span>
                            </div>
                            <span
                              style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontSize: "36px",
                                fontWeight: 700,
                                lineHeight: "1em",
                                color: "#0A0A0A",
                              }}
                            >
                              146
                            </span>
                          </div>
                        </div>

                        {/* Company Adoption Rate Card */}
                        <div
                          style={{
                            flex: 1,
                            background: "rgba(105, 56, 239, 0.2)",
                            border: "1px solid rgba(105, 56, 239, 0.4)",
                            borderRadius: "12px",
                            padding: "4px",
                          }}
                        >
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: "8px",
                              padding: "16px 24px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                                marginBottom: "40px",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "Geist, sans-serif",
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  lineHeight: "1.43em",
                                  color: "#737373",
                                }}
                              >
                                Company Adoption Rate
                              </span>
                            </div>
                            <span
                              style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontSize: "36px",
                                fontWeight: 700,
                                lineHeight: "1em",
                                color: "#0A0A0A",
                              }}
                            >
                              59.11%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div
                  style={{
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 700,
                      fontSize: "30px",
                      lineHeight: "1em",
                      color: "#FAFAFA",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Geist, sans-serif",
                      fontSize: "16px",
                      lineHeight: "1.5em",
                      color: "rgba(255, 255, 255, 0.5)",
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
