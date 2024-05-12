import { describe, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Home from "../../src/components/Home";
import getPeeps from "../../src/services/getPeepsService";
import { BrowserRouter as Router } from "react-router-dom";
import sinon from "sinon";

let getPeepsStub;

describe("Home", () => {
  beforeEach(() => {
    getPeepsStub = sinon.stub(getPeeps);
  });

  afterEach(() => {
    getPeepsStub.restore();
  });

  it("renders peeps", async () => {
    getPeepsStub.resolves([
      { _id: "1", author: "Author1", content: "Content1" },
      { _id: "2", author: "Author2", content: "Content2" },
    ]);

    render(
      <Router>
        <Home />
      </Router>
    );

    await waitFor(() => screen.getByText(/Author1/));

    expect(screen.getByText(/Author1/).textContent).toBe("Author1");
    expect(screen.getByText(/Content1/).textContent).toBe("Content1");
    expect(screen.getByText(/Author2/).textContent).toBe("Author2");
    expect(screen.getByText(/Content2/).textContent).toBe("Content2");
  });

  it("handles error", async () => {
    getPeepsStub.rejects(new Error("An error occurred"));

    render(
      <Router>
        <Home />
      </Router>
    );

    await waitFor(() => screen.getByText(/An error occurred/));

    expect(screen.getByText(/An error occurred/).textContent).toBe(
      "An error occurred"
    );
  });
});
