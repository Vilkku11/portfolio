import { describe, it, expect, afterEach } from "vitest";
import { render } from "@testing-library/react";
import BadgeGallery from "./BadgeGallery";
import { badges } from "../../Data";

describe("BadgeGallery component", () => {

  it("renders one badge placeholder per badge entry", () => {
    const { container } = render(<BadgeGallery />);
    const placeholders = container.querySelectorAll(
      "[data-share-badge-id]",
    );
    expect(placeholders).toHaveLength(badges.length);
  });

  it("sets the correct data attrivutes for each badge", () => {
    const { container } = render(<BadgeGallery />);
    badges.forEach((badge) => {
      const el = container.querySelector(
        `[data-share-badge-id="${badge.id}"`
      );
      expect(el).toBeInTheDocument();
      expect(el).toHaveAttribute("data-share-badge-host", "https://www.credly.com");
    });
  });

  it("injects the Credly embed script on mount", () => {
    render(<BadgeGallery />);
    const script = document.querySelector("script[src*='credly']");
    expect(script).toBeInTheDocument();
    expect(script).toHaveAttribute(
      "src",
      "https://cdn.credly.com/assets/utilities/embed.js",
    );
  });

  it("removes the script on unmount", () => {
    const { unmount } = render(<BadgeGallery />);
    unmount();
    expect(document.querySelector("script[src*='credly']")).not.toBeInTheDocument();
  });
});
