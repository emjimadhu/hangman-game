import React from 'react';
import { render } from '@testing-library/react';

import ClientHeader from './client-header';

describe(' ClientHeader', () => {
  it('should render successfully', () => {
    expect.assertions(1);

    const {
      baseElement
    } = render(<ClientHeader />);

    expect(baseElement).toBeTruthy();
  });
});
