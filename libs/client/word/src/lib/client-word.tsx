import React from 'react';

import './client-word.scss';

export interface IClientWordProps {
  selectedWord: string;
  correctLetters: string[];
}

export const ClientWord: React.FC<IClientWordProps> = ({
  selectedWord, correctLetters
}) => {
  return (
    <div className="word">
      {
        selectedWord
          .split('')
          .map((letter: string, index: number) => {
            return (
              <span className="letter" key={index}>
                {correctLetters.includes(letter) ? letter : ''}
              </span>
            );
          })
      }
    </div>
  );
};

export default ClientWord;
