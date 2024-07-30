import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Nav from '../components/Nav/Nav';

jest.mock('../components/Menu/Menu', () => ({ showMenu }) => (
  <div data-testid="menu">{showMenu ? 'Menu is shown' : 'Menu is hidden'}</div>
));

describe('Nav Component', () => {
  test('toggles menu visibility on burger click', () => {
    const { container } = render(<Nav />);
    
    const menu = screen.getByTestId('menu');
    const burger = container.querySelector('.navBurger');

    expect(menu.textContent).toBe('Menu is hidden');

    fireEvent.click(burger);
    expect(menu.textContent).toBe('Menu is shown');

    fireEvent.click(burger);
    expect(menu.textContent).toBe('Menu is hidden');
  });
});