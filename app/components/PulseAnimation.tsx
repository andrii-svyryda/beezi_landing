"use client";

import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
}

interface PathSegment {
  type: "line" | "arc";
  start: Point;
  end: Point;
  length: number;
  // For arcs
  center?: Point;
  radius?: number;
  startAngle?: number;
  endAngle?: number;
  anticlockwise?: boolean;
}

interface PulseAnimationProps {
  path: Point[];
  width?: number;
  height?: number;
  pulseSpeed?: number;
  pulseLength?: number;
  pulseColor?: string;
  lineColor?: string;
  className?: string;
}

export default function PulseAnimation({
  path,
  width = 800,
  height = 50,
  pulseSpeed = 2,
  pulseLength = 100,
  pulseColor = "#6938EF",
  lineColor = "rgba(105, 56, 239, 0.2)",
  className = "",
}: PulseAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const pulsePositionRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas resolution for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Build segments from path (detecting curves vs lines)
    const buildSegments = (): PathSegment[] => {
      const segments: PathSegment[] = [];

      for (let i = 1; i < path.length; i++) {
        const start = path[i - 1];
        const end = path[i];
        const dx = end.x - start.x;
        const dy = end.y - start.y;

        // If both x and y change, it's a curve (quarter circle)
        if (dx !== 0 && dy !== 0) {
          // Clockwise quarter circle
          // Radius is the absolute value of dx or dy (should be equal for proper quarter circle)
          const radius = Math.abs(dx);

          // Center is always at (end.x, start.y) for proper rounded corners
          let center: Point;

          // Calculate angles based on direction
          let startAngle: number;
          let endAngle: number;
          let anticlockwise: boolean;

          if (dx > 0 && dy > 0) {
            // Going right and down - center at top-right
            center = { x: start.x, y: end.y };
            startAngle = Math.PI * 1.5; // 270° (pointing up)
            endAngle = Math.PI * 2; // 0° (pointing right)
            anticlockwise = false; // Counter-clockwise from π to π/2
          } else if (dx > 0 && dy < 0) {
            // Going right and up - center at bottom-right
            center = { x: end.x, y: start.y };
            startAngle = Math.PI; // 180° (pointing left)
            endAngle = Math.PI * 1.5; // 270° (pointing up)
            anticlockwise = false; // Clockwise from π to 3π/2
          } else if (dx < 0 && dy > 0) {
            // Going left and down - center at top-left
            center = { x: end.x, y: start.y };
            startAngle = 0; // 0° (pointing right)
            endAngle = Math.PI * 0.5; // 90° (pointing down)
            anticlockwise = false; // Clockwise from 0 to π/2
          } else {
            // dx < 0 && dy < 0 - Going left and up - center at bottom-left
            center = { x: start.x, y: end.y };
            startAngle = Math.PI * 0.5; // 0° (pointing down)
            endAngle = Math.PI; // 270° (pointing up)
            anticlockwise = false; // Counter-clockwise from 0 to 3π/2
          }

          // Arc length = radius * angle (quarter circle = π/2 radians)
          const arcLength = (Math.PI / 2) * radius;

          segments.push({
            type: "arc",
            start,
            end,
            length: arcLength,
            center,
            radius,
            startAngle,
            endAngle,
            anticlockwise,
          });
        } else {
          // Straight line
          const length = Math.sqrt(dx * dx + dy * dy);
          segments.push({
            type: "line",
            start,
            end,
            length,
          });
        }
      }

      return segments;
    };

    // Get point at distance along path
    const getPointAtDistance = (
      segments: PathSegment[],
      distance: number
    ): Point | null => {
      let currentDistance = 0;

      for (const segment of segments) {
        if (currentDistance + segment.length >= distance) {
          const localDistance = distance - currentDistance;

          if (segment.type === "line") {
            // Linear interpolation
            const t = localDistance / segment.length;
            return {
              x: segment.start.x + (segment.end.x - segment.start.x) * t,
              y: segment.start.y + (segment.end.y - segment.start.y) * t,
            };
          } else {
            // Arc interpolation
            const t = localDistance / segment.length;
            const angle =
              segment.startAngle! +
              (segment.endAngle! - segment.startAngle!) * t;
            return {
              x: segment.center!.x + Math.cos(angle) * segment.radius!,
              y: segment.center!.y + Math.sin(angle) * segment.radius!,
            };
          }
        }

        currentDistance += segment.length;
      }

      return null;
    };

    const segments = buildSegments();
    const pathLength = segments.reduce((sum, seg) => sum + seg.length, 0);

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw the path (lines and arcs)
      ctx.beginPath();
      ctx.moveTo(path[0].x, path[0].y);

      for (const segment of segments) {
        if (segment.type === "line") {
          ctx.lineTo(segment.end.x, segment.end.y);
        } else {
          // Draw arc
          ctx.arc(
            segment.center!.x,
            segment.center!.y,
            segment.radius!,
            segment.startAngle!,
            segment.endAngle!,
            segment.anticlockwise || false
          );
        }
      }

      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Update pulse position
      pulsePositionRef.current += pulseSpeed;
      if (pulsePositionRef.current > pathLength + pulseLength) {
        pulsePositionRef.current = -pulseLength;
      }

      // Draw pulse with gradient trail (1 pixel wide, fading back)
      // Draw from back to front so the brightest part is on top
      for (let i = pulseLength; i >= 0; i--) {
        const distance = pulsePositionRef.current - i;
        const point = getPointAtDistance(segments, distance);

        if (point) {
          const alpha = 1 - i / pulseLength;
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.fillRect(Math.round(point.x), Math.round(point.y), 1, 1);
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [path, width, height, pulseSpeed, pulseLength, pulseColor, lineColor]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
}
