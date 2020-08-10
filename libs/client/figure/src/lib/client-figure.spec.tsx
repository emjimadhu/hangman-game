import React from 'react';
import { render } from '@testing-library/react';

import ClientFigure from './client-figure';

describe(' ClientFigure', () => {
  it('should render successfully', () => {
    expect
      .assertions(1);

    const {
      baseElement
    } =
render(<ClientFigure />);

    expect(baseElement).toBeTruthy();
  });
});
