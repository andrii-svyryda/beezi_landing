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
    <section className="w-full flex items-center justify-center py-16 px-20">
      <div className="flex items-center gap-40 flex-wrap justify-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
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
