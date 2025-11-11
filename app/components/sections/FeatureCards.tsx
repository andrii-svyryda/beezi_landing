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
                                  padding: "16px 28px",
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
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "6px",
                          alignItems: "flex-end",
                        }}
                      >
                        <div
                          style={{
                            width: "64px",
                            height: "140px",
                            background: "rgba(105, 56, 239, 0.4)",
                            borderRadius: "6px",
                          }}
                        />
                        <div
                          style={{
                            width: "64px",
                            height: "100px",
                            background: "rgba(105, 56, 239, 0.6)",
                            borderRadius: "6px",
                          }}
                        />
                        <div
                          style={{
                            width: "64px",
                            height: "120px",
                            background: "rgba(105, 56, 239, 0.5)",
                            borderRadius: "6px",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                          background: "white",
                          padding: "6px 12px",
                          borderRadius: "999px",
                          boxShadow:
                            "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08), 0px 2px 48px 0px rgba(105, 56, 239, 0.2)",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            fontWeight: 700,
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                            color: "#6938EF",
                          }}
                        >
                          Cost -45%
                        </span>
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
                          width: "220px",
                          height: "220px",
                        }}
                      >
                        <Image
                          src="/shield-icon.svg"
                          alt="Security Shield"
                          fill
                          style={{ objectFit: "contain" }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: "16px",
                            right: "16px",
                          }}
                        >
                          <Image
                            src="/lock-icon.svg"
                            alt="Lock"
                            width={48}
                            height={48}
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
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "12px",
                          alignItems: "flex-end",
                          height: "180px",
                          width: "240px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            gap: "6px",
                            flex: 1,
                            height: "100%",
                          }}
                        >
                          <div
                            style={{
                              height: "60%",
                              background: "#D9D6FE",
                              borderRadius: "6px 6px 0 0",
                            }}
                          />
                          <div
                            style={{
                              height: "40%",
                              background: "#9B8AFB",
                              borderRadius: "0 0 6px 6px",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            gap: "6px",
                            flex: 1,
                            height: "100%",
                          }}
                        >
                          <div
                            style={{
                              height: "80%",
                              background: "#D9D6FE",
                              borderRadius: "6px 6px 0 0",
                            }}
                          />
                          <div
                            style={{
                              height: "20%",
                              background: "#9B8AFB",
                              borderRadius: "0 0 6px 6px",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            gap: "6px",
                            flex: 1,
                            height: "100%",
                          }}
                        >
                          <div
                            style={{
                              height: "70%",
                              background: "#D9D6FE",
                              borderRadius: "6px 6px 0 0",
                            }}
                          />
                          <div
                            style={{
                              height: "30%",
                              background: "#9B8AFB",
                              borderRadius: "0 0 6px 6px",
                            }}
                          />
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
