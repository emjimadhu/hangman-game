/* eslint-disable import/default */
import React from 'react';

export const showNotification = (setShowNotification: React.Dispatch<React.SetStateAction<boolean>>) => {
  setShowNotification(true);

  setTimeout(() => {
    setShowNotification(false);
  }, 2000);
};
