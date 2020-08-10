import React from 'react';
import { ClientHeader } from '@hangman-game/client/header';
import { ClientFigure } from '@hangman-game/client/figure';
import { ClientWrongLetters } from '@hangman-game/client/wrong-letters';
import { ClientWord } from '@hangman-game/client/word';

import './app.scss';


export const App = () => {
  return (
    <div>
      <ClientHeader />
      <div className="game-container">
        <ClientFigure />
        <ClientWrongLetters />
        <ClientWord />
      </div>
    </div>
  );
};

export default App;
