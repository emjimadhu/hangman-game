import React from 'react';
import { render } from '@testing-library/react';

import ClientPopup from './client-popup';

describe(' ClientPopup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientPopup />);
    expect(baseElement).toBeTruthy();
  });
});
