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
        theme: "Black",
      },
      true,
    );
  });

  it("renders theme toggle button", () => {
    render(<ThemeSwitcher />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("opens theme menu when clicked", () => {
    render(<ThemeSwitcher />);

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByText("Black")).toBeInTheDocument();
  });

  it("changes theme when option is clicked", () => {
    render(<ThemeSwitcher />);

    fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByText("Gray"));

    expect(useThemeStore.getState().theme).toBe("Gray");
    expect(document.documentElement.getAttribute("data-theme")).toBe("Gray");
  });

  it("closes menu when clicking outside", async () => {
    render(<ThemeSwitcher />);

    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Black")).toBeInTheDocument();

    fireEvent.mouseDown(document.body);

    await waitFor(() => {
      expect(screen.queryByText("Black")).not.toBeInTheDocument();
    });
  });
});
