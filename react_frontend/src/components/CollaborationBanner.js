import React from "react";
import "./CollaborationBanner.css";

// PUBLIC_INTERFACE
/** Live Collaboration Banner - shows when collaboration is started. */
export default function CollaborationBanner({ onClose }) {
  return (
    <div className="collab-banner">
      <span>
        <b>Live Collaboration Active!</b> You are now editing with other users.
      </span>
      <button className="collab-close" onClick={onClose}>
        ✖
      </button>
    </div>
  );
}
