import React from 'react';

import './client-notification.scss';

export interface IClientNotificationProps {} // eslint-disable-line @typescript-eslint/no-empty-interface

export const ClientNotification: React.FC = (properties: IClientNotificationProps) => {
  return (
    <div>
      <h1>Welcome to client-notification!</h1>
    </div>
  );
};

export default ClientNotification;
