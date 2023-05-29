import { fireEvent, screen, cleanup, render } from "@testing-library/react";
import SearchFilters from "../Filters";

describe("SearchFilters", () => {
  const mockSetPage = jest.fn();
  const mockSetNameFilter = jest.fn();
  const mockSetStatusFilter = jest.fn();
  const mockSetGenderFilter = jest.fn();

  afterEach(() => {
    cleanup();
  });

  test("renders name input", () => {
    render(
      <SearchFilters
        nameFilter=""
        setNameFilter={mockSetNameFilter}
        statusFilter=""
        setStatusFilter={mockSetStatusFilter}
        genderFilter=""
        setGenderFilter={mockSetGenderFilter}
        setPage={mockSetPage}
      />
    );

    const nameInputs = screen.getAllByTestId("name-input");
    expect(nameInputs.length).toBeGreaterThan(0);
    nameInputs.forEach((input) => {
      expect(input).toBeInTheDocument();
    });
  });

  test("renders status select", () => {
    render(
      <SearchFilters
        nameFilter=""
        setNameFilter={mockSetNameFilter}
        statusFilter=""
        setStatusFilter={mockSetStatusFilter}
        genderFilter=""
        setGenderFilter={mockSetGenderFilter}
        setPage={mockSetPage}
      />
    );

    const statusSelect = screen.getByTestId("status-select");
    expect(statusSelect).toBeInTheDocument();
  });

  test("renders gender select", () => {
    render(
      <SearchFilters
        nameFilter=""
        setNameFilter={mockSetNameFilter}
        statusFilter=""
        setStatusFilter={mockSetStatusFilter}
        genderFilter=""
        setGenderFilter={mockSetGenderFilter}
        setPage={mockSetPage}
      />
    );

    const genderSelect = screen.getByTestId("gender-select");
    expect(genderSelect).toBeInTheDocument();
  });

  test("renders clear button", () => {
    render(
      <SearchFilters
        nameFilter=""
        setNameFilter={mockSetNameFilter}
        statusFilter=""
        setStatusFilter={mockSetStatusFilter}
        genderFilter=""
        setGenderFilter={mockSetGenderFilter}
        setPage={mockSetPage}
      />
    );

    const clearButton = screen.getByTestId("clear-button");
    expect(clearButton).toBeInTheDocument();
  });

  test("clear button resets filters", () => {
    render(
      <SearchFilters
        nameFilter=""
        setNameFilter={mockSetNameFilter}
        statusFilter=""
        setStatusFilter={mockSetStatusFilter}
        genderFilter=""
        setGenderFilter={mockSetGenderFilter}
        setPage={mockSetPage}
      />
    );

    const clearButton = screen.getByTestId("clear-button");
    fireEvent.click(clearButton);
    expect(mockSetPage).toHaveBeenCalledWith(1);
    expect(mockSetNameFilter).toHaveBeenCalledWith("");
    expect(mockSetStatusFilter).toHaveBeenCalledWith("");
    expect(mockSetGenderFilter).toHaveBeenCalledWith("");
  });

  test("clear filters button clears filters", () => {
    const setNameFilter = jest.fn();
    const setStatusFilter = jest.fn();
    const setGenderFilter = jest.fn();
    const setPage = jest.fn();

    render(
      <SearchFilters
        nameFilter="test"
        setNameFilter={setNameFilter}
        statusFilter="alive"
        setStatusFilter={setStatusFilter}
        genderFilter="male"
        setGenderFilter={setGenderFilter}
        setPage={setPage}
      />
    );

    const clearButtons = screen.getAllByTestId("clear-button");

    clearButtons.forEach((button) => {
      fireEvent.click(button);
    });

    expect(setNameFilter).toHaveBeenCalledWith("");
    expect(setStatusFilter).toHaveBeenCalledWith("");
    expect(setGenderFilter).toHaveBeenCalledWith("");
    expect(setPage).toHaveBeenCalledWith(1);
  });
});