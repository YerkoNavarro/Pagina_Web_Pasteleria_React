import "@testing-library/jest-dom";
import Inicio from "../paginas/inicio";
import { render, screen } from "@testing-library/react";

describe("pagina inicio", () => {
it("renderiza pagina inicio correctamente", () => {
render(<Inicio />);
expect(screen.getByText("¡50 Años Endulzando Chile!")).toBeInTheDocument();
});
});
