import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render } from "@testing-library/react";
import RainEffect from "./RainEffect";

describe("RainEffect", () => {
  beforeEach(() => {
    vi.spyOn(Math, "random").mockReturnValue(0.5);

    Object.defineProperty(HTMLElement.prototype, "clientHeight", {
      configurable: true,
      value: 500,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the rain container", () => {
    render(<RainEffect />);

    const container = document.querySelector(".rain-container");

    expect(container).toBeInTheDocument();
  });

  it("renders 100 raindrops", () => {
    render(<RainEffect />);

    const drops = document.querySelectorAll(".rain");

    expect(drops).toHaveLength(100);
  });

  it("applied container height CSS variable", () => {
    render(<RainEffect />);

    const container = document.querySelector(".rain-container") as HTMLElement;

    expect(container.style.getPropertyValue("--container-height")).toBe(
      "500px"
    );
  });

  it("each raindrop has required inline styles", () => {
    render(<RainEffect />);

    const drop = document.querySelector(".rain") as HTMLElement;

    expect(drop.style.left).toBeTruthy();
    expect(drop.style.top).toBeTruthy();
    expect(drop.style.animationDelay).toBeTruthy();
  });

  it("renders filter layer", () => {
    render(<RainEffect />);

    const filterLayer = document.querySelector(".filter-layer");

    expect(filterLayer).toBeInTheDocument();
  });
});
