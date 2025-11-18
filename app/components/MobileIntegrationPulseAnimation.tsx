"use client";

import { useState, useCallback } from "react";
import PulseAnimation from "./PulseAnimation";

interface ObjectDimensions {
  width: number;
  height: number;
  left: number;
  top: number;
  borderRadius: number;
}

const taskBoardProjectDimensions: ObjectDimensions = {
  width: 160,
  height: 96,
  left: 0,
  top: 0,
  borderRadius: 16,
};

const communicationDimensions: ObjectDimensions = {
  width: 160,
  height: 96,
  left: 0,
  top: 96 + 16,
  borderRadius: 16,
};

const repositoryDimensions: ObjectDimensions = {
  width: 160,
  height: 96,
  left: 0,
  top: 96 + 16 + 96 + 16,
  borderRadius: 16,
};

const boxHeight = 730;
const boxWidth = 718;

const leftTopBorder = (object: ObjectDimensions) => [
  { x: object.left, y: object.top + object.borderRadius },
  { x: object.left + object.borderRadius, y: object.top },
];

const leftBottomBorder = (object: ObjectDimensions) => [
  { x: object.left + object.borderRadius, y: object.top + object.height - 1 },
  { x: object.left, y: object.top + object.height - object.borderRadius - 1 },
];

const rightTopBorder = (object: ObjectDimensions) => [
  { x: object.left + object.width - object.borderRadius - 1, y: object.top },
  { x: object.left + object.width - 1, y: object.top + object.borderRadius },
];

const rightBottomBorder = (object: ObjectDimensions) => [
  {
    x: object.left + object.width - 1,
    y: object.top + object.height - object.borderRadius - 1,
  },
  {
    x: object.left + object.width - object.borderRadius - 1,
    y: object.top + object.height - 1,
  },
];

const leftMiddle = (object: ObjectDimensions) => ({
  x: object.left,
  y: object.top + object.height / 2,
});

const leftTopCorner = (object: ObjectDimensions) => ({
  x: object.left,
  y: object.top,
});

const leftBottomCorner = (object: ObjectDimensions) => ({
  x: object.left,
  y: object.top + object.height - 1,
});

const rightTopCorner = (object: ObjectDimensions) => ({
  x: object.left + object.width - 1,
  y: object.top,
});

const rightBottomCorner = (object: ObjectDimensions) => ({
  x: object.left + object.width - 1,
  y: object.top + object.height - 1,
});

const allignX = (
  points1: { x: number; y: number }[],
  points2: { x: number; y: number }[]
) => {
  return [...points1, { x: points1[1].x, y: points2[0].y }, ...points2];
};

const allignY = (
  points1: { x: number; y: number }[],
  points2: { x: number; y: number }[]
) => {
  return [...points1, { x: points2[0].x, y: points1[1].y }, ...points2];
};

interface IntegrationPulseAnimationProps {
  onStatusChange?: (status: string) => void;
}

