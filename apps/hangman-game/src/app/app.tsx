import React from 'react';
import { ClientHeader } from '@hangman-game/client/header';
import { ClientFigure } from '@hangman-game/client/figure';

import './app.scss';

export const App = () => {
  return (
    <div>
      <ClientHeader />
      <ClientFigure />
    </div>
  );
};

export default App;
