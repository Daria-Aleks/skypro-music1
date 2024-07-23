import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProgressBar from '../components/ProgressBar/ProgressBar';
jest.mock('./ProgressBar.module.css', () => ({
  styledProgressInput: 'styledProgressInput'
}));

describe('ProgressBar Component', () => {
  const mockOnChange = jest.fn();

  test('renders the ProgressBar component', () => {
    render(
      <ProgressBar
        max={100}
        value={50}
        step={1}
        onChange={mockOnChange}
      />
    );
  });
});