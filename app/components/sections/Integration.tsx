import Container from "../Container";
import GlassCard from "../GlassCard";
import Image from "next/image";
import Link from "next/link";

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
    <section className="w-full py-16 md:py-28 lg:py-30">
      <Container>
        <div className="flex flex-col items-center gap-12 md:gap-20 w-full">
          {/* Title Section */}
          <div className="flex flex-col gap-4 md:gap-6 items-center max-w-3xl">
            <h2
              className="text-3xl md:text-5xl font-bold text-center"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                lineHeight: "1em",
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
              className="text-base md:text-lg text-center"
              style={{
                fontFamily: "Geist, sans-serif",
                fontWeight: 400,
                lineHeight: "1.5555555555555556em",
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
              width: "100%",
            }}
          >
            {/* Integration Items Row */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-6 w-full mb-8 md:mb-10">
              {integrations.map((integration, index) => (
                <div
                  key={integration.name}
                  className="flex flex-col md:flex-row gap-6 flex-1"
                >
                  {/* Integration Item */}
                  <div className="flex flex-col gap-4 flex-1">
                    {/* Content */}
                    <div className="flex flex-col items-center gap-3">
                      <h3
                        className="text-lg md:text-xl font-bold text-center"
                        style={{
                          fontFamily: "Geist, sans-serif",
                          lineHeight: "1em",
                          color: "#FAFAFA",
                          margin: 0,
                        }}
                      >
                        {integration.name}
                      </h3>
                      <p
                        className="text-sm text-center"
                        style={{
                          fontFamily: "Geist, sans-serif",
                          fontWeight: 400,
                          lineHeight: "1.4285714285714286em",
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
                      className="hidden md:block w-px flex-shrink-0"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Integration Preview Card - Scrollable on mobile */}
            <div className="w-full overflow-x-auto md:overflow-x-visible">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "0",
                  width: "916px",
                  margin: "0 auto",
                }}
              >
                <GlassCard className="w-full">
                <div
                  style={{
                    width: "100%",
                    background: "#0D081B",
                    borderRadius: "12px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Background Image Section */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "352px",
                      overflow: "hidden",
                    }}
                  >
                    {/* Background Image */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-560px",
                        top: "-0.1px",
                        width: "2560px",
                        height: "1270px",
                      }}
                    >
                      {/* Top Radial Gradient */}
                      <div
                        style={{
                          position: "absolute",
                          left: "560px",
                          top: "0",
                          width: "771px",
                          height: "240px",
                          background:
                            "radial-gradient(circle at center top, rgba(0, 0, 0, 0.7) 0%, transparent 100%)",
                        }}
                      />

                      {/* Hero Background Image */}
                      <Image
                        src="/hero_background.png"
                        alt="Background"
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />

                      {/* Bottom Radial Gradient */}
                      <div
                        style={{
                          position: "absolute",
                          left: "560px",
                          top: "0",
                          width: "1440px",
                          height: "1180px",
                          background:
                            "radial-gradient(circle at center bottom, rgba(105, 56, 239, 0.4) 0%, transparent 100%)",
                        }}
                      />
                    </div>

                    {/* Floating Badges and Lines */}
                    <div
                      style={{
                        position: "absolute",
                        left: "49px",
                        top: "62px",
                        width: "715px",
                        height: "228px",
                      }}
                    >
                      {/* Beezi Logo Badge */}
                      <div
                        style={{
                          position: "absolute",
                          left: "333px",
                          top: "0",
                          background: "rgba(105, 56, 239, 0.2)",
                          border: "1px solid rgba(105, 56, 239, 0.4)",
                          borderRadius: "20px",
                          padding: "16px",
                          backdropFilter: "blur(10px)",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            width: "100px",
                            height: "100px",
                            background: "#FFFFFF",
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
                            width={77.78}
                            height={77.78}
                            style={{
                              filter: "brightness(0)",
                            }}
                          />
                        </div>
                      </div>

                      {/* Communication Badge */}
                      <div
                        style={{
                          position: "absolute",
                          left: "293px",
                          top: "164px",
                          background: "rgba(105, 56, 239, 0.2)",
                          border: "1px solid rgba(105, 56, 239, 0.4)",
                          borderRadius: "999px",
                          padding: "16px 20px 16px 24px",
                          backdropFilter: "blur(10px)",
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          opacity: 0.9,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Geist Mono, monospace",
                            fontWeight: 400,
                            fontSize: "14px",
                            lineHeight: "1.4285714285714286em",
                            textTransform: "uppercase",
                            color: "rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          Communication
                        </span>
                        <div
                          style={{
                            display: "flex",
                            gap: "0",
                            width: "56px",
                            height: "32px",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              width: "32px",
                              height: "32px",
                              background: "#FFFFFF",
                              border: "1px solid rgba(33, 31, 17, 0.12)",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "6px",
                            }}
                          >
                            <Image
                              src="/slack-color-icon.svg"
                              alt="Slack"
                              width={20}
                              height={20}
                            />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: "24px",
                              top: "0",
                              width: "32px",
                              height: "32px",
                              background: "#FFFFFF",
                              border: "1px solid rgba(33, 31, 17, 0.12)",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "6px",
                            }}
                          >
                            <Image
                              src="/teams-icon.svg"
                              alt="Teams"
                              width={20}
                              height={20}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Task Board / Project Badge */}
                      <div
                        style={{
                          position: "absolute",
                          left: "0",
                          top: "34px",
                          background: "rgba(105, 56, 239, 0.2)",
                          border: "1px solid rgba(105, 56, 239, 0.4)",
                          borderRadius: "999px",
                          padding: "16px 16px 16px 20px",
                          backdropFilter: "blur(10px)",
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          opacity: 0.9,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Geist Mono, monospace",
                            fontWeight: 400,
                            fontSize: "14px",
                            lineHeight: "1.4285714285714286em",
                            textTransform: "uppercase",
                            color: "rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          Task Board / Project{" "}
                        </span>
                        <div
                          style={{
                            display: "flex",
                            gap: "0",
                            width: "56px",
                            height: "32px",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              width: "32px",
                              height: "32px",
                              background: "#FFFFFF",
                              border: "1px solid rgba(33, 31, 17, 0.12)",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "5.87px 7.83px",
                            }}
                          >
                            <Image
                              src="/jira-large-icon.svg"
                              alt="Jira"
                              width={17.13}
                              height={16.64}
                            />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: "24px",
                              top: "0",
                              width: "32px",
                              height: "32px",
                              background: "#FFFFFF",
                              border: "1px solid rgba(33, 31, 17, 0.12)",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "6px 5.9px",
                            }}
                          >
                            <Image
                              src="/azure-large-icon.svg"
                              alt="Azure DevOps"
                              width={20}
                              height={20}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Repository Badge */}
                      <div
                        style={{
                          position: "absolute",
                          left: "527px",
                          top: "34px",
                          background: "rgba(105, 56, 239, 0.2)",
                          border: "1px solid rgba(105, 56, 239, 0.4)",
                          borderRadius: "999px",
                          padding: "16px 16px 16px 20px",
                          backdropFilter: "blur(10px)",
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          opacity: 0.9,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "Geist Mono, monospace",
                            fontWeight: 400,
                            fontSize: "14px",
                            lineHeight: "1.4285714285714286em",
                            textTransform: "uppercase",
                            color: "rgba(255, 255, 255, 0.5)",
                          }}
                        >
                          Repository
                        </span>
                        <div
                          style={{
                            display: "flex",
                            gap: "0",
                            width: "56px",
                            height: "32px",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              left: "0",
                              top: "0",
                              width: "32px",
                              height: "32px",
                              background: "#FFFFFF",
                              border: "1px solid rgba(33, 31, 17, 0.12)",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "6px 5.9px",
                            }}
                          >
                            <Image
                              src="/github-large-icon.svg"
                              alt="GitHub"
                              width={20}
                              height={19.67}
                            />
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              left: "24px",
                              top: "0",
                              width: "32px",
                              height: "32px",
                              background: "#FFFFFF",
                              border: "1px solid rgba(33, 31, 17, 0.12)",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "6px 5.9px",
                            }}
                          >
                            <Image
                              src="/azure-large-icon.svg"
                              alt="Azure DevOps"
                              width={20}
                              height={20}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Connection Lines */}
                      {/* Horizontal line from Task Board to Beezi Logo (left to center) */}
                      <div
                        style={{
                          position: "absolute",
                          left: "260px",
                          top: "66px",
                          width: "73px",
                          height: "1px",
                          background: "rgba(105, 56, 239, 0.4)",
                        }}
                      />

                      {/* Horizontal line from Beezi Logo to Repository (center to right) */}
                      <div
                        style={{
                          position: "absolute",
                          left: "466px",
                          top: "66px",
                          width: "61px",
                          height: "1px",
                          background: "rgba(105, 56, 239, 0.4)",
                        }}
                      />

                      {/* Arc from Beezi Logo (top) to Communication (bottom) - left side */}
                      <svg
                        style={{
                          position: "absolute",
                          left: "271px",
                          top: "100px",
                          width: "63px",
                          height: "96px",
                        }}
                        viewBox="0 0 63 96"
                        fill="none"
                      >
                        <path
                          d="M62.5 0.5H12.5C5.87258 0.5 0.5 5.87258 0.5 12.5V83.5C0.5 90.1274 5.87258 95.5 12.5 95.5H21.5"
                          stroke="#6938EF"
                          strokeOpacity="0.4"
                        />
                      </svg>

                      {/* Arc from Beezi Logo (top) to Communication (bottom) - right side */}
                      <svg
                        style={{
                          position: "absolute",
                          left: "466px",
                          top: "100px",
                          width: "63px",
                          height: "96px",
                          transform: "scaleX(-1)",
                        }}
                        viewBox="0 0 63 96"
                        fill="none"
                      >
                        <path
                          d="M62.5 0.5H12.5C5.87258 0.5 0.5 5.87258 0.5 12.5V83.5C0.5 90.1274 5.87258 95.5 12.5 95.5H21.5"
                          stroke="#6938EF"
                          strokeOpacity="0.4"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Nav Container */}
                  <div
                    style={{
                      borderRadius: "20px",
                      padding: "8px 12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      margin: "8px auto",
                      width: "fit-content",
                    }}
                  >
                    <div
                      className="spinner"
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        border: "2px solid rgba(255, 255, 255, 0.2)",
                        borderTopColor: "#FFFFFF",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "Geist Mono, monospace",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "1em",
                        letterSpacing: "-0.8124999701976776%",
                        color: "#FAFAFA",
                      }}
                    >
                      Process steps here...
                    </span>
                  </div>
                </div>
              </GlassCard>
              </div>
            </div>

            {/* Bottom Text and CTA - Outside the card */}
            <div className="flex flex-col items-center gap-10 md:gap-15 mt-5">
              <p
                className="text-sm uppercase text-center"
                style={{
                  fontFamily: "Geist Mono, monospace",
                  fontWeight: 400,
                  lineHeight: "1.4285714285714286em",
                  color: "rgba(255, 255, 255, 0.5)",
                  margin: 0,
                }}
              >
                Other integrations will be available soon...
              </p>

              {/* Book a demo Button */}
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
        </div>
      </Container>
    </section>
  );
}
