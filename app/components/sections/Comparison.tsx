import Container from "../Container";
import GlassCard from "../GlassCard";
import Image from "next/image";

export default function Comparison() {
  const tasks = [
    {
      title: "Adjust the primary color palette and branding styles in the application's CSS",
      timeNormal: "~4 h",
      timeBeezi: "~20 min",
      difficulty: "Easy-level",
    },
    {
      title: "Extend the user profile model with new fields and update the settings page",
      timeNormal: "~10 h",
      timeBeezi: "~3 h",
      difficulty: "Medium-level",
    },
    {
      title: "Refactor the core application architecture to support a new microservices pattern",
      timeNormal: "~20 h",
      timeBeezi: "~6 h",
      difficulty: "Hard-level",
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
          {/* Title */}
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
              margin: 0,
            }}
          >
            Beezi compresses your dev time up to 10x
          </h2>

          {/* Main Card */}
          <GlassCard
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
                padding: "40px",
              }}
            >
              {/* Difficulty Levels Header */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  marginBottom: "40px",
                }}
              >
                {["Easy-level", "Medium-level", "Hard-level"].map((level, index) => (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                      paddingBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        background: "rgba(105, 56, 239, 0.15)",
                        borderRadius: "4px",
                        padding: "8px 12px",
                        width: "fit-content",
                      }}
                    >
                      <Image
                        src="/chart-complexity-icon.svg"
                        alt="Complexity"
                        width={16}
                        height={16}
                      />
                      <span
                        style={{
                          fontFamily: "Geist, sans-serif",
                          fontWeight: 500,
                          fontSize: "14px",
                          color: "#FAFAFA",
                        }}
                      >
                        {level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tasks */}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                }}
              >
                {tasks.map((task, index) => (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {/* Task Card */}
                    <div
                      style={{
                        background: "rgba(105, 56, 239, 0.1)",
                        borderRadius: "10px",
                        padding: "16px",
                        flex: 1,
                      }}
                    >
                      <div
                        style={{
                          background: "rgba(105, 56, 239, 0.15)",
                          border: "1px solid rgba(105, 56, 239, 0.2)",
                          borderRadius: "6px",
                          padding: "16px",
                          marginBottom: "16px",
                        }}
                      >
                        <div
                          style={{
                            background: "#0D081B",
                            borderRadius: "4px",
                            padding: "8px",
                            marginBottom: "12px",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <Image
                            src="/alignment-left-icon.svg"
                            alt="Task"
                            width={16}
                            height={16}
                          />
                        </div>
                        <p
                          style={{
                            fontFamily: "Geist, sans-serif",
                            fontWeight: 400,
                            fontSize: "13px",
                            lineHeight: "1.5em",
                            color: "#FAFAFA",
                            margin: 0,
                          }}
                        >
                          {task.title}
                        </p>
                      </div>

                      {/* Time Comparison */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                        }}
                      >
                        {/* Normal Development */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Space Grotesk, sans-serif",
                              fontWeight: 700,
                              fontSize: "20px",
                              color: "#FAFAFA",
                            }}
                          >
                            {task.timeNormal}
                          </span>
                          <span
                            style={{
                              fontFamily: "Geist, sans-serif",
                              fontWeight: 400,
                              fontSize: "12px",
                              color: "rgba(255, 255, 255, 0.6)",
                            }}
                          >
                            Development
                          </span>
                        </div>

                        {/* Divider */}
                        <div
                          style={{
                            height: "1px",
                            background: "rgba(105, 56, 239, 0.3)",
                            width: "100%",
                          }}
                        />

                        {/* Beezi Development */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "6px",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Space Grotesk, sans-serif",
                              fontWeight: 700,
                              fontSize: "20px",
                              color: "#FAFAFA",
                            }}
                          >
                            {task.timeBeezi}
                          </span>
                          <span
                            style={{
                              fontFamily: "Geist, sans-serif",
                              fontWeight: 400,
                              fontSize: "12px",
                              color: "rgba(255, 255, 255, 0.6)",
                            }}
                          >
                            Development with Beezi
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}

