import React from 'react';

import './client-wrong-letters.scss';

export interface IClientWrongLettersProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientWrongLetters: React.FC = (properties: IClientWrongLettersProps) => {
  return (
    <div className="wrong-letters-container">
      <div id="wrong-letters"></div>
    </div>
  );
};

export default ClientWrongLetters;
