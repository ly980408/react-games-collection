import type { Position } from './shared';
import { BOARD_SIZE, MOVE_DIRECTIONS_DISABLE_MAP, isCollide, isSamePosition, randomPosition } from './shared';

export interface SnakeState {
  status: 'initial' | 'moving' | 'gameover'
  score: number
  nodes: Position[]
  direction: 'left' | 'right' | 'up' | 'down'
  food: Position
}

export enum ACTION_TYPE {
  START = 'start',
  MOVE = 'move',
  CHANGE_DIRECTION = 'change_direction',
}

export type SnakeAction =
  | {
    type: ACTION_TYPE.START
  }
  | {
    type: ACTION_TYPE.MOVE
  }
  | {
    type: ACTION_TYPE.CHANGE_DIRECTION
    direction: SnakeState['direction']
  };

export const initialState: SnakeState = {
  status: 'initial',
  score: 0,
  nodes: [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  direction: 'right',
  food: [5, 5],
};

export function snakeReducer(state: SnakeState, action: SnakeAction): SnakeState {
  const nodes = [...state.nodes];
  let head = nodes[nodes.length - 1];

  let food = state.food;
  let score = state.score;

  switch (action.type) {
    case ACTION_TYPE.START:
      if (state.status === 'gameover') {
        return {
          ...initialState,
          status: 'moving',
        };
      }
      return {
        ...state,
        status: 'moving',
      };
    case ACTION_TYPE.MOVE:
      switch (state.direction) {
        case 'right':
          head = [head[0] + 1, head[1]];
          break;
        case 'left':
          head = [head[0] - 1, head[1]];
          break;
        case 'up':
          head = [head[0], head[1] - 1];
          break;
        case 'down':
          head = [head[0], head[1] + 1];
          break;
      }

      // 判断情况
      // 1 是否吃到食物
      if (isSamePosition(head, food)) {
        // 吃到食物
        score += 1;
        nodes.push(head);

        food = randomPosition(BOARD_SIZE, nodes);
      }

      // 2 是否撞到边界
      else if (head[0] < 0 || head[1] < 0 || head[0] >= BOARD_SIZE || head[1] >= BOARD_SIZE) {
        return {
          ...state,
          status: 'gameover',
        };
      }

      // 3 是否撞到身体
      else if (isCollide(nodes, head)) {
        return {
          ...state,
          status: 'gameover',
        };
      }

      // 正常移动
      else {
        nodes.push(head);
        nodes.shift();
      }

      return {
        ...state,
        score,
        nodes,
        food,
      };
    case ACTION_TYPE.CHANGE_DIRECTION:
      if (state.direction === action.direction || MOVE_DIRECTIONS_DISABLE_MAP[state.direction] === action.direction) {
        return state;
      }
      return {
        ...state,
        direction: action.direction,
      };
    default:
      return state;
  }
}
