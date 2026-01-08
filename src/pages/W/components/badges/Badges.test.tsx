import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Badges from "./Badges";
import { badges } from "../../Data";

describe("Badges component", () => {
  it("renders the badges section heading", () => {
    render(<Badges />);

    expect(
      screen.getByRole("heading", { name: /badges/i })
    ).toBeInTheDocument();
  });

  it("renders the correct number of badges", () => {
    render(<Badges />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(badges.length);
  });

  it("renders each badge with correct link and text", () => {
    render(<Badges />);

    badges.forEach((badge) => {
      const image = screen.getByAltText(badge.altText);
      expect(image).toBeInTheDocument();

      const link = image.closest("a");
      expect(link).toHaveAttribute("href", badge.badgeLink);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });
});
