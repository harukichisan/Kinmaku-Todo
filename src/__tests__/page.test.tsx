import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "@/app/page";

describe("Home Page", () => {
  it("should render the header", () => {
    render(<Home />);
    const header = screen.getByRole("heading", { name: /筋膜リリースナビ/i });
    expect(header).toBeInTheDocument();
  });

  it("should render all body part buttons", () => {
    render(<Home />);
    const buttons = [
      screen.getByRole("link", { name: /首/i }),
      screen.getByRole("link", { name: /肩/i }),
      screen.getByRole("link", { name: /背中/i }),
      screen.getByRole("link", { name: /腰/i }),
      screen.getByRole("link", { name: /脚/i }),
    ];
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  it("should render diagnosis button", () => {
    render(<Home />);
    const diagnosisButton = screen.getByRole("button", {
      name: /診断スタート/i,
    });
    expect(diagnosisButton).toBeInTheDocument();
  });

  it("body part buttons should have correct links", () => {
    render(<Home />);
    const links = [
      { name: /首/i, href: "/advice/neck" },
      { name: /肩/i, href: "/advice/shoulder" },
      { name: /背中/i, href: "/advice/back" },
      { name: /腰/i, href: "/advice/waist" },
      { name: /脚/i, href: "/advice/leg" },
    ];
    links.forEach(({ name, href }) => {
      const link = screen.getByRole("link", { name });
      expect(link).toHaveAttribute("href", href);
    });
  });

  it("should render body part section with description", () => {
    render(<Home />);
    const sectionHeading = screen.getByRole("heading", {
      name: /部位を選択してください/i,
    });
    expect(sectionHeading).toBeInTheDocument();
  });

  it("diagnosis button should navigate to /diagnosis when clicked", async () => {
    const user = userEvent.setup();
    render(<Home />);
    const diagnosisLink = screen.getByRole("link", {
      name: /診断スタート/i,
    });
    
    // #region agent log
    fetch('http://127.0.0.1:7250/ingest/aa789ab6-4244-4171-a496-8d18f7c8753f',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'page.test.tsx:60',message:'Diagnosis link found, checking href',data:{href:diagnosisLink.getAttribute('href')},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A'})}).catch(()=>{});
    // #endregion
    
    // ボタンがナビゲートページへのリンクを含むか確認
    expect(diagnosisLink).toHaveAttribute("href", "/diagnosis");
  });
});
