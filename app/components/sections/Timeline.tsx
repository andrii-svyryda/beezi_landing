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
    <section className="w-full py-16 md:py-28">
      <Container>
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 w-full">
          {/* Left wrapper for desktop to keep title and items together */}
          <div className="flex flex-col gap-8 md:gap-15 flex-1 contents md:flex">
            {/* Title Section - Order 1 on mobile, stays with left on desktop */}
            <div className="flex flex-col gap-4 md:gap-6">
              <h2
                className="text-3xl md:text-5xl font-bold text-center md:text-left"
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
                className="text-base md:text-lg text-center md:text-left"
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

            {/* Gray Rectangle - Order 2 on mobile (between title and items) */}
            <div
              className="w-full md:w-[616px] h-[400px] md:h-[616px] md:order-last"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                flexShrink: 0,
              }}
            />

            {/* Timeline Items - Order 3 on mobile */}
            <div className="flex flex-col gap-4">
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
                  );
                } else {
                  // Inactive item without GlassCard
                  return (
                    <div
                      key={index}
                      className="rounded-xl opacity-60 py-3 pl-6"
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
    </section>
  );
}
