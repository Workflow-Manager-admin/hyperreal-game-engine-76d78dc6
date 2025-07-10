import React from "react";

/** PUBLIC_INTERFACE: Asset Manager UI placeholder */
export default function AssetManager() {
  return (
    <div className="asset-manager" style={{ padding: "2em" }}>
      <h2>🖼️ Asset Manager</h2>
      <p>
        <b>Manage your 3D assets, textures, models, and prefabs.</b> <br />
        Asset CRUD operations and asset preview will go here.<br />
        <span style={{ opacity: 0.7 }}>
          Integration with backend and import/export pipeline pending.
        </span>
      </p>
    </div>
  );
}
