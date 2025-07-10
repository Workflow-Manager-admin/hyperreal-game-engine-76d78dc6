import React from "react";
import "./ModalBase.css";

// PUBLIC_INTERFACE
export default function AssetModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-window">
        <header className="modal-header">
          <span role="img" aria-label="Assets">🖼️</span> Asset Import / Export
          <button className="close-btn" onClick={onClose}>✖</button>
        </header>
        <div className="modal-body">
          <p>
            <b>Asset Management (Import/Export)</b> <br />
            Upload, download, export, or organize your models, textures, audio, and full projects here.
          </p>
          <div className="asset-import-export-controls">
            <button disabled>Import (soon)</button>
            <button disabled>Export (soon)</button>
          </div>
        </div>
      </div>
    </div>
  );
}
