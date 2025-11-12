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
  // Use responsive CSS class for default padding, inline style for custom values
  const useResponsivePadding = paddingX === "64px";

  return (
    <div
      className={`w-full mx-auto ${useResponsivePadding ? 'container-responsive-padding' : ''} ${className}`}
      style={{
        maxWidth,
        ...(!useResponsivePadding && {
          paddingLeft: paddingX,
          paddingRight: paddingX,
        }),
        ...style,
      }}
    >
      {children}
    </div>
  );
}

