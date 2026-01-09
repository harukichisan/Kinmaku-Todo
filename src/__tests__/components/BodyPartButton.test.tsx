import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BodyPartButton from "@/components/BodyPartButton";

describe("BodyPartButton", () => {
  it("should render button with correct text", () => {
    render(
      <BodyPartButton
        bodyPartName="首"
        bodyPartId="neck"
        icon="CircleDot"
        description="First aid for neck pain"
      />
    );
    const button = screen.getByRole("link", { name: /首/i });
    expect(button).toBeInTheDocument();
  });

  it("should have correct href to advice page", () => {
    render(
      <BodyPartButton
        bodyPartName="肩"
        bodyPartId="shoulder"
        icon="Dumbbell"
        description="First aid for shoulder pain"
      />
    );
    const link = screen.getByRole("link", { name: /肩/i });
    expect(link).toHaveAttribute("href", "/advice/shoulder");
  });

  it("should be clickable", () => {
    render(
      <BodyPartButton
        bodyPartName="背中"
        bodyPartId="back"
        icon="Shirt"
        description="First aid for back pain"
      />
    );
    const button = screen.getByRole("link", { name: /背中/i });
    expect(button).toBeEnabled();
  });
});
