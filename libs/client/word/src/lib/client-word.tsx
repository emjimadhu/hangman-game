import React from 'react';

import './client-word.scss';

export interface IClientWordProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientWord: React.FC = (properties: IClientWordProps) => {
  return (
    <div className="word" id="word"></div>
  );
};

export default ClientWord;
