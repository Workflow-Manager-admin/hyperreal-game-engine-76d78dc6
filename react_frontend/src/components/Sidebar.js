import React from "react";
import "./Sidebar.css";

// PUBLIC_INTERFACE
export default function Sidebar({
  activeView,
  onNavigate,
  onOpenAssets,
  onOpenMarketplace,
  onOpenSettings,
}) {
  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-lg">HyperReal</span>
        <span className="logo-sm">HR</span>
      </div>
      <ul className="sidebar-menu">
        <li
          className={activeView === "projects" ? "active" : ""}
          title="Projects"
          onClick={() => onNavigate("projects")}
        >
          <span role="img" aria-label="Projects">
            🗂
          </span>{" "}
          Projects
        </li>
        <li
          className={activeView === "marketplace" ? "active" : ""}
          title="Marketplace"
          onClick={onOpenMarketplace}
        >
          <span role="img" aria-label="Marketplace">
            🛒
          </span>{" "}
          Marketplace
        </li>
        <li
          className={activeView === "assets" ? "active" : ""}
          title="Assets"
          onClick={onOpenAssets}
        >
          <span role="img" aria-label="Assets">
            🖼️
          </span>{" "}
          Assets
        </li>
        <li
          className={activeView === "settings" ? "active" : ""}
          title="Settings"
          onClick={onOpenSettings}
        >
          <span role="img" aria-label="Settings">
            ⚙️
          </span>{" "}
          Settings
        </li>
      </ul>
      <footer className="sidebar-footer">
        <a
          href="#help"
          className="sidebar-footer-link"
          title="Help & Docs"
          onClick={e => {
            e.preventDefault();
            if (window.onOpenDocs) window.onOpenDocs();
          }}
        >
          <span role="img" aria-label="Help">
            ❓
          </span>
        </a>
      </footer>
    </nav>
  );
}
