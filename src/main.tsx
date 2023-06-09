import React from 'react';
import ReactDOM from 'react-dom/client';
import GameSnake from 'games/Snake';

import './style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>React Games Collection</h1>

    <h2>[{GameSnake.GAME_NAME}]</h2>

    <div id="game-container">
      <GameSnake />
    </div>
  </React.StrictMode>,
);
