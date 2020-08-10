/* eslint-disable @typescript-eslint/no-explicit-any, unicorn/no-reduce, , unicorn/no-null */
import React from 'react';

import './client-wrong-letters.scss';

export interface IClientWrongLettersProps {
  wrongLetters: any;
}

export const ClientWrongLetters: React.FC<IClientWrongLettersProps> = ({
  wrongLetters
}) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {
          wrongLetters.length > 0 && <p>Wrong</p>
        }
        {
          wrongLetters
            .map((letter: string, index: number) => {
              return <span key={index}>{letter}</span>;
            }).reduce((previous: JSX.Element, current: JSX.Element) => previous === null ? [current] : [
              previous,
              ', ',
              current
            ], null)
        }
      </div>
    </div>
  );
};

export default ClientWrongLetters;
