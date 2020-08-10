import React from 'react';
import { render } from '@testing-library/react';

import ClientWord from './client-word';

describe(' ClientWord', () => {
  it('should render successfully', () => {
    expect
      .assertions(1);

    const {
      baseElement
    }
= render(<ClientWord />);

    expect(baseElement).toBeTruthy();
  });
});
