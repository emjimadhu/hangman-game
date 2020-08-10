import React from 'react';

import './client-wrong-letters.scss';

export interface IClientWrongLettersProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientWrongLetters: React.FC = (properties: IClientWrongLettersProps) => {
  return (
    <div>
      <h1>Welcome to client-wrong-letters!</h1>
    </div>
  );
};

export default ClientWrongLetters;
