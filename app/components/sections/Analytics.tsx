"use client";

import { useState, useEffect } from "react";
import Container from "../Container";
import GlassCard from "../GlassCard";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const features = [
    {
      icon: "/dollar-icon.svg",
      title: "Financial Control",
      description:
        "Track token spend, task costs, and budget efficiency across teams and time.",
      cta: "→ Get full visibility into AI ROI.",
    },
    {
      icon: "/chart-icon.svg",
      title: "Performance Insights",
      description:
        "See cost and results by person, team, project, or timeline.",
      cta: "→ Get clear visibility into performance at every level.",
    },
    {
      icon: "/list-sparkle-icon.svg",
      title: "AI Adoption Tracking",
      description:
        "Monitor adoption rates per user/team and benchmark against company averages.",
      cta: "→ Check how deeply AI is embedded into engineering workflows",
    },
  ];

  const chartData = [
    { month: "Jan", nonAI: 5, aiBeezi: 7 },
    { month: "Feb", nonAI: 6, aiBeezi: 10 },
    { month: "Mar", nonAI: 5, aiBeezi: 13 },
    { month: "Apr", nonAI: 14, aiBeezi: 8 },
    { month: "May", nonAI: 4, aiBeezi: 16 },
    { month: "Jun", nonAI: 5, aiBeezi: 12 },
    { month: "Jul", nonAI: 11, aiBeezi: 9 },
    { month: "Aug", nonAI: 6, aiBeezi: 11 },
    { month: "Sep", nonAI: 12, aiBeezi: 11 },
    { month: "Oct", nonAI: 4, aiBeezi: 14 },
  ];

  return (
    <section className="w-full py-16 md:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:gap-16 w-full">
          {/* Title Section */}
          <div className="flex flex-col gap-6 md:gap-9 items-center">
            <div className="flex flex-col gap-4 md:gap-6 items-center max-w-3xl">
              <h2
                className="text-3xl md:text-5xl font-bold text-center"
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
                Beezi Analytics Hub
              </h2>
              <p
                className="text-base md:text-lg text-center"
                style={{
                  fontFamily: "Geist, sans-serif",
                  fontWeight: 400,
                  lineHeight: "1.5555555555555556em",
                  color: "rgba(255, 255, 255, 0.8)",
                  margin: 0,
                }}
              >
                Track spend, performance, and adoption — all in one place.
              </p>
            </div>

            {/* Book a demo Button */}
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

          {/* Content */}
          <div className="flex flex-col gap-6">
            {/* Feature Cards Row */}
            <div className="flex flex-col md:flex-row gap-6 w-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    flex: 1,
                    display: "flex",
                  }}
                >
                  <GlassCard
                    padding="8px"
                    style={{
                      boxShadow:
                        "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08), 0px 2px 24px 0px rgba(105, 56, 239, 0.12)",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        background: "#0D081B",
                        borderRadius: "12px",
                        height: "100%",
                      }}
                    >
                      <div className="flex flex-col p-4 md:p-6 h-full items-center md:items-start">
                        {/* Icon */}
                        <div
                          className="mb-4 md:mb-6"
                          style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "12px",
                            padding: "12px",
                            width: "fit-content",
                          }}
                        >
                          <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={24}
                            height={24}
                          />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-3 items-center md:items-start">
                          <h3
                            className="text-lg md:text-xl font-bold text-center md:text-left"
                            style={{
                              fontFamily: "Geist, sans-serif",
                              lineHeight: "1em",
                              color: "#FAFAFA",
                              margin: 0,
                            }}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className="text-sm text-center md:text-left"
                            style={{
                              fontFamily: "Geist, sans-serif",
                              fontWeight: 400,
                              lineHeight: "1.4285714285714286em",
                              color: "rgba(255, 255, 255, 0.5)",
                              margin: 0,
                            }}
                          >
                            {feature.description}
                          </p>
                          <p
                            className="text-sm font-semibold text-center md:text-left"
                            style={{
                              fontFamily: "Geist, sans-serif",
                              lineHeight: "1.4285714285714286em",
                              color: "#FAFAFA",
                              margin: 0,
                            }}
                          >
                            {feature.cta}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>

            {/* Chart Area */}
            <div
              style={{
                width: "100%",
              }}
            >
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
                  }}
                >
                  {/* Metrics Row */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-4 md:p-8 md:pb-0">
                    {/* Total Cost */}
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
                          borderRadius: "10px",
                          padding: "16px 24px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Geist, sans-serif",
                              fontWeight: 500,
                              fontSize: "14px",
                              lineHeight: "1.4285714285714286em",
                              color: "rgba(255, 255, 255, 0.5)",
                            }}
                          >
                            Total Cost
                          </span>
                          <span
                            style={{
                              fontFamily: "Geist, sans-serif",
                              fontWeight: 500,
                              fontSize: "14px",
                              lineHeight: "1.4285714285714286em",
                              color: "rgba(255, 255, 255, 0.5)",
                              textAlign: "right",
                            }}
                          >
                            +38.11%
                          </span>
                        </div>
                        <div
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            fontWeight: 700,
                            fontSize: "30px",
                            lineHeight: "1.2em",
                            color: "#FAFAFA",
                          }}
                        >
                          $253.68
                        </div>
                      </div>
                    </div>

                    {/* Time Saved */}
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
                          borderRadius: "10px",
                          padding: "16px 24px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Geist, sans-serif",
                              fontWeight: 500,
                              fontSize: "14px",
                              lineHeight: "1.4285714285714286em",
                              color: "rgba(255, 255, 255, 0.5)",
                            }}
                          >
                            Time saved
                          </span>
                          <span
                            style={{
                              fontFamily: "Geist, sans-serif",
                              fontWeight: 500,
                              fontSize: "14px",
                              lineHeight: "1.4285714285714286em",
                              color: "rgba(255, 255, 255, 0.5)",
                              textAlign: "right",
                            }}
                          >
                            +43.1%
                          </span>
                        </div>
                        <div
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            fontWeight: 700,
                            fontSize: "30px",
                            lineHeight: "1.2em",
                            color: "#FAFAFA",
                          }}
                        >
                          191 h
                        </div>
                      </div>
                    </div>

                    {/* AI Completed Tasks */}
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
                          borderRadius: "10px",
                          padding: "16px 24px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Geist, sans-serif",
                              fontWeight: 500,
                              fontSize: "14px",
                              lineHeight: "1.4285714285714286em",
                              color: "rgba(255, 255, 255, 0.5)",
                              flex: 1,
                            }}
                          >
                            AI completed tasks
                          </span>
                          <span
                            style={{
                              fontFamily: "Geist, sans-serif",
                              fontWeight: 500,
                              fontSize: "14px",
                              lineHeight: "1.4285714285714286em",
                              color: "rgba(255, 255, 255, 0.5)",
                            }}
                          >
                            +33.2%
                          </span>
                        </div>
                        <div
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            fontWeight: 700,
                            fontSize: "30px",
                            lineHeight: "1.2em",
                            color: "#FAFAFA",
                          }}
                        >
                          146
                        </div>
                      </div>
                    </div>

                    {/* Company Adoption Rate */}
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
                          borderRadius: "10px",
                          padding: "16px 24px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "Geist, sans-serif",
                              fontWeight: 500,
                              fontSize: "14px",
                              lineHeight: "1.4285714285714286em",
                              color: "rgba(255, 255, 255, 0.5)",
                            }}
                          >
                            Company adoption rate
                          </span>
                        </div>
                        <div
                          style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            fontWeight: 700,
                            fontSize: "30px",
                            lineHeight: "1.2em",
                            color: "#FAFAFA",
                          }}
                        >
                          59.11%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="p-4 md:p-8 h-80 md:h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={isMobile ? chartData.slice(-2) : chartData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                        barGap={4}
                        barCategoryGap="20%"
                      >
                        <CartesianGrid
                          strokeDasharray="0"
                          stroke="rgba(255, 255, 255, 0.1)"
                          strokeOpacity={0.8}
                          vertical={false}
                        />
                        <XAxis
                          dataKey="month"
                          tick={{
                            fill: "#737373",
                            fontFamily: "Geist, sans-serif",
                            fontSize: 12,
                          }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          tick={{
                            fill: "rgba(255, 255, 255, 0.5)",
                            fontFamily: "Geist, sans-serif",
                            fontSize: 12,
                          }}
                          axisLine={false}
                          tickLine={false}
                          ticks={[0, 10, 20]}
                        />
                        <Tooltip
                          contentStyle={{
                            background: "rgba(13, 8, 27, 0.95)",
                            border: "1px solid rgba(105, 56, 239, 0.4)",
                            borderRadius: "8px",
                            color: "#FAFAFA",
                            fontFamily: "Geist, sans-serif",
                          }}
                          cursor={{ fill: "rgba(105, 56, 239, 0.1)" }}
                        />
                        <Legend
                          wrapperStyle={{
                            paddingTop: "20px",
                            fontFamily: "Geist, sans-serif",
                            fontSize: "12px",
                          }}
                          iconType="square"
                          iconSize={8}
                          formatter={(value) => (
                            <span
                              style={{ color: "#FAFAFA", marginLeft: "6px" }}
                            >
                              {value}
                            </span>
                          )}
                        />
                        <Bar
                          dataKey="nonAI"
                          fill="#D9D6FE"
                          radius={[4, 4, 0, 0]}
                          name="Non-AI Tasks"
                          maxBarSize={40}
                        />
                        <Bar
                          dataKey="aiBeezi"
                          fill="#9B8AFB"
                          radius={[4, 4, 0, 0]}
                          name="AI Beezi Tasks"
                          maxBarSize={40}
                        />
                      </BarChart>
                    </ResponsiveContainer>
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
