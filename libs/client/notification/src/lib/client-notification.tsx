import React from 'react';

import './client-notification.scss';

export interface IClientNotificationProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientNotification: React.FC = (properties: IClientNotificationProps) => {
  return (
    <div className="notification-container" id="notification-container">
      <p>You have already entered this letter</p>
    </div>
  );
};

export default ClientNotification;
