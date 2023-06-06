import React from 'react';
import ReactDOM from 'react-dom/client';
import GameSnake from 'games/Snake';

import './style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>React Games Collection -- [{GameSnake.GAME_NAME}]</div>

    <div id="game-container">
      <GameSnake />
    </div>
  </React.StrictMode>,
);