export const MobileIntegrationPulseAnimation = ({
  onStatusChange,
}: IntegrationPulseAnimationProps) => {
  const [currentStatus, setCurrentStatus] = useState("Defining tasks");

  const containerWidth = screen.width - (16 + 16 + 5) * 2;
  const distanceBetweenSections = containerWidth - 96 - 160;

  const beeziLogoDimensions: ObjectDimensions = {
    width: 96,
    height: 96,
    left: 160 + distanceBetweenSections,
    top: 112,
    borderRadius: 20,
  };

  const taskBeeziJoint: ObjectDimensions = {
    height: 48 + 16 + 1,
    width: 48 + distanceBetweenSections + 1,
    left: 159,
    top: 48,
    borderRadius: 12,
  };

  const beezyRepoJoint: ObjectDimensions = {
    height: 48 + 16 + 2,
    width: 48 + distanceBetweenSections + 2,
    left: 159,
    top: 96 + 16 + 96 - 1,
    borderRadius: 12,
  };

  const communicationBeeziJoint: ObjectDimensions = {
    width: distanceBetweenSections + 2,
    height: 1,
    left: 159,
    top: 96 + 16 + 48,
    borderRadius: 16,
  };

  const pathSegments = [
    {
      name: "taskBoard",
      points: [
        ...leftTopBorder(taskBoardProjectDimensions),
        ...rightTopBorder(taskBoardProjectDimensions),
        ...rightBottomBorder(taskBoardProjectDimensions),
        ...leftBottomBorder(taskBoardProjectDimensions),
        ...leftTopBorder(taskBoardProjectDimensions),
        ...rightTopBorder(taskBoardProjectDimensions),
        leftTopCorner(taskBeeziJoint),
      ],
      status: "Defining tasks",
    },
    {
      name: "beeziProcessing",
      points: [
        ...rightTopBorder(taskBeeziJoint),
        rightBottomCorner(taskBeeziJoint),
        ...rightTopBorder(beeziLogoDimensions),
        ...rightBottomBorder(beeziLogoDimensions),
        ...leftBottomBorder(beeziLogoDimensions),
        ...leftTopBorder(beeziLogoDimensions),
        ...rightTopBorder(beeziLogoDimensions),
        ...rightBottomBorder(beeziLogoDimensions),
        ...leftBottomBorder(beeziLogoDimensions),
        rightTopCorner(communicationBeeziJoint),
        leftTopCorner(communicationBeeziJoint),
      ],
      status: "Processing ticket",
    },
    {
      name: "communication",
      points: [
        ...rightBottomBorder(communicationDimensions),
        ...leftBottomBorder(communicationDimensions),
        ...leftTopBorder(communicationDimensions),
        ...rightTopBorder(communicationDimensions),
        ...rightBottomBorder(communicationDimensions),
        ...leftBottomBorder(communicationDimensions),
        ...leftTopBorder(communicationDimensions),
        ...rightTopBorder(communicationDimensions),
        leftTopCorner(communicationBeeziJoint),
        rightTopCorner(communicationBeeziJoint),
      ],
      status: "Discussing requirements",
    },
    {
      name: "beeziImplementing",
      points: [
        ...leftTopBorder(beeziLogoDimensions),
        ...rightTopBorder(beeziLogoDimensions),
        ...rightBottomBorder(beeziLogoDimensions),
        ...leftBottomBorder(beeziLogoDimensions),
        ...leftTopBorder(beeziLogoDimensions),
        ...rightTopBorder(beeziLogoDimensions),
        ...rightBottomBorder(beeziLogoDimensions),
        rightTopCorner(beezyRepoJoint),
        ...rightBottomBorder(beezyRepoJoint),
        leftBottomCorner(beezyRepoJoint),
      ],
      status: "Implementing solution",
    },
    {
      name: "repository",
      points: [
        ...rightBottomBorder(repositoryDimensions),
        ...leftBottomBorder(repositoryDimensions),
        ...leftTopBorder(repositoryDimensions),
        ...rightTopBorder(repositoryDimensions),
        ...rightBottomBorder(repositoryDimensions),
        ...leftBottomBorder(repositoryDimensions),
        ...leftTopBorder(repositoryDimensions),
      ],
      status: "Committing to repository",
    },
  ];

  // Flatten all points into single path
  const path = pathSegments.flatMap((segment) => segment.points);

  // Calculate cumulative lengths for each segment
  const calculateSegmentLengths = () => {
    const lengths: { start: number; end: number; status: string }[] = [];
    let currentLength = 0;

    pathSegments.forEach((segment) => {
      const segmentStart = currentLength;

      // Calculate length of this segment
      for (let i = 1; i < segment.points.length; i++) {
        const p1 = segment.points[i - 1];
        const p2 = segment.points[i];
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;

        if (dx !== 0 && dy !== 0) {
          // Arc segment
          const radius = Math.abs(dx);
          currentLength += (Math.PI / 2) * radius;
        } else {
          // Line segment
          currentLength += Math.sqrt(dx * dx + dy * dy);
        }
      }

      lengths.push({
        start: segmentStart,
        end: currentLength,
        status: segment.status,
      });
    });

    return lengths;
  };

  const segmentLengths = calculateSegmentLengths();

  const handlePositionChange = useCallback(
    (position: number, totalLength: number) => {
      // Normalize position to be within 0 to totalLength
      const normalizedPosition =
        ((position % totalLength) + totalLength) % totalLength;

      // Find which segment we're in
      for (const segment of segmentLengths) {
        if (
          normalizedPosition >= segment.start &&
          normalizedPosition < segment.end
        ) {
          if (currentStatus !== segment.status) {
            setCurrentStatus(segment.status);
            if (onStatusChange) {
              onStatusChange(segment.status);
            }
          }
          break;
        }
      }
    },
    [currentStatus, segmentLengths, onStatusChange]
  );

  return (
    <div>
      <div
        style={{
          position: "absolute",
          left: "160px",
          top: "48px",
          width: `${distanceBetweenSections}px`,
          height: "1px",
          background: "rgba(105, 56, 239, 0.4)",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "160px",
          top: `${communicationBeeziJoint.top}px`,
          width: `${distanceBetweenSections}px`,
          height: "1px",
          background: "rgba(105, 56, 239, 0.4)",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "160px",
          bottom: "48px",
          width: `${distanceBetweenSections}px`,
          height: "1px",
          background: "rgba(105, 56, 239, 0.4)",
          zIndex: 2,
        }}
      />
      <PulseAnimation
        path={path}
        width={boxWidth}
        height={boxHeight}
        pulseSpeed={1.3}
        pulseLength={23}
        pulseColor="#FFFFFF"
        lineColor="transparent"
        onPositionChange={handlePositionChange}
      />
    </div>
  );
};
