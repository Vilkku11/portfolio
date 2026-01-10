import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectLink from "./ProjectLink";

describe("ProjectLink", () => {
  const url = "https://example.com/example/repo";

  it("renders a project link with correct attributes", () => {
    render(<ProjectLink url={url} />);

    const link = screen.getByRole("link", {
      name: /project in github/i,
    });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", url);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
