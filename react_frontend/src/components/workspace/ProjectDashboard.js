import React from "react";

/** PUBLIC_INTERFACE: Dashboard showing projects and their actions */
export default function ProjectDashboard({ onOpenProjectNodeEditor, onOpenAssets }) {
  // Placeholder content – can later connect real project list/api
  return (
    <div className="project-dashboard" style={{ padding: "2em" }}>
      <h2>🗂 Projects</h2>
      <p>
        <b>Your Projects will appear here.</b><br />
        Create new projects, open existing, or manage collaboration settings.<br />
        <span style={{ opacity: 0.7 }}>CRUD actions will be integrated with backend API.</span>
      </p>
      <div style={{ marginTop: 26 }}>
        <button style={{ marginRight: 16 }}>New Project</button>
        <button onClick={onOpenAssets}>Import Assets</button>
      </div>
    </div>
  );
}
