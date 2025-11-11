import Container from "../Container";
import GlassCard from "../GlassCard";

export default function FeatureCards() {
  const features = [
    {
      title: "Stay in your workflow. No disruption.",
      description:
        "Beezi runs inside your existing tools — GitHub, Jira, and Slack — keeping developers in flow without changing how they work.",
      visual: "workflow",
    },
    {
      title: "Cut cost per feature by 45%.",
      description:
        "Reduce development costs through intelligent automation and optimized workflows.",
      visual: "chart",
    },
    {
      title: "Keep your code safe.",
      description:
        "Enterprise-grade security with code encryption and compliance built in.",
      visual: "security",
    },
    {
      title: "Track performance, usage, and AI impact.",
      description:
        "Real-time analytics and insights into your development metrics.",
      visual: "analytics",
    },
  ];

  return (
    <section
      style={{
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <Container>
        <div
          className="flex flex-col"
          style={{
            gap: "12px",
          }}
        >
          {features.map((feature, index) => (
            <GlassCard
              key={index}
              padding="20px"
              className="w-full"
              style={{
                boxShadow:
                  "0px 4px 12px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(105, 56, 239, 0.12)",
              }}
            >
              <div
                className="flex flex-col md:flex-row items-center gap-8"
                style={{
                  minHeight: "200px",
                }}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-4">
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "32px",
                      lineHeight: "1.2em",
                      background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FAFAFA 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.5555em",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>

                {/* Visual Placeholder */}
                <div
                  className="flex items-center justify-center rounded-xl"
                  style={{
                    width: "400px",
                    height: "250px",
                    background:
                      "linear-gradient(135deg, rgba(105, 56, 239, 0.1) 0%, rgba(105, 56, 239, 0.05) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "48px",
                    }}
                  >
                    {feature.visual === "workflow" && "🔄"}
                    {feature.visual === "chart" && "📊"}
                    {feature.visual === "security" && "🔒"}
                    {feature.visual === "analytics" && "📈"}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

