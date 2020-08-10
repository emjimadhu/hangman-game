import React from 'react';

import './client-figure.scss';

export interface ClientFigureProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientFigure: React.FC = (properties: ClientFigureProps) => {
  return (
    <div>
      <h1>Welcome to client-figure!</h1>
    </div>
  );
};

export default ClientFigure;
