export interface Vec2f {
  x: number;
  y: number;
}

export enum Direction {
  East = 0,
  NorthEast = 1,
  North = 2,
  NorthWest = 3,
  West = 4,
  SouthWest = 5,
  South = 6,
  SouthEast = 7,
}

export const angleMap: Record<Direction, number> = {
  [Direction.East]: 27,
  [Direction.NorthEast]: 0,
  [Direction.North]: 333,
  [Direction.NorthWest]: 270,
  [Direction.West]: 205,
  [Direction.SouthWest]: 180,
  [Direction.South]: 153,
  [Direction.SouthEast]: 90,
};

export const headingMap: Record<Direction, Vec2f> = {
  [Direction.East]: { x: 1, y: 0 },
  [Direction.NorthEast]: { x: 1, y: 1 },
  [Direction.North]: { x: 0, y: 1 },
  [Direction.NorthWest]: { x: -1, y: 1 },
  [Direction.West]: { x: -1, y: 0 },
  [Direction.SouthWest]: { x: -1, y: -1 },
  [Direction.South]: { x: 0, y: -1 },
  [Direction.SouthEast]: { x: 1, y: -1 },
};

// const headings: Direction[] = [
//   Direction.East,
//   Direction.NorthEast,
//   Direction.North,
//   Direction.NorthWest,
//   Direction.West,
//   Direction.SouthWest,
//   Direction.South,
//   Direction.SouthEast,
// ];

// const getCardinalDirection = (vector: Vec2f): Direction => {
//   const angle = Math.atan2(vector.y, vector.x);
//   const octant = Math.round((8 * angle) / (2 * Math.PI) + 8) % 8;
//
//   return headings[octant];
// };

export const computeIsometricCoordinates = (
  position: Vec2f,
  tileHeight: number,
  tileWidth: number,
): Vec2f => {
  // const baseX = worldWidth / 2;
  // const baseY = worldHeight / 2 - (worldMap.height * tileMap.tileHeight) / 2;

  const isoX = (position.x - position.y) * (tileWidth / 2);
  const isoY = (position.x + position.y) * (tileHeight / 2);

  return {
    x: isoX,
    y: isoY,
  };
};