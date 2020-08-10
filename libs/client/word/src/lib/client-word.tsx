import React from 'react';

import './client-word.scss';

export interface IClientWordProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientWord: React.FC = (properties: IClientWordProps) => {
  return (
    <div>
      <h1>Welcome to client-word!</h1>
    </div>
  );
};

export default ClientWord;
