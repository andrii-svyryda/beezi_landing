import Image from "next/image";

export default function BeeziBadge() {
  return (
    <div
      style={{
        background: "rgba(105, 56, 239, 0.2)",
        border: "1px solid rgba(105, 56, 239, 0.4)",
        borderRadius: "20px",
        padding: "16px",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "96px",
        height: "96px",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          background: "#FFFFFF",
          borderRadius: "5.76px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow:
            "0px 0.24px 0.48px -0.12px rgba(0, 0, 0, 0.08), 0px 0.48px 11.52px 0px rgba(105, 56, 239, 0.2)",
        }}
      >
        <Image
          src="/logo-icon.svg"
          alt="Beezi"
          width={20.69}
          height={23.03}
          style={{
            filter: "brightness(0)",
          }}
        />
      </div>
    </div>
  );
}
