export interface GameInfo {
  GAME_NAME: string
  GAME_NAME_CN: string
}
export type GameComponent<P = {}> = React.FC<P> & GameInfo;

export const defineGameComponent = (component: React.FC, info: GameInfo) => Object.assign(component, info) as GameComponent;
