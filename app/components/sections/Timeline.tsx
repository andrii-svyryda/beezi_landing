import Container from "../Container";
import GlassCard from "../GlassCard";
import Image from "next/image";

export default function Timeline() {
  const timelineItems = [
    {
      icon: "/chain-link-icon.svg",
      title: "Connect Tools",
      description:
        "Link Jira, Slack, and GitHub in a few clicks — Beezi instantly syncs your workspace.",
      active: true,
    },
    {
      icon: "/settings-toggle-icon.svg",
      title: "Choose Admin or Tenant Mode",
      description: "",
      active: false,
    },
    {
      icon: "/terminal-icon.svg",
      title: "Train Once (Optional)",
      description: "",
      active: false,
    },
    {
      icon: "/play-circle-icon.svg",
      title: "Start Work",
      description: "",
      active: false,
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        padding: "112px 0",
        background: "#0D081B",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "80px",
            width: "100%",
          }}
        >
          {/* Main Content Row */}
          <div
            style={{
              display: "flex",
              gap: "80px",
              width: "100%",
            }}
          >
            {/* Left Side - Timeline */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "60px",
                flex: 1,
              }}
            >
              {/* Title Section */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    fontSize: "48px",
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
                  style={{
                    fontFamily: "Geist, sans-serif",
                    fontWeight: 400,
                    fontSize: "18px",
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

              {/* Timeline Items */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {timelineItems.map((item, index) => {
                  if (item.active) {
                    // Active item with GlassCard
                    return (
                      <GlassCard
                        key={index}
                        padding="8px"
                        style={{
                          boxShadow:
                            "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08), 0px 2px 24px 0px rgba(105, 56, 239, 0.12)",
                        }}
                      >
                        <div
                          style={{
                            background: "#0D081B",
                            borderRadius: "12px",
                            padding: "24px",
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
                                style={{
                                  fontFamily: "Geist, sans-serif",
                                  fontWeight: 700,
                                  fontSize: "20px",
                                  lineHeight: "1em",
                                  color: "#FAFAFA",
                                  margin: 0,
                                }}
                              >
                                {item.title}
                              </h3>
                              {item.description && (
                                <p
                                  style={{
                                    fontFamily: "Geist, sans-serif",
                                    fontWeight: 400,
                                    fontSize: "14px",
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
                    );
                  } else {
                    // Inactive item without GlassCard
                    return (
                      <div
                        key={index}
                        style={{
                          borderRadius: "12px",
                          opacity: 0.6,
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: "Geist, sans-serif",
                              fontWeight: 700,
                              fontSize: "20px",
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

            {/* Right Side - Gray Rectangle Placeholder */}
            <div
              style={{
                width: "616px",
                height: "616px",
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                flexShrink: 0,
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
