"use client";
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
    <section className="w-full py-16 md:py-28">
      {/* Title - with container on desktop */}
      <Container>
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-20"
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            lineHeight: "1em",
            color: "white",
          }}
        >
          Beezi compresses your dev time up to{" "}
          <span className="text-[#6938EF]">10x</span>
        </h2>

        {/* Main content - full width on mobile, container on desktop */}
        <div className="md:mx-auto">
          <div className="flex flex-col gap-12 md:gap-20 w-full">
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
                <div className="flex flex-col md:flex-row">
                  {difficultyLevels.map((item, index) => (
                    <div
                      key={index}
                      className={`flex-1 flex flex-col items-center gap-2.5 p-5 md:px-8 border-b ${
                        index !== difficultyLevels.length - 1
                          ? "md:border-r"
                          : ""
                      }`}
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        borderColor: "rgba(255, 255, 255, 0.1)",
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
                          className="text-sm md:text-base"
                          style={{
                            fontFamily: "Geist, sans-serif",
                            fontWeight: 500,
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
                <div className="flex flex-col md:flex-row">
                  {tasks.map((task, index) => (
                    <div
                      key={index}
                      className={`p-4 xl:p-7 flex-1 ${
                        index !== tasks.length - 1
                          ? "border-b md:border-b-0 md:border-r border-white/20"
                          : ""
                      }`}
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
                            className="p-4 md:p-6 pb-6 md:pb-10 mb-4 flex-grow"
                            style={{
                              background: "#0D081B",
                              borderRadius: "6px",
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
                              className="text-base md:text-xl"
                              style={{
                                fontFamily: "Geist, sans-serif",
                                fontWeight: 400,
                                lineHeight: "1.4em",
                                color: "#FAFAFA",
                                margin: 0,
                              }}
                            >
                              {task.title}
                            </p>
                          </div>

                          {/* Time Comparison - Horizontal Layout */}
                          <div className="flex justify-center items-center gap-3 md:gap-5">
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
                                className="text-3xl md:text-5xl"
                                style={{
                                  fontFamily: "Space Grotesk, sans-serif",
                                  fontWeight: 700,
                                  lineHeight: "1.2em",
                                  color: "white",
                                }}
                              >
                                {task.timeNormal}
                                <span
                                  className="text-lg md:text-2xl ml-1.5"
                                  style={{
                                    fontFamily: "Geist, sans-serif",
                                    fontWeight: 600,
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
                                  className="text-xs"
                                  style={{
                                    fontFamily: "Geist, sans-serif",
                                    fontWeight: 400,
                                    color: "rgba(255, 255, 255, 0.6)",
                                  }}
                                >
                                  Development
                                </span>
                              </div>
                            </div>

                            {/* Vertical Divider */}
                            <div
                              className="w-0.5 h-8 md:h-10"
                              style={{
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
                                className="text-3xl md:text-5xl"
                                style={{
                                  fontFamily: "Space Grotesk, sans-serif",
                                  fontWeight: 700,
                                  lineHeight: "1.2em",
                                  color: "white",
                                }}
                              >
                                {task.timeBeezi}
                                <span
                                  className="text-lg md:text-2xl ml-1.5"
                                  style={{
                                    fontWeight: 600,
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
                                  className="text-xs"
                                  style={{
                                    fontFamily: "Geist, sans-serif",
                                    fontWeight: 500,
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
              <Link href="/book-a-demo" className="w-full md:w-[160px]">
                <GlassCard
                  borderRadius="12px"
                  className="transition-all hover:scale-105 cursor-pointer w-full md:w-[160px]"
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
        </div>
      </Container>
    </section>
  );
}
