export const BOARD_SIZE = 20;
export const MOVE_INTERVAL = 180;

export const MOVE_DIRECTIONS_KEY_MAP = {
  KeyA: 'left',
  KeyD: 'right',
  KeyW: 'up',
  KeyS: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  ArrowUp: 'up',
  ArrowDown: 'down',
} as const;

export type directionKeyMap = typeof MOVE_DIRECTIONS_KEY_MAP;

export type Position = [number, number];

export function isSamePosition(p1: Position, p2: Position): Boolean {
  return p1[0] === p2[0] && p1[1] === p2[1];
}

export function isCollide(nodes: Position[], target: Position): Boolean {
  return nodes.some(node => isSamePosition(node, target));
}

export function randomPosition(size: number, excludes: Position[]): Position {
  let x, y;
  while (true) {
    // 随机获取食物位置
    x = Math.floor(Math.random() * size);
    y = Math.floor(Math.random() * size);

    if (!isCollide(excludes, [x, y])) {
      break;
    }
  }

  return [x, y];
}
