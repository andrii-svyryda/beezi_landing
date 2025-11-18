import Image from "next/image";
import Container from "../Container";

export default function Founder() {
  return (
    <section className="w-full pt-28 pb-0 md:pb-28">
      <Container>
        <div className="flex flex-col md:flex-row items-stretch gap-12 w-full">
          {/* Left Side - Heading and Text */}
          <div className="flex flex-col gap-6 flex-1 text-center md:text-left">
            <h2
              className="text-5xl font-bold leading-normal"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                background:
                  "linear-gradient(0deg, rgba(255, 255, 255, 0.8) 0%, rgba(250, 250, 250, 1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: "1.1em",
              }}
            >
              Made by Engineers,
              <br />
              for Engineers
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Beezi started as a part of our digital transformation at Honeycomb
              Software.
              <br />
              <br />
              We built it to solve our own pain: too much repetitive coding, too
              many backlogs, and not enough time for the work that really
              matters.
            </p>
          </div>

          {/* Right Side - Testimonial Card */}
          <div className="flex-1">
            <div
              className="p-2 rounded-[20px]"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.04)",
              }}
            >
              <div
                className="flex flex-col gap-8 p-8 rounded-xl"
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                }}
              >
                {/* Quote Icon */}
                <Image
                  src="/quote-icon.svg"
                  alt="Quote"
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />

                {/* Quote Text */}
                <p
                  className="text-4xl text-[#FAFAFA] leading-normal"
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Our clients now can ship code so fast, the only bottleneck is
                  how quickly marketing can write the tweet.
                </p>

                {/* Avatar */}
                <div className="flex items-center gap-5">
                  <div
                    className="rounded"
                    style={{
                      background: "#2F1F6A",
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src="/alex-avatar.svg"
                      alt="Alex Semeniuk"
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-[#FAFAFA] leading-none">
                      Alex Semeniuk
                    </span>
                    <span className="text-base text-white/70 leading-normal">
                      CEO at Honeycomb Software
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
