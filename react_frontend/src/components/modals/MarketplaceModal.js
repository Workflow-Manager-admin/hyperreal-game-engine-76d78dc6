import React from "react";
import "./ModalBase.css";

// PUBLIC_INTERFACE
export default function MarketplaceModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-window">
        <header className="modal-header">
          <span role="img" aria-label="Marketplace">🛒</span> Plugin Marketplace
          <button className="close-btn" onClick={onClose}>✖</button>
        </header>
        <div className="modal-body">
          <p>
            <b>Plugin Marketplace (Coming soon 🛒)</b> <br />
            Browse, search, preview, and install AI-generated or user-generated plugins to extend your editor.
          </p>
          <div className="marketplace-search">
            <input disabled placeholder="Search plugins (soon)" />
          </div>
        </div>
      </div>
    </div>
  );
}
