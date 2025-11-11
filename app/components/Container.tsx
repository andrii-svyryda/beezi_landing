import { CSSProperties, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  maxWidth?: string;
  paddingX?: string;
}

export default function Container({
  children,
  className = "",
  style = {},
  maxWidth = "1440px",
  paddingX = "64px",
}: ContainerProps) {
  return (
    <div
      className={`w-full mx-auto ${className}`}
      style={{
        maxWidth,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

