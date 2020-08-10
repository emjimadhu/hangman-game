import React from 'react';
import { ClientHeader } from '@hangman-game/client/header';
import { ClientFigure } from '@hangman-game/client/figure';

import './app.scss';

import { Route, Link } from 'react-router-dom';

import { ClientWrongLetters } from '@hangman-game/client/wrong-letters';

export const App = () => {
  return (
    <div>
      <ClientHeader />
      <div className="game-container">
        <ClientFigure />
      </div>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/wrong-letters">ClientWrongLetters</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route path="/wrong-letters" component={ClientWrongLetters} />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </div>
  );
};

export default App;
