/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';

import './client-popup.scss';

export interface IClientPopupProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientPopup: React.FC = (properties: IClientPopupProps) => {
  return (
    <div className="popup-container" id="popup-container">
      <div className="popup">
        <h2 id="final-message"></h2>
        <h3 id="final-message-reveal-word"></h3>
        <button id="play-button">Play Again</button>
      </div>
    </div>
  );
};

export default ClientPopup;
