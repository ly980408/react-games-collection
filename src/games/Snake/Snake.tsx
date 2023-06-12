import React, { useReducer } from 'react';
import { useEventListener, useRafInterval } from 'ahooks';

import './style.css';
import type { directionKeyMap } from './shared';
import { BOARD_SIZE, MOVE_DIRECTIONS_KEY_MAP, MOVE_INTERVAL } from './shared';
import { ACTION_TYPE, initialState, snakeReducer } from './snakeReducer';

const Snake: React.FC = () => {
  const [snake, dispatch] = useReducer(snakeReducer, initialState);

  /* 处理蛇移动 */
  const move = () => {
    dispatch({
      type: ACTION_TYPE.MOVE,
    });
  };
  useRafInterval(move, snake.status === 'moving' ? MOVE_INTERVAL : undefined);

  const start = () => {
    dispatch({
      type: ACTION_TYPE.START,
    });
  };

  /* 处理键盘keydown事件：开始/暂停，改变蛇移动方向 */
  useEventListener('keydown', (ev) => {
    const keyCode = ev.code;
    if (keyCode === 'Space') {
      start();
    }
    else if (Object.keys(MOVE_DIRECTIONS_KEY_MAP).includes(keyCode)) {
      dispatch({
        type: ACTION_TYPE.CHANGE_DIRECTION,
        direction: MOVE_DIRECTIONS_KEY_MAP[keyCode as keyof directionKeyMap],
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
              // key={`snake_node_${node[0]}_${node[1]}`}
              className={['node', index === snake.nodes.length - 1 && 'head'].filter(Boolean).join(' ')}
              style={{
                left: `${(node[0] / BOARD_SIZE) * 100}%`,
                top: `${(node[1] / BOARD_SIZE) * 100}%`,
              }}
            ></div>
          );
        })}

        {snake.food && (
          <div
            className="node food"
            style={{
              left: `${(snake.food[0] / BOARD_SIZE) * 100}%`,
              top: `${(snake.food[1] / BOARD_SIZE) * 100}%`,
            }}
          ></div>
        )}

        {snake.status !== 'moving' && (
          <div className="overlay">
            {snake.status === 'initial' && (
              <div className="game-intro">
                <button onClick={start}>Start</button>
                <br />
                <br />
                Click button or press <i>Space</i> to start.
                <br />
                <br />
                Press <i>W/A/S/D</i> or <i>Arrow Keys</i> to change the direction.
              </div>
            )}

            {snake.status === 'gameover' && (
              <div className="game-intro">
                GAME OVER!
                <br />
                <br />
                <button onClick={start}>Another game</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Snake;
