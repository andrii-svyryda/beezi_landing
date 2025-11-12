import Container from "../Container";
import Link from "next/link";

export default function Features() {
  const features = [
    {
      title: "Intelligent Code Generation",
      description:
        "Turn plain language into production-ready code. Build features, modules, or refactor legacy code tailored to your style. Initiated Learning from Your Codebase",
      iconPath:
        "M2 1.5L10 1.5L18 1.5L18 9.5L18 17.5L10 21L2 17.5L2 9.5L2 1.5Z M8 13.5L8 9.5L12 9.5L12 13.5L8 13.5Z M6 8L6 4L10 4L10 8L6 8Z M12 8L12 4L16 4L16 8L12 8Z",
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
    <section id="features" className="pt-32 md:pt-44 pb-16 md:pb-22">
      <Container>
        <div className="flex flex-col items-center gap-12 md:gap-15">
          {/* Section Header */}
          <div className="max-w-3xl flex flex-col items-center gap-4">
            <div className="flex flex-col items-center w-full gap-6">
              <h2
                className="text-3xl md:text-5xl font-bold text-center w-full"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  lineHeight: "1em",
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FAFAFA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                What Beezi Brings To Your Team{" "}
              </h2>
              <p
                className="text-base md:text-lg text-center text-white/80 w-full"
                style={{
                  fontFamily: "Geist, sans-serif",
                  lineHeight: "1.5555em",
                }}
              >
                Let your engineers focus on product, architecture, and velocity,
                while Beezi handles the manual dev work behind the scenes.
              </p>
            </div>
          </div>

          {/* Features Content */}
          <div className="flex flex-col items-center w-full gap-8 md:gap-12">
            {/* Features Row */}
            <div className="flex flex-col md:flex-row w-full gap-8 md:gap-12">
              {features.map((feature, index) => (
                <>
                  <div
                    key={index}
                    className="flex flex-col gap-6 flex-1 text-white items-center md:items-start"
                  >
                    {/* Icon Box */}
                    <div
                      className="rounded-xl p-3 w-fit"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
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
                    <div className="flex flex-col items-center w-full gap-3">
                      <h3
                        className="text-lg md:text-xl font-bold text-center md:text-left w-full"
                        style={{
                          fontFamily: "Geist, sans-serif",
                          lineHeight: "1em",
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className="text-sm text-center md:text-left text-white/50 w-full"
                        style={{
                          fontFamily: "Geist, sans-serif",
                          lineHeight: "1.43em",
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Separator */}
                  {index < features.length - 1 && (
                    <div
                      className="hidden md:block w-px h-auto"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                      }}
                    />
                  )}
                </>
              ))}
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-4 pt-4 w-full">
              <Link href="/book-a-demo" className="w-full md:w-[160px]">
                <div
                  className="rounded-xl p-1 w-full md:w-[160px]"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow:
                      "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(105, 56, 239, 0.12)",
                  }}
                >
                  <div
                    className="rounded-lg py-3 px-6 flex justify-center items-center cursor-pointer"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(105, 56, 239, 0.3) 0%, rgba(105, 56, 239, 0.1) 100%), #FFFFFF",
                      border:
                        "1px solid linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.1) 100%)",
                    }}
                  >
                    <span
                      className="font-medium text-base text-[#6938EF]"
                      style={{
                        fontFamily: "Geist, sans-serif",
                        lineHeight: "1.5em",
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
