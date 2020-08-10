import React, { useState } from 'react';
import { ClientHeader } from '@hangman-game/client/header';
import { ClientFigure } from '@hangman-game/client/figure';
import { ClientWrongLetters } from '@hangman-game/client/wrong-letters';
import { ClientWord } from '@hangman-game/client/word';

import './app.scss';

const words = [
  'application',
  'programming',
  'interface',
  'wizard'
];
const selectedWord = words[Math.floor(Math.random() * words.length)];


export const App = () => {
  const [
    correctLetters,
    setCorrectLetters
  ] = useState<string[]>([]);

  return (
    <div>
      <ClientHeader />
      <div className="game-container">
        <ClientFigure />
        <ClientWrongLetters />
        <ClientWord selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
    </div>
  );
};

export default App;
