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
  width: 1 + 20 + 236 + 16 + 1,
  height: 1 + 16 + 32 + 16 + 1,
  left: 0,
  top: 34,
  borderRadius: 32,
};

const taskBeeziJoint: ObjectDimensions = {
  height: 1,
  width: 60,
  left: 273,
  top: 66,
  borderRadius: 1,
};

const beezyRepoJoint: ObjectDimensions = {
  height: 1,
  width: 61,
  left: 466,
  top: 66,
  borderRadius: 1,
};

const beeziLogoDimensions: ObjectDimensions = {
  width: 1 + 16 + 100 + 16 + 1,
  height: 1 + 16 + 100 + 16 + 1,
  left: 333,
  top: 0,
  borderRadius: 20,
};

const communicationDimensions: ObjectDimensions = {
  width: 1 + 24 + 177 + 20 + 1,
  height: 1 + 16 + 32 + 16 + 1,
  left: 287,
  top: 164,
  borderRadius: 32,
};

const repositoryDimensions: ObjectDimensions = {
  width: 152 + 20 + 16 + 1 + 1,
  height: 1 + 16 + 32 + 16 + 1,
  left: 527,
  top: 34,
  borderRadius: 32,
};

const communicationBeeziJoint1: ObjectDimensions = {
  width: 63,
  height: 96,
  left: 271,
  top: 100,
  borderRadius: 12,
};

const communicationBeeziJoint2 = {
  width: 63,
  height: 96,
  left: 466,
  top: 100,
  borderRadius: 12,
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

const rightTopCorner = (object: ObjectDimensions) => ({
  x: object.left + object.width - 1,
  y: object.top,
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

export const IntegrationPulseAnimation = ({
  onStatusChange,
}: IntegrationPulseAnimationProps) => {
  const [currentStatus, setCurrentStatus] = useState("Defining tasks");

  // Build the path segments with their start indices
  const pathSegments = [
    {
      name: "beeziProcessing",
      points: [
        ...leftTopBorder(taskBoardProjectDimensions),
        ...rightTopBorder(taskBoardProjectDimensions),
        {
          x: taskBeeziJoint.left + taskBeeziJoint.width,
          y: taskBeeziJoint.top,
        },
        leftMiddle(beeziLogoDimensions),
        ...leftTopBorder(beeziLogoDimensions),
        ...rightTopBorder(beeziLogoDimensions),
        ...rightBottomBorder(beeziLogoDimensions),
        ...leftBottomBorder(beeziLogoDimensions),
        ...leftTopBorder(beeziLogoDimensions),
        ...rightTopBorder(beeziLogoDimensions),
      ],
      status:
        "Beezi responds to a project task and automatically scores the task description.",
    },
    {
      name: "communication",
      points: [
        leftTopCorner(communicationBeeziJoint2),
        ...rightTopBorder(communicationBeeziJoint2),
        ...allignY(
          rightBottomBorder(communicationBeeziJoint2),
          rightBottomBorder(communicationDimensions)
        ),
        // ...leftBottomBorder(communicationDimensions),
        // ...leftTopBorder(communicationDimensions),
        // ...rightTopBorder(communicationDimensions),
        // ...rightBottomBorder(communicationDimensions),
        ...allignX(
          leftBottomBorder(communicationDimensions),
          leftBottomBorder(communicationBeeziJoint1)
        ),
        ...leftTopBorder(communicationBeeziJoint1),
        rightTopCorner(communicationBeeziJoint1),
        ...leftTopBorder(beeziLogoDimensions),
        ...rightTopBorder(beeziLogoDimensions),
        leftTopCorner(communicationBeeziJoint2),
        ...rightTopBorder(communicationBeeziJoint2),
      ],
      status:
        "Beezi collaborates via messengers if clarification is needed and generates an implementation plan.",
    },
    {
      name: "beeziImplementing",
      points: [
        ...allignY(
          rightBottomBorder(communicationBeeziJoint2),
          rightBottomBorder(communicationDimensions)
        ),
        ...leftBottomBorder(communicationDimensions),
        ...leftTopBorder(communicationDimensions),
        ...rightTopBorder(communicationDimensions),
        ...rightBottomBorder(communicationDimensions),
        ...allignX(
          leftBottomBorder(communicationDimensions),
          leftBottomBorder(communicationBeeziJoint1)
        ),
        ...leftTopBorder(communicationBeeziJoint1),
        rightTopCorner(communicationBeeziJoint1),
      ],
      status:
        "The developer reviews and approves the implementation plan in Messenger.",
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
        leftTopCorner(beezyRepoJoint),
        rightTopCorner(beezyRepoJoint),
        ...leftTopBorder(repositoryDimensions),
        ...rightTopBorder(repositoryDimensions),
      ],
      status:
        "Beezi triggers the LLM provider to generate the code and creates a Pull Request in the repository.",
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
        rightTopCorner(beezyRepoJoint),
        leftTopCorner(beezyRepoJoint),
        ...rightBottomBorder(beeziLogoDimensions),
      ],
      status: "The team reviews and comments on the Pull Request.",
    },
    {
      name: "repository",
      points: [
        ...leftBottomBorder(beeziLogoDimensions),
        ...leftTopBorder(beeziLogoDimensions),
        ...rightTopBorder(beeziLogoDimensions),
        leftTopCorner(beezyRepoJoint),
        rightTopCorner(beezyRepoJoint),
        ...leftTopBorder(repositoryDimensions),
        ...rightTopBorder(repositoryDimensions),
      ],
      status: "Beezi updates or resolves comments if requested.",
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
      ],
      status: "The developer approves and merges the Pull Request.",
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
      <PulseAnimation
        path={path}
        width={boxWidth}
        height={boxHeight}
        pulseSpeed={0.8}
        pulseLength={23}
        pulseColor="#FFFFFF"
        lineColor="transparent"
        onPositionChange={handlePositionChange}
      />
    </div>
  );
};
