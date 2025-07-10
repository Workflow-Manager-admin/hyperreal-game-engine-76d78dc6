import React from "react";
import "./ModalBase.css";

// PUBLIC_INTERFACE
export default function DocumentationModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-window">
        <header className="modal-header">
          <span role="img" aria-label="Help">❓</span> Documentation & Help
          <button className="close-btn" onClick={onClose}>✖</button>
        </header>
        <div className="modal-body">
          <b>Documentation Center</b>
          <p>
            Read user docs, engine API reference, workflow guides, and troubleshooting articles here.<br />
            <span style={{ opacity: 0.7 }}>Docs integration coming soon.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
