import React, {
  useState, useEffect
} from 'react';
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

  const [
    playable,
    setPlayable
  ] = useState<boolean>(true);

  const [
    wrongLetters,
    setWrongLetters
  ] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (event_: KeyboardEvent) => {
      const {
        keyCode, key
      } = event_;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(correctLetters => [
              ...correctLetters,
              letter
            ]);
          } else {
            // showNotification();
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(wrongLetters => [
              ...wrongLetters,
              letter
            ]);
          } else {
            // showNotification();
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    playable,
    correctLetters,
    wrongLetters
  ]);

  return (
    <div>
      <ClientHeader />
      <div className="game-container">
        <ClientFigure wrongLetters={wrongLetters} />
        <ClientWrongLetters wrongLetters={wrongLetters} />
        <ClientWord selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
    </div>
  );
};

export default App;
