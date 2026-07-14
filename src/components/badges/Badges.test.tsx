import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Badges from "./Badges";


describe("Badges component", () => {
  it("renders the badges section heading", () => {
    render(<Badges />);

    expect(
      screen.getByRole("heading", { name: /badges/i }),
    ).toBeInTheDocument();
  });

  it("shows the conset card before accepting", () => {
    render(<Badges />);
    expect(
      screen.getByRole("button", { name: /load badges/i }),
    ).toBeInTheDocument();
  });

  it("shows the badge gallery after accepting consent", async () => {
    render(<Badges />);

    fireEvent.click(
      screen.getByRole("button", { name: /load badges/i }),
    );

    expect(
      screen.queryByRole("button", {
        name: /load badges/i,
      })
    )
  })
});
