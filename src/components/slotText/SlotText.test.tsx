import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, act } from "@testing-library/react";
import SlotText from "./SlotText";
import type { DynamicWords } from "../../Types";

vi.mock("../../../../test/__mocks__framer-motion");

const words: DynamicWords[] = [
  { word: "Hello", len: 5 },
  { word: "World", len: 5 },
  { word: "portfolio", len: 9 },
];

describe("SlotText", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the first word initially", () => {
    render(<SlotText words={words} />);

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("cycles to the next word after interval", async () => {
    render(<SlotText words={words} />);

    vi.advanceTimersByTime(2700);

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
