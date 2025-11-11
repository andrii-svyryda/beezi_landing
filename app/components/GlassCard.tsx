import { CSSProperties, ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  borderRadius?: string;
  padding?: string;
}

export default function GlassCard({
  children,
  className = "",
  style = {},
  borderRadius = "16px",
  padding = "4px",
}: GlassCardProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        padding,
        borderRadius,
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow:
          "0px 1px 2px -0.5px rgba(0, 0, 0, 0.08), 0px 2px 8px 0px rgba(105, 56, 239, 0.12)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

