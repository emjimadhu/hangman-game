import React from 'react';
import { ClientHeader } from '@hangman-game/client/header';
import { ClientFigure } from '@hangman-game/client/figure';

import './app.scss';

export const App = () => {
  return (
    <div>
      <ClientHeader />
      <div className="game-container">
        <ClientFigure />
      </div>
    </div>
  );
};

export default App;
