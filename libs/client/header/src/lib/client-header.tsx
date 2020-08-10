import React from 'react';

import './client-header.scss';

export interface IClientHeaderProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientHeader = (properties: IClientHeaderProps) => {
  return (
    <div>
      <h1>Welcome to client-header!</h1>
    </div>
  );
};

export default ClientHeader;
