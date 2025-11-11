import Container from "../Container";
import GlassCard from "../GlassCard";
import Image from "next/image";

export default function Integration() {
  const integrations = [
    {
      name: "Jira",
      description:
        "Beezi scores and clarifies tasks directly in Jira, cutting ambiguity before development starts.",
      icon: "/jira-icon.svg",
    },
    {
      name: "Slack",
      description:
        "Discuss unclear tickets, review AI suggestions, and approve changes right in chat — no context switching.",
      icon: "/slack-icon.svg",
    },
    {
      name: "GitHub",
      description:
        "Beezi commits, comments, and tracks PRs automatically, keeping your repos clean and your team focused.",
      icon: "/github-icon.svg",
    },
    {
      name: "Azure DevOps",
      description:
        "Beezi syncs seamlessly with Azure DevOps — analyzing work items, clarifying requirements, and generating clean pull requests directly in your pipelines.",
      icon: "/azure-devops-icon.svg",
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        padding: "120px 0",
        background: "#0D081B",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "80px",
            width: "100%",
          }}
        >
          {/* Title Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              alignItems: "center",
              maxWidth: "800px",
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
                  "linear-gradient(180deg, #FAFAFA 0%, rgba(255, 255, 255, 0.8) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: 0,
              }}
            >
              Seamless Integration
            </h2>
            <p
              style={{
                fontFamily: "Geist, sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "1.5555555555555556em",
                textAlign: "center",
                color: "rgba(255, 255, 255, 0.8)",
                margin: 0,
              }}
            >
              Keep working in your favorite tools. Beezi runs in the background,
              handling tasks without forcing you to switch - no extra tabs, no
              learning curve.
            </p>
          </div>

          {/* Integrations List and Preview */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              width: "100%",
            }}
          >
            {/* Integration Items Row */}
            <div
              style={{
                display: "flex",
                gap: "24px",
                width: "100%",
              }}
            >
              {integrations.map((integration, index) => (
                <div
                  key={integration.name}
                  style={{
                    display: "flex",
                    gap: "24px",
                    flex: 1,
                  }}
                >
                  {/* Integration Item */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      flex: 1,
                    }}
                  >
                    {/* Content */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "Geist, sans-serif",
                          fontWeight: 700,
                          fontSize: "20px",
                          lineHeight: "1em",
                          textAlign: "center",
                          color: "#FAFAFA",
                          margin: 0,
                        }}
                      >
                        {integration.name}
                      </h3>
                      <p
                        style={{
                          fontFamily: "Geist, sans-serif",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "1.4285714285714286em",
                          textAlign: "center",
                          color: "rgba(255, 255, 255, 0.5)",
                          margin: 0,
                        }}
                      >
                        {integration.description}
                      </p>
                    </div>
                  </div>

                  {/* Separator Line (except after last item) */}
                  {index < integrations.length - 1 && (
                    <div
                      style={{
                        width: "1px",
                        background: "rgba(255, 255, 255, 0.1)",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Integration Preview Card */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0 200px",
              }}
            >
              <GlassCard>
                <div
                  style={{
                    width: "100%",
                    minHeight: "400px",
                    background:
                      "linear-gradient(135deg, rgba(105, 56, 239, 0.05) 0%, rgba(13, 8, 27, 0.8) 100%)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "40px",
                    padding: "60px 40px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Pattern Background */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: 0.03,
                      background: `repeating-linear-gradient(
                        0deg,
                        rgba(255, 255, 255, 0.1) 0px,
                        transparent 1px,
                        transparent 40px,
                        rgba(255, 255, 255, 0.1) 41px
                      ),
                      repeating-linear-gradient(
                        90deg,
                        rgba(255, 255, 255, 0.1) 0px,
                        transparent 1px,
                        transparent 40px,
                        rgba(255, 255, 255, 0.1) 41px
                      )`,
                    }}
                  />

                  {/* Beezi Logo with Badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(105, 56, 239, 0.2)",
                        border: "1px solid rgba(105, 56, 239, 0.4)",
                        borderRadius: "20px",
                        padding: "8px",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          borderRadius: "12px",
                          padding: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src="/logo-icon.svg"
                          alt="Beezi"
                          width={32}
                          height={32}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        background: "rgba(105, 56, 239, 0.2)",
                        border: "1px solid rgba(105, 56, 239, 0.4)",
                        borderRadius: "999px",
                        padding: "12px 20px",
                        backdropFilter: "blur(10px)",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        opacity: 0.9,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Geist, sans-serif",
                          fontWeight: 400,
                          fontSize: "14px",
                          color: "rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        Communication
                      </span>
                      <div
                        style={{
                          display: "flex",
                          gap: "8px",
                        }}
                      >
                        {integrations.slice(0, 3).map((int) => (
                          <div
                            key={int.name}
                            style={{
                              width: "24px",
                              height: "24px",
                              background: "#0D081B",
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              borderRadius: "1900.8px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "4px",
                            }}
                          >
                            <Image
                              src={int.icon}
                              alt={int.name}
                              width={16}
                              height={16}
                              style={{ objectFit: "contain" }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(105, 56, 239, 0.3) 0%, rgba(105, 56, 239, 0.1) 100%)",
                      border:
                        "1px solid linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.1) 100%)",
                      borderRadius: "12px",
                      padding: "12px 24px",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <button
                      style={{
                        fontFamily: "Geist, sans-serif",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "1.5em",
                        color: "#FAFAFA",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      View Integration Details
                    </button>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

