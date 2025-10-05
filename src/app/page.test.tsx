import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

// Teste simples para verificar se o componente renderiza corretamente
test("renders Home component and displays the heading", () => {
  render(<Home />);

  // Verifica se o texto "Sou a raquel" aparece
  const heading = screen.getByText("Sou a raquel");
  expect(heading).toBeInTheDocument();

  // Verifica se alguns outros textos aparecem//
  expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
  expect(screen.getByText(/oii/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Save and see your changes instantly/i),
  ).toBeInTheDocument();
});
