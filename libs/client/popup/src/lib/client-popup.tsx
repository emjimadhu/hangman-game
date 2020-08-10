import React from 'react';

import './client-popup.scss';

export interface IClientPopupProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientPopup: React.FC = (properties: IClientPopupProps) => {
  return (
    <div>
      <h1>Welcome to client-popup!</h1>
    </div>
  );
};

export default ClientPopup;
