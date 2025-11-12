import Container from "../Container";
import Link from "next/link";

export default function Features() {
  const features = [
    {
      title: "Intelligent Code Generation",
      description:
        "Turn plain language into production-ready code. Build features, modules, or refactor legacy code tailored to your style. Initiated Learning from Your Codebase",
      iconPath: "M2 1.5L10 1.5L18 1.5L18 9.5L18 17.5L10 21L2 17.5L2 9.5L2 1.5Z M8 13.5L8 9.5L12 9.5L12 13.5L8 13.5Z M6 8L6 4L10 4L10 8L6 8Z M12 8L12 4L16 4L16 8L12 8Z",
    },
    {
      title: "Initiated Learning from Your Codebase",
      description:
        "The AI teammate studies your existing code, style, and patterns from day one. It knows what you need and delivers results that look and feel like they were written by your team.",
      iconPath:
        "M4 2L4 4L2 4L2 12L2 18L4 20L16 20L18 18L18 12L18 4L16 4L16 2L4 2Z M6 6L14 6L14 8L6 8L6 6Z M6 10L14 10L14 12L6 12L6 10Z M6 14L14 14L14 16L6 16L6 14Z",
    },
    {
      title: "Parallel Task Execution",
      description:
        "Your engineers might be able to work on one or two tasks at a time, but Beezi can handle many at once. This helps you get through your backlog much faster, scaling your team's capacity. instantly.",
      iconPath:
        "M3 2L3 12L9 16L9 22L11 22L11 16L17 12L17 2L3 2Z M8 4L12 4L12 10L10 11.33L8 10L8 4Z",
    },
  ];

  return (
    <section
      id="features"
      style={{
        paddingTop: "176px",
        paddingBottom: "88px",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "60px",
          }}
        >
          {/* Section Header */}
          <div
            style={{
              maxWidth: "768px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                gap: "24px",
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
                  width: "100%",
                }}
              >
                What Beezi Brings To Your Team{" "}
              </h2>
              <p
                style={{
                  fontFamily: "Geist, sans-serif",
                  fontSize: "18px",
                  lineHeight: "1.5555em",
                  textAlign: "center",
                  color: "rgba(255, 255, 255, 0.8)",
                  width: "100%",
                }}
              >
                Let your engineers focus on product, architecture, and velocity,
                while Beezi handles the manual dev work behind the scenes.
              </p>
            </div>
          </div>

          {/* Features Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              gap: "48px",
            }}
          >
            {/* Features Row */}
            <div
              style={{
                display: "flex",
                width: "100%",
                gap: "48px",
              }}
            >
              {features.map((feature, index) => (
                <>
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "24px",
                      flex: 1,
                      color: "#FFFFFF",
                    }}
                  >
                    {/* Icon Box */}
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "12px",
                        padding: "12px",
                        width: "fit-content",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d={feature.iconPath} fill="#FAFAFA" />
                      </svg>
                    </div>

                    {/* Content */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        gap: "12px",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "Geist, sans-serif",
                          fontWeight: 700,
                          fontSize: "20px",
                          lineHeight: "1em",
                          textAlign: "left",
                          width: "100%",
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "Geist, sans-serif",
                          fontSize: "14px",
                          lineHeight: "1.43em",
                          textAlign: "left",
                          color: "rgba(255, 255, 255, 0.5)",
                          width: "100%",
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Separator */}
                  {index < features.length - 1 && (
                    <div
                      style={{
                        width: "1px",
                        height: "auto",
                        background: "rgba(255, 255, 255, 0.1)",
                      }}
                    />
                  )}
                </>
              ))}
            </div>

            {/* Actions */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                paddingTop: "16px",
              }}
            >
              <Link href="/book-a-demo">
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "4px",
                    width: "160px",
                    boxShadow:
                      "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(105, 56, 239, 0.12)",
                  }}
                >
                  <div
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(105, 56, 239, 0.3) 0%, rgba(105, 56, 239, 0.1) 100%), #FFFFFF",
                      border:
                        "1px solid linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.1) 100%)",
                      borderRadius: "8px",
                      padding: "12px 24px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Geist, sans-serif",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "1.5em",
                        color: "#6938EF",
                      }}
                    >
                      Book a demo
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

