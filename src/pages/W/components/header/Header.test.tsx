import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { sectionLinks } from "../../Data";

vi.mock("../../../../test/__mocks__framer-motion");

const mockSetActiveSection = vi.fn();

let mockActiveSection = "Home";

vi.mock("../../store/store", () => ({
  useActiveSectionStore: () => ({
    activeSection: mockActiveSection,
    setActiveSection: mockSetActiveSection,
  }),
}));

describe("Header", () => {
  beforeEach(() => {
    mockSetActiveSection.mockClear();
    mockActiveSection = "Home";
  });

  it("renders all section links", () => {
    render(<Header />);

    expect(screen.getByText("About me")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("End")).toBeInTheDocument();
  });

  it("applies active class to active section", () => {
    mockActiveSection = "Projects";

    render(<Header />);

    const activeLink = screen.getByText("Projects");
    expect(activeLink).toHaveClass("nav-item-active");
  });

  it("calls setActiveSection when clicking a link", () => {
    render(<Header />);

    fireEvent.click(screen.getByText("Projects"));

    expect(mockSetActiveSection).toHaveBeenCalledWith("Projects");
  });

  it("updates header position when scrolling past 50px", () => {
    render(<Header />);

    const header = screen.getByRole("banner");

    Object.defineProperty(window, "scrollY", {
      writable: true,
      configurable: true,
      value: 100,
    });

    fireEvent.scroll(window);

    expect(
      header.props?.animate?.top ?? header.getAttribute("animate"),
    ).toBeDefined();
  });
});
