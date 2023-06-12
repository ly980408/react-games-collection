import { defineGameComponent } from 'utils/defineGameComponent';
import Snake from './Snake';

export default defineGameComponent(Snake, {
  GAME_NAME: 'Snake',
  GAME_NAME_CN: '贪吃蛇',
});
