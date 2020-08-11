/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect } from 'react';

import './client-popup.scss';
import { checkWin } from './client-popup.methods';

export interface IClientPopupProps {
  correctLetters: string[];
  wrongLetters: string[];
  selectedWord: string;
  setPlayable: React.Dispatch<React.SetStateAction<boolean>>;
  playAgain: () => void;
}

export const ClientPopup: React.FC<IClientPopupProps> = ({
  correctLetters, wrongLetters, selectedWord, setPlayable, playAgain
}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;
  const checkWinFuntion = checkWin(correctLetters, wrongLetters, selectedWord);

  if (checkWinFuntion === 'win') {
    finalMessage = 'Congratulations! You won! 😃';
    playable = false;
  } else if (checkWinFuntion === 'lose') {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
  }

  useEffect(() => setPlayable(playable));

  return (
    <div
      className="popup-container"
      style={finalMessage !== '' ? {
        display: 'flex'
      } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button
          onClick={playAgain}
        >Play Again</button>
      </div>
    </div>
  );
};

export default ClientPopup;
