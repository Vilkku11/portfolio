import { describe, it, expect, beforeEach, vi } from "vitest";
import { render } from "@testing-library/react";
import SectionObserver from "./SectionObserver";
import { useActiveSectionStore } from "../../store/store";

let mockInView = false;

vi.mock("react-intersection-observer", () => ({
  useInView: () => ({
    ref: vi.fn(),
    inView: mockInView,
  }),
}));

describe("SectionObserver", () => {
  beforeEach(() => {
    useActiveSectionStore.setState(
      useActiveSectionStore.getInitialState(),
      true
    );
  });

  it("sets active section when section is in view", () => {
    mockInView = true;

    render(<SectionObserver sectionName="About" />);

    expect(useActiveSectionStore.getState().activeSection).toBe("About");
  });

  it("does not set active section when not in view", () => {
    mockInView = false;

    render(<SectionObserver sectionName="Projects" />);

    expect(useActiveSectionStore.getState().activeSection).not.toBe("Projects");
  });
});
