import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import BadgeConsent from "./BadgeConsent";

describe("BadgeConsent component", () => {
  it("renders the consent text", () => {
    render(<BadgeConsent onAccept={() => { }} />);
    expect(screen.getByText(/verified through credly/i)).toBeInTheDocument();
  })

  it("renders a link to the Credly profile", () => {
    render(<BadgeConsent onAccept={() => { }} />);
    const link = screen.getByRole("link", { name: /view credly profile/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("calls onAccept when the load badges button is clciked", async () => {
    const onAccept = vi.fn();
    render(<BadgeConsent onAccept={onAccept} />);
    fireEvent.click(screen.getByRole("button", { name: /load badges/i }));
    expect(onAccept).toHaveBeenCalledOnce();
  })
})
