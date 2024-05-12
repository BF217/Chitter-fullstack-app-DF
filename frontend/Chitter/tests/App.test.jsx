import { describe } from "vitest";
import App from "../src/App";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("App tests", () => {
  it("should render App", () => {
    const { container } = render(
      <Router>
        <App />
      </Router>
    );
    expect(container).toBeInTheDocument();
  });
});
