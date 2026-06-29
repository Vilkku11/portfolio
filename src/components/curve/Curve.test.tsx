import { beforeEach, describe, it, vi, expect } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import Curve from "./Curve";

describe("Curve", () => {
  beforeEach(() => {
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((cb) => {
      return window.setTimeout(cb, 0);
    });

    vi.spyOn(window, "cancelAnimationFrame").mockImplementation((id) => {
      clearTimeout(id);
    });
  });

  it("renders svg path", () => {
    const { container } = render(<Curve />);

    const path = container.querySelector("path");
    expect(path).toBeInTheDocument();
  });

  it("handles mouse interactions without crashing", () => {
    const { container } = render(<Curve />);
    const box = container.querySelector(".box") as HTMLElement;

    expect(() => {
      fireEvent.mouseEnter(box);
      fireEvent.mouseMove(box, {
        movementY: 10,
        clientX: 50,
      });
      fireEvent.mouseLeave(box);
    }).not.toThrow();
  });
});
