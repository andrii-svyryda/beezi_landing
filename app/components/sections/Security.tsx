import Image from "next/image";
import Container from "../Container";

export default function Security() {
  const features = [
    "0 data retention",
    "SSO and role-based control",
    "Full audit logs",
    "Compliance-ready",
  ];

  return (
    <section className="w-full py-[88px]">
      <Container>
        <div className="flex flex-col items-center gap-[60px]">
          {/* Section Title */}
          <div className="w-full max-w-[768px] flex flex-col items-center gap-6">
            <h2 className="text-5xl font-bold text-center bg-gradient-to-b from-white/80 to-[#FAFAFA] bg-clip-text text-transparent leading-normal">
              Security & Compliance You Can Trust
            </h2>
            <p className="text-lg text-white/80 text-center leading-relaxed">
              Beezi is built on strict compliance standards and uses only
              secure, certified AI models (SOC 2 Type II, ISO 27001:2022, ISO/IEC
              42001:2023), so your team can work with complete peace of mind.
            </p>
          </div>

          {/* Content */}
          <div className="w-full flex flex-col items-center gap-12 bg-white/[0.02] border border-white/10 rounded-xl p-0 overflow-hidden">
            <div className="flex w-full">
              {features.map((feature, index) => (
                <div key={index} className="flex items-stretch flex-1">
                  {/* Column */}
                  <div className="flex-1 flex flex-col items-center gap-4 py-9 px-6">
                    <Image
                      src="/shield-check-icon.svg"
                      alt="Security"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <div className="flex flex-col items-center gap-3 w-full">
                      <h3 className="text-xl text-[#FAFAFA] text-center font-mono leading-snug">
                        {feature}
                      </h3>
                    </div>
                  </div>

                  {/* Divider (except after last item) */}
                  {index < features.length - 1 && (
                    <div className="w-px bg-white/10 self-stretch" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
