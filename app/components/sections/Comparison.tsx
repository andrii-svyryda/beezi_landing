import Container from "../Container";
import GlassCard from "../GlassCard";
import Image from "next/image";
import Link from "next/link";

export default function Comparison() {
  const tasks = [
    {
      title:
        "Adjust the primary color palette and branding styles in the application's CSS",
      timeNormal: "~4",
      timeNormalUnit: "h",
      timeBeezi: "~20",
      timeBeeziUnit: "min",
      difficulty: "Easy-level",
    },
    {
      title:
        "Extend the user profile model with new fields and update the settings page",
      timeNormal: "~10",
      timeNormalUnit: "h",
      timeBeezi: "~3",
      timeBeeziUnit: "h",
      difficulty: "Medium-level",
    },
    {
      title:
        "Refactor the core application architecture to support a new microservices pattern",
      timeNormal: "~20",
      timeNormalUnit: "h",
      timeBeezi: "~6",
      timeBeeziUnit: "h",
      difficulty: "Hard-level",
    },
  ];

  const difficultyLevels = [
    { level: "Easy-level", icon: "/easy-level-icon.svg" },
    { level: "Medium-level", icon: "/medium-level-icon.svg" },
    { level: "Hard-level", icon: "/hard-level-icon.svg" },
  ];

  return (
    <section
      style={{
        width: "100%",
        padding: "112px 0",
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
          <div
            style={{
              boxShadow:
                "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08), 0px 2px 24px 0px rgba(105, 56, 239, 0.12)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: "#0D081B",
                borderRadius: "12px",
              }}
            >
              {/* Difficulty Levels Header */}
              <div
                style={{
                  display: "flex",
                }}
              >
                {difficultyLevels.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                      padding: "20px 32px",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRight:
                        index === difficultyLevels.length - 1
                          ? "none"
                          : "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "4px 12px",
                      }}
                    >
                      <Image
                        src={item.icon}
                        alt="Complexity"
                        width={18}
                        height={18}
                      />
                      <span
                        style={{
                          fontFamily: "Geist, sans-serif",
                          fontWeight: 500,
                          fontSize: "16px",
                          color: "#FAFAFA",
                        }}
                      >
                        {item.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tasks */}
              <div
                style={{
                  display: "flex",
                }}
              >
                {tasks.map((task, index) => (
                  <div
                    key={index}
                    className="p-4 xl:p-7"
                    style={{
                      flex: 1,
                      borderRight:
                        index === difficultyLevels.length - 1
                          ? "none"
                          : "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    {/* Task Card */}
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "10px",
                        padding: "4px 4px 24px",
                        height: "100%",
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "6px",
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        {/* Task Title Section */}
                        <div
                          style={{
                            background: "#0D081B",
                            borderRadius: "6px",
                            padding: "24px",
                            paddingBottom: "40px",
                            marginBottom: "16px",
                            flexGrow: 1,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              marginBottom: "12px",
                            }}
                          >
                            <Image
                              src="/alignment-left-icon.svg"
                              alt="Task"
                              width={32}
                              height={32}
                              style={{
                                background: "rgba(255, 255, 255, 0.1)",
                                borderRadius: "4px",
                                padding: "4px",
                              }}
                            />
                          </div>
                          <p
                            style={{
                              fontFamily: "Geist, sans-serif",
                              fontWeight: 400,
                              fontSize: "20px",
                              lineHeight: "1.4em",
                              color: "#FAFAFA",
                              margin: 0,
                            }}
                          >
                            {task.title}
                          </p>
                        </div>

                        {/* Time Comparison - Horizontal Layout */}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          {/* Normal Development */}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "4px",
                              flex: 1,
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontWeight: 700,
                                fontSize: "48px",
                                lineHeight: "1.2em",
                                color: "white",
                              }}
                            >
                              {task.timeNormal}
                              <span
                                style={{
                                  fontFamily: "Geist, sans-serif",
                                  fontWeight: 600,
                                  fontSize: "24px",
                                  marginLeft: "6px",
                                  color: "rgb(148, 148, 148)",
                                }}
                              >
                                {task.timeNormalUnit}
                              </span>
                            </span>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
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
                          </div>

                          {/* Vertical Divider */}
                          <div
                            style={{
                              width: "2px",
                              height: "40px",
                              background: "rgba(255, 255, 255, 0.2)",
                              borderRadius: "2px",
                            }}
                          />

                          {/* Beezi Development */}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "4px",
                              flex: 1,
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontWeight: 700,
                                fontSize: "48px",
                                lineHeight: "1.2em",
                                color: "white",
                              }}
                            >
                              {task.timeBeezi}
                              <span
                                style={{
                                  fontWeight: 600,
                                  fontSize: "24px",
                                  marginLeft: "6px",
                                  color: "rgb(148, 148, 148)",
                                }}
                              >
                                {task.timeBeeziUnit}
                              </span>
                            </span>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: "Geist, sans-serif",
                                  fontWeight: 500,
                                  fontSize: "12px",
                                  color: "rgba(255, 255, 255, 0.6)",
                                }}
                              >
                                Development with{" "}
                                <span
                                  style={{
                                    color: "rgb(255, 255, 255)",
                                  }}
                                >
                                  Beezi
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Book a demo Button */}
          <div className="flex justify-center">
            <Link href="/book-a-demo">
              <GlassCard
                borderRadius="12px"
                style={{ width: "160px" }}
                className="transition-all hover:scale-105 cursor-pointer"
              >
                <div
                  className="relative"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(105, 56, 239, 0.3) 0%, rgba(105, 56, 239, 0.1) 100%), #FFFFFF",
                    borderRadius: "8px",
                    padding: "12px 20px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "1.5em",
                      color: "#6938EF",
                      textAlign: "center",
                    }}
                  >
                    Book a demo
                  </span>
                </div>
              </GlassCard>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
