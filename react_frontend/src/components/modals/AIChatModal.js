import React from "react";
import "./ModalBase.css";

// PUBLIC_INTERFACE
export default function AIChatModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-window large">
        <header className="modal-header">
          <span role="img" aria-label="AI Assistant">🤖</span> AI Chat Assistant
          <button className="close-btn" onClick={onClose}>✖</button>
        </header>
        <div className="modal-body">
          <p>
            <strong>Coming soon:</strong> In-app AI chatbot for guidance, documentation answers,
            and code suggestions!
          </p>
          <div className="chat-placeholder">
            <span>🤖💬</span>
          </div>
        </div>
      </div>
    </div>
  );
}
