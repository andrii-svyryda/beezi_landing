import Image from "next/image";

export default function CommunicationBadge() {
  return (
    <div
      style={{
        background: "rgba(105, 56, 239, 0.2)",
        border: "1px solid rgba(105, 56, 239, 0.4)",
        borderRadius: "16px",
        padding: "20px 0 20px 0",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        opacity: 0.9,
        width: "160px",
        height: "96px",
        justifyContent: "center",
      }}
    >
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
          <Image src="/teams-icon.svg" alt="Teams" width={20} height={20} />
        </div>
      </div>
      <span
        style={{
          fontFamily: "Geist Mono, monospace",
          fontWeight: 400,
          fontSize: "12px",
          lineHeight: "1.3333333333333333em",
          textTransform: "uppercase",
          color: "rgba(255, 255, 255, 0.5)",
          textAlign: "center",
        }}
      >
        Communication
      </span>
    </div>
  );
}
