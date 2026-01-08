import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ImageView from "./ImageView";
import { useImageOpenStore } from "../../store/store";

describe("ImageView", () => {
  beforeEach(() => {
    useImageOpenStore.setState(useImageOpenStore.getInitialState(), true);

    document.body.style.overflow = "";
  });

  it("does not render when isOpen is false", () => {
    render(<ImageView />);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("renders image when open", () => {
    useImageOpenStore.setState(
      {
        ...useImageOpenStore.getInitialState(),
        isOpen: true,
        image: "/test-image.jpg",
      },
      true
    );

    render(<ImageView />);

    expect(screen.getByRole("presentation")).toBeInTheDocument();
  });

  it("disables body scrolling when open", () => {
    useImageOpenStore.setState(
      {
        ...useImageOpenStore.getInitialState(),
        isOpen: true,
        image: "/test-image.jpg",
      },
      true
    );

    render(<ImageView />);

    expect(document.body.style.overflow).toBe("hidden");
  });

  it("closes when overlay is clicked", () => {
    useImageOpenStore.setState(
      {
        ...useImageOpenStore.getInitialState(),
        isOpen: true,
        image: "/test-image.jpg",
      },
      true
    );

    render(<ImageView />);

    const overlay = document.querySelector(".image-view-overlay")!;

    fireEvent.click(overlay);

    fireEvent.animationEnd(overlay);

    expect(useImageOpenStore.getState().isOpen).toBe(false);
  });

  it("closes when close button is clicked", () => {
    useImageOpenStore.setState(
      {
        ...useImageOpenStore.getInitialState(),
        isOpen: true,
        image: "/test-image.jpg",
      },
      true
    );

    render(<ImageView />);

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    const overlay = document.querySelector(".image-view-overlay")!;
    fireEvent.animationEnd(overlay);

    expect(useImageOpenStore.getState().isOpen).toBe(false);
  });

  it("closes on Escape key press", () => {
    useImageOpenStore.setState(
      {
        ...useImageOpenStore.getInitialState(),
        isOpen: true,
        image: "/test-image.jpg",
      },
      true
    );

    render(<ImageView />);

    fireEvent.keyDown(window, { key: "Escape" });

    const overlay = document.querySelector(".image-view-overlay")!;
    fireEvent.animationEnd(overlay);

    expect(useImageOpenStore.getState().isOpen).toBe(false);
  });

  it("restores body scrolling when closed", () => {
    useImageOpenStore.setState(
      {
        ...useImageOpenStore.getInitialState(),
        isOpen: true,
        image: "/test-image.jpg",
      },
      true
    );

    const { unmount } = render(<ImageView />);

    unmount();

    expect(document.body.style.overflow).toBe("");
  });
});
