import React from "react";
import "./ModalBase.css";

// PUBLIC_INTERFACE
export default function SettingsModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-window">
        <header className="modal-header">
          <span role="img" aria-label="Settings">⚙️</span> Settings
          <button className="close-btn" onClick={onClose}>✖</button>
        </header>
        <div className="modal-body">
          <b>Settings Panel</b>
          <p>
            Project/engine graphics settings (Nanite, Lumen, VFX, shadows, etc) will appear here.<br /><br />
            <span style={{ opacity: 0.7 }}>This is a placeholder.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
