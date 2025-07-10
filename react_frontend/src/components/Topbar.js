import React from "react";
import "./Topbar.css";

// PUBLIC_INTERFACE
export default function Topbar({
  theme,
  setTheme,
  onOpenChat,
  onOpenAssets,
  onOpenMarketplace,
  onOpenSettings,
  onOpenDocs,
  onStartCollab,
}) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="tb-btn" title="Chatbot" onClick={onOpenChat}>
          🤖 AI
        </button>
        <button className="tb-btn" title="Assets" onClick={onOpenAssets}>
          🖼️
        </button>
        <button className="tb-btn" title="Marketplace" onClick={onOpenMarketplace}>
          🛒
        </button>
        <button className="tb-btn" title="Docs" onClick={onOpenDocs}>
          ❓
        </button>
      </div>
      <div className="topbar-center">
        <button className="tb-btn" title="Live Collaboration" onClick={onStartCollab}>
          <span role="img" aria-label="Live Collaboration">
            🟢
          </span>{" "}
          Collaborate
        </button>
      </div>
      <div className="topbar-right">
        <button
          className="tb-btn"
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
        </button>
        <button className="tb-btn" title="Settings" onClick={onOpenSettings}>
          ⚙️
        </button>
        <div className="user-profile">
          <img
            src="https://api.dicebear.com/7.x/pixel-art/svg?seed=ReactUser"
            alt="User"
            className="user-avatar"
          />
        </div>
      </div>
    </header>
  );
}
