import React from 'react';
import { render } from '@testing-library/react';

import ClientWrongLetters from './client-wrong-letters';

describe(' ClientWrongLetters', () => {
  it('should render successfully', () => {
    expect
      .assertions(1);

    const {
      baseElement
    } = render
    (<ClientWrongLetters />);

    expect(baseElement).toBeTruthy();
  });
});
