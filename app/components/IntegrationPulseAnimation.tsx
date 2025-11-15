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

const leftTopCroner = (object: ObjectDimensions) => ({
  x: object.left,
  y: object.top,
});

const rightTopCroner = (object: ObjectDimensions) => ({
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

export const IntegrationPulseAnimation = () => {
  const path = [
    ...leftTopBorder(taskBoardProjectDimensions),
    ...rightTopBorder(taskBoardProjectDimensions),
    ...rightBottomBorder(taskBoardProjectDimensions),
    ...leftBottomBorder(taskBoardProjectDimensions),
    ...leftTopBorder(taskBoardProjectDimensions),
    ...rightTopBorder(taskBoardProjectDimensions),
    { x: taskBeeziJoint.left + taskBeeziJoint.width, y: taskBeeziJoint.top },

    leftMiddle(beeziLogoDimensions),

    ...leftTopBorder(beeziLogoDimensions),
    ...rightTopBorder(beeziLogoDimensions),

    leftTopCroner(communicationBeeziJoint2),
    ...rightTopBorder(communicationBeeziJoint2),
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
    rightTopCroner(communicationBeeziJoint1),
    ...leftTopBorder(beeziLogoDimensions),
    ...rightTopBorder(beeziLogoDimensions),
    ...rightBottomBorder(beeziLogoDimensions),
    ...leftBottomBorder(beeziLogoDimensions),
    ...leftTopBorder(beeziLogoDimensions),
    ...rightTopBorder(beeziLogoDimensions),
    leftTopCroner(beezyRepoJoint),
    ...leftTopBorder(repositoryDimensions),
    ...rightTopBorder(repositoryDimensions),
    ...rightBottomBorder(repositoryDimensions),
    ...leftBottomBorder(repositoryDimensions),
    ...leftTopBorder(repositoryDimensions),
    ...rightTopBorder(repositoryDimensions),
  ];

  return (
    <div>
      <PulseAnimation
        path={path}
        width={boxWidth}
        height={boxHeight}
        pulseSpeed={1}
        pulseLength={23}
        pulseColor="#FFFFFF"
        lineColor="transparent"
      />
    </div>
  );
};
