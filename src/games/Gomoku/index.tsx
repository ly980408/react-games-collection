import React from 'react';
import classNames from 'classnames';
import type { GameComponent } from '../interface';

export interface Props {}

const Piece: React.FC<{
  isBlack?: boolean
  pos: number[]
}> = ({
  isBlack,
  pos,
}) => {
  return (
    <div
      className={classNames(
        'inline-block w-20px h-20px absolute',
        isBlack ? 'bg-black' : 'bg-white',
        `top-${pos[0]}px`,
        `left-${pos[1]}px`,
      )}
    ></div>
  );
};

const Gomoku: React.FC<Props> = () => {
  return (
    <div className="w-400px h-400px bg-gray-400 relative">
      <Piece isBlack pos={[40, 120]} />
      <Piece pos={[60, 120]} />
      <Piece isBlack pos={[40, 100]} />
    </div>
  );
};

const GameGomoku = Gomoku as GameComponent<Props>;

GameGomoku.GAME_NAME = 'Gomoku';
GameGomoku.GAME_NAME_CN = '五子棋';

export default GameGomoku;
