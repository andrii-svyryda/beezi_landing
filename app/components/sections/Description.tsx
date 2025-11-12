import Container from "../Container";

export default function Description() {
  return (
    <section className="pb-8 md:pb-24 md:pt-24">
      <Container>
        <div
          className="flex flex-col items-center"
          style={{
            gap: "60px",
          }}
        >
          {/* Section Title */}
          <div
            className="flex flex-col items-center"
            style={{
              maxWidth: "768px",
              gap: "24px",
            }}
          >
            <h2
              className="text-center font-bold leading-none"
              style={{
                fontSize: "48px",
                lineHeight: "1.4em",
                fontFamily: "Space Grotesk, sans-serif",
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FAFAFA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Forget code-only agents
            </h2>
            <p
              className="text-center"
              style={{
                fontSize: "18px",
                lineHeight: "1.5555em",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Beezi brings clarity, tracking, and speed to your whole delivery
              cycle.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
