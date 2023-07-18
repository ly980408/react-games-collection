import React from 'react';
import ReactDOM from 'react-dom/client';
import GameGomoku from '@/games/Gomoku';

import 'uno.css';
import './style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>React Games Collection</h1>

    <h2>[{GameGomoku.GAME_NAME}]</h2>

    <div id="game-container">
      <GameGomoku />
    </div>
  </React.StrictMode>,
);
