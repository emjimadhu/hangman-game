import React from 'react';

import './client-notification.scss';

export interface IClientNotificationProps {
  showNotification: boolean;
}

export const ClientNotification: React.FC<IClientNotificationProps> = ({
  showNotification
}) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

export default ClientNotification;
