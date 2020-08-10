import React from 'react';
import { ClientHeader } from '@hangman-game/client/header';
import { ClientFigure } from '@hangman-game/client/figure';
import { ClientWrongLetters } from '@hangman-game/client/wrong-letters';

import './app.scss';


export const App = () => {
  return (
    <div>
      <ClientHeader />
      <div className="game-container">
        <ClientFigure />
        <ClientWrongLetters />
      </div>
    </div>
  );
};

export default App;
