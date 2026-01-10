import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "./Projects";
import { useActiveSectionStore } from "../../store/store";
import { projects } from "../../Data";
import Card from "./Card/Card";

vi.mock("../../../../test/__mocks__framer-motion");

vi.mock("./Card/Card", () => ({
  default: vi.fn(() => <div data-testid="card" />),
}));

vi.mock("../sectionObserver/SectionObserver", () => ({
  default: () => <div data-testid="section-observer" />,
}));

describe("Projects", () => {
  beforeEach(() => {
    useActiveSectionStore.setState({ activeSection: "" });
    vi.clearAllMocks();
  });

  it("renders the PRojects header", () => {
    render(<Projects />);

    expect(
      screen.getByRole("heading", { name: /projects/i })
    ).toBeInTheDocument();
  });

  it("adds sticky class when Projects is active", () => {
    useActiveSectionStore.setState({ activeSection: "Projects" });

    render(<Projects />);

    const header = screen.getByRole("heading", { name: /projects/i });
    expect(header).toHaveClass("sticky");
  });

  it("renders one Card per project", () => {
    render(<Projects />);

    expect(Card).toHaveBeenCalledTimes(projects.length);
  });

  it("renders SectionObserver", () => {
    render(<Projects />);

    expect(screen.getByTestId("section-observer")).toBeInTheDocument();
  });

  it("disables animation on small screens", () => {
    window.innerWidth = 500;
    window.dispatchEvent(new Event("resize"));

    render(<Projects />);

    const firstCallProps = (Card as any).mock.calls[0][0];

    //
    expect(firstCallProps.targetScale).toBe(1);
  });
});
