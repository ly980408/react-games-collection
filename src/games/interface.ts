import type React from 'react';

export type GameComponent<P = {}> = React.FC<P> & {
  GAME_NAME: string
  GAME_NAME_CN: string
};
