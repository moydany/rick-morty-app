import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Character from "../Character";

const characterData = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/1"
  },
  location: {
    name: "Earth",
    url: "https://rickandmortyapi.com/api/location/1"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z"
};

describe("Character", () => {
  test("renders Character component", () => {
    render(<Character data={characterData} />);
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
  });

  test("renders character species and gender", () => {
    render(<Character data={characterData} />);
    expect(screen.getByText("Human - Male")).toBeInTheDocument();
  });

  test("renders character status", () => {
    render(<Character data={characterData} />);
    expect(screen.getByText("Alive")).toBeInTheDocument();
  });

  test("renders character origin", () => {
    render(<Character data={characterData} />);
    expect(screen.getByText("Earth")).toBeInTheDocument();
  });
});