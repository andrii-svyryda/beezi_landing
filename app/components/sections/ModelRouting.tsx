import Container from "../Container";
import GlassCard from "../GlassCard";
import Image from "next/image";

export default function ModelRouting() {
  return (
    <section className="pt-12 pb-16 md:pt-28 md:pb-28">
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "80px",
          }}
        >
          {/* Main Card */}
          <GlassCard
            padding="8px 8px 8px 8px"
            style={{
              boxShadow:
                "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08), 0px 2px 24px 0px rgba(105, 56, 239, 0.12)",
            }}
          >
            <div
              className="py-16 p-4 md:p-12 lg:p-16"
              style={{
                background: "#0D081B",
                borderRadius: "12px",
              }}
            >
              {/* Section Title */}
              <div className="flex flex-col items-center gap-2 md:gap-6 mb-8 md:mb-12">
                <h2
                  className="text-3xl md:text-5xl font-bold text-center"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    lineHeight: "1.2em",
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FAFAFA 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Smart Model Routing
                </h2>
                <p
                  className="text-base md:text-lg text-center max-w-xl"
                  style={{
                    fontFamily: "Geist, sans-serif",
                    lineHeight: "1.5555em",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  Chooses the right model for each task — balancing reasoning
                  depth, speed, and cost efficiency. Manual override is
                  available for full control.
                </p>
              </div>

              {/* Model Logos Row */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full">
                {/* Anthropic/Claude Logo Card */}
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
                      padding: "12px 16px",
                      boxShadow:
                        "0px 0.5px 1px -0.25px rgba(0, 0, 0, 0.08), 0px 1px 24px 0px rgba(105, 56, 239, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        width: "101px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src="/anthropic-logo.svg"
                        alt="Anthropic"
                        width={100}
                        height={24}
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Purple Slash Separator */}
                <div
                  style={{
                    width: "1px",
                    height: "24px",
                    background: "#6938EF",
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                />

                {/* OpenAI Logo Card */}
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
                      padding: "12px 16px",
                      boxShadow:
                        "0px 0.5px 1px -0.25px rgba(0, 0, 0, 0.08), 0px 1px 24px 0px rgba(105, 56, 239, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        width: "112px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src="/openai-logo.svg"
                        alt="OpenAI"
                        width={112}
                        height={24}
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Purple Slash Separator */}
                <div
                  style={{
                    width: "1px",
                    height: "24px",
                    background: "#6938EF",
                    transform: "rotate(45deg)",
                    flexShrink: 0,
                  }}
                />

                {/* Google/Gemini Logo Card */}
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
                      padding: "12px 16px",
                      boxShadow:
                        "0px 0.5px 1px -0.25px rgba(0, 0, 0, 0.08), 0px 1px 24px 0px rgba(105, 56, 239, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        width: "106px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src="/google-logo.svg"
                        alt="Google Gemini"
                        width={106}
                        height={24}
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator Line */}
              <div
                className="w-full h-px mt-8 md:mt-12"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              />

              {/* Feature Items */}
              <div className="flex flex-col md:flex-row gap-6 mt-8 md:mt-12 w-full">
                {/* Feature 1 */}
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    flex: 1,
                  }}
                >
                  {/* Check Icon */}
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="#FAFAFA"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
                      Optimized Model Selection
                    </h3>
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
                      AI picks the best model for every task to maximize
                      performance and minimize cost.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    flex: 1,
                  }}
                >
                  {/* Check Icon */}
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="#FAFAFA"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
                      Adaptive Model Routing
                    </h3>
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
                      Switches between reasoning and speed automatically, saving
                      tokens without losing quality.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    flex: 1,
                  }}
                >
                  {/* Check Icon */}
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="#FAFAFA"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
                      Cost-Aware Model Control
                    </h3>
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
                      Lets you choose or auto-route models to keep your compute
                      spend predictable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}
