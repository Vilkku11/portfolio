import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useThemeStore } from "../../store/store";

vi.mock("../../../../test/__mocks__framer-motion");

describe("ThemeSwitcher", () => {
  beforeEach(() => {
    useThemeStore.setState(
      {
        ...useThemeStore.getInitialState(),
        theme: "black",
      },
      true
    );
  });

  it("renders theme toggle button", () => {
    render(<ThemeSwitcher />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("opens theme menu when clicked", () => {
    render(<ThemeSwitcher />);

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByText(/black/i)).toBeInTheDocument();
  });

  it("changes theme when option is clicked", () => {
    render(<ThemeSwitcher />);

    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("gray"));

    expect(useThemeStore.getState().theme).toBe("gray");
    expect(document.documentElement.getAttribute("data-theme")).toBe("gray");
  });

  it("closes menu when clicking outside", async () => {
    render(<ThemeSwitcher />);

    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("black")).toBeInTheDocument();

    fireEvent.mouseDown(document.body);

    await waitFor(() => {
      expect(screen.queryByText("black")).not.toBeInTheDocument();
    });
  });
});
