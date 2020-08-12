import React from 'react';

import './client-header.scss';

export interface IClientHeaderProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientHeader: React.FC = (properties: IClientHeaderProps) => {
  return (
    <div className="header-container">
      <h1>Hangman</h1>
      <p>Find the hidden word - Enter a letter</p>
    </div>
  );
};

export default ClientHeader;
