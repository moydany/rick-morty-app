import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import PaginationControls from '../PaginationControls';

describe('PaginationControls', () => {
  let setPageMock = jest.fn();

  beforeEach(() => {
    setPageMock = jest.fn();
  });

  it('renders without crashing', () => {
    render(<PaginationControls page={1} totalPages={5} setPage={setPageMock} />);
  });

  it('should render the correct number of pages', () => {
    render(<PaginationControls page={1} totalPages={5} setPage={setPageMock} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(4 + 2); // 4 pages, 2 for next and last
  });

  it('should call setPage with correct argument when page button is clicked', () => {
    render(<PaginationControls page={1} totalPages={5} setPage={setPageMock} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[2]); // Clicking on page 4
    expect(setPageMock).toHaveBeenCalledWith(4);
  });

});