"use client";
import Image from "next/image";

export default function Partners() {
  const logos = [
    {
      name: "AWS Partner",
      src: "/logos/aws-partner.svg",
      width: 118,
      height: 32,
    },
    {
      name: "Microsoft",
      src: "/logos/microsoft.svg",
      width: 145,
      height: 40,
    },
    {
      name: "Clutch",
      src: "/logos/clutch.svg",
      width: 180,
      height: 60,
    },
    {
      name: "CodeLaunch",
      src: "/logos/codelaunch.svg",
      width: 154,
      height: 56,
    },
    {
      name: "Forbes Technology Council",
      src: "/logos/forbes.svg",
      width: 57,
      height: 56,
    },
    {
      name: "Badge",
      src: "/logos/badge.svg",
      width: 50,
      height: 56,
    },
  ];

  return (
    <section className="w-full overflow-hidden py-16">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="flex items-center animate-scroll">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center justify-center flex-shrink-0 mx-20"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              style={{
                width: `${logo.width}px`,
                height: `${logo.height}px`,
                objectFit: "contain",
              }}
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center justify-center flex-shrink-0 mx-20"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              style={{
                width: `${logo.width}px`,
                height: `${logo.height}px`,
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
