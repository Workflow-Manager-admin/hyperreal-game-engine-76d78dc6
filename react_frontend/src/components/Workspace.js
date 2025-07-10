import React from "react";
import "./Workspace.css";
import ProjectDashboard from "./workspace/ProjectDashboard";
import NodeEditor from "./workspace/NodeEditor";
import Viewport3D from "./workspace/Viewport3D";
import AssetManager from "./workspace/AssetManager";
import MarketplaceBrowser from "./workspace/MarketplaceBrowser";
import SettingsPanel from "./workspace/SettingsPanel";

// PUBLIC_INTERFACE
export default function Workspace({
  activeView,
  onOpenChat,
  onOpenAssets,
  onOpenMarketplace,
  onOpenDocs,
}) {
  if (activeView === "projects")
    return (
      <ProjectDashboard
        onOpenProjectNodeEditor={() => {}} // placeholder
        onOpenAssets={onOpenAssets}
      />
    );
  if (activeView === "assets") return <AssetManager />;
  if (activeView === "marketplace") return <MarketplaceBrowser />;
  if (activeView === "settings") return <SettingsPanel />;
  // Fallback is the split code/node-3D view
  return (
    <div className="split-workspace">
      <div className="workspace-pane node-pane">
        <NodeEditor onOpenChat={onOpenChat} />
      </div>
      <div className="workspace-pane viewport-pane">
        <Viewport3D onOpenDocs={onOpenDocs} />
      </div>
    </div>
  );
}
