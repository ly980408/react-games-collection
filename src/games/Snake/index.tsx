import React, { useEffect, useReducer } from 'react';
import { defineGameComponent } from 'utils/defineGameComponent';
import { useEventListener, useRafInterval, useToggle } from 'ahooks';

import './style.css';

const SIZE = 20;
const MOVE_DIRECTIONS = {
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up',
  DOWN: 'down',
};
const MOVE_DIRECTIONS_KEY_MAP = {
  KeyA: MOVE_DIRECTIONS.LEFT,
  KeyD: MOVE_DIRECTIONS.RIGHT,
  KeyW: MOVE_DIRECTIONS.UP,
  KeyS: MOVE_DIRECTIONS.DOWN,
  ArrowLeft: MOVE_DIRECTIONS.LEFT,
  ArrowRight: MOVE_DIRECTIONS.RIGHT,
  ArrowUp: MOVE_DIRECTIONS.UP,
  ArrowDown: MOVE_DIRECTIONS.DOWN,
};
const MOVE_INTERVAL = 200;
// const MOVE_INTERVALS = {
//   1: 200,
//   2: 150,
//   3: 100,
// };

const ACTION_TYPES = {
  MOVE: 'move',
  CHANGE_DIRECTION: 'change_direction',
};

function snakeReducer(state: any, action: any) {
  const nodes = [...state.nodes];
  let head = nodes[nodes.length - 1];

  const food = state.food;
  let score = state.score;
  let isGameOver = state.isGameOver;

  switch (action.type) {
    case ACTION_TYPES.MOVE:
      switch (state.direction) {
        case MOVE_DIRECTIONS.RIGHT:
          head = [head[0] + 1, head[1]];
          break;
        case MOVE_DIRECTIONS.LEFT:
          head = [head[0] - 1, head[1]];
          break;
        case MOVE_DIRECTIONS.UP:
          head = [head[0], head[1] - 1];
          break;
        case MOVE_DIRECTIONS.DOWN:
          head = [head[0], head[1] + 1];
          break;
      }

      // 判断情况
      // 1 是否吃到食物
      if (head[0] === food[0] && head[1] === food[1]) {
        // 吃到食物
        score += 1;
        nodes.push(head);
      }
      // 2 是否撞到边界
      else if (
        head[0] < 0
        || head[1] < 0
        || head[0] >= SIZE
        || head[1] >= SIZE
      ) {
        // 撞到边界
        isGameOver = true;
      }
      // 3 是否撞到身体
      // else if () {

      // }
      // 正常移动
      else {
        nodes.push(head);
        nodes.shift();
      }

      return {
        ...state,
        nodes,
        isGameOver,
        score,
      };

    case ACTION_TYPES.CHANGE_DIRECTION:
      // if () {}
      return {
        ...state,
        direction: action.payload.direction,
      };
  }
}

const Snake: React.FC = () => {
  const [snake, dispatch] = useReducer(snakeReducer, {
    isGameOver: false,
    score: 0,
    nodes: [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    direction: MOVE_DIRECTIONS.RIGHT,
    food: [5, 5],
  });

  /* 处理蛇移动 */
  const [interval, { toggle, setLeft: start, setRight: pause }] = useToggle(MOVE_INTERVAL, undefined);
  const move = () => {
    dispatch({
      type: 'move',
    });
  };
  useRafInterval(move, interval);

  useEffect(() => {
    if (snake.isGameOver) {
      alert('oh no!');

      pause();
    }
  }, [snake.isGameOver]);

  /* 处理键盘keydown事件：开始/暂停，改变蛇移动方向 */
  useEventListener('keydown', (ev) => {
    const keyCode = ev.code;
    if (keyCode === 'Space') {
      // toggle();
    }
    else if (Object.keys(MOVE_DIRECTIONS_KEY_MAP).includes(keyCode)) {
      dispatch({
        type: ACTION_TYPES.CHANGE_DIRECTION,
        payload: { direction: MOVE_DIRECTIONS_KEY_MAP[keyCode] },
      });
    }
  });

  return (
    <div id="game-snake">
      <div className="game-state">score: {snake.score}</div>

      <div className="board">
        {snake.nodes.map((node, index) => {
          return (
            <div
              className={['node', index === snake.nodes.length - 1 && 'head'].filter(Boolean).join(' ')}
              // key={`${x}_${y}`}
              style={{
                left: `${(node[0] / SIZE) * 100}%`,
                top: `${(node[1] / SIZE) * 100}%`,
              }}
            ></div>
          );
        })}

        {snake.food && (
          <div
            className="node food"
            style={{
              left: `${(snake.food[0] / SIZE) * 100}%`,
              top: `${(snake.food[1] / SIZE) * 100}%`,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default defineGameComponent(Snake, {
  GAME_NAME: 'Snake',
  GAME_NAME_CN: '贪吃蛇',
});
