import React from 'react';
import type { GameComponent } from '../interface';

export interface Props {}

const Gomoku: React.FC<Props> = () => <div>Gomoku</div>;

const GameGomoku = Gomoku as GameComponent<Props>;

GameGomoku.GAME_NAME = 'Gomoku';
GameGomoku.GAME_NAME_CN = '五子棋';

export default GameGomoku;
