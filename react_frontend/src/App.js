import React, { useState, useEffect } from "react";
import "./App.css";
import "./index.css";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Workspace from "./components/Workspace";
import AIChatModal from "./components/modals/AIChatModal";
import AssetModal from "./components/modals/AssetModal";
import MarketplaceModal from "./components/modals/MarketplaceModal";
import SettingsModal from "./components/modals/SettingsModal";
import DocumentationModal from "./components/modals/DocumentationModal";
import CollaborationBanner from "./components/CollaborationBanner";

// PUBLIC_INTERFACE
function App() {
  // Theme: dark by default
  const [theme, setTheme] = useState("dark");

  // Modal controls
  const [chatOpen, setChatOpen] = useState(false);
  const [assetOpen, setAssetOpen] = useState(false);
  const [marketOpen, setMarketOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [docsOpen, setDocsOpen] = useState(false);

  // Collaboration / Notification Banner
  const [collabBanner, setCollabBanner] = useState(false);

  // Main app routing state
  const [activeView, setActiveView] = useState("projects");

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Modal/context commands (could hook to keyboard shortcuts)
  const handleOpenChat = () => setChatOpen(true);
  const handleOpenAssets = () => setAssetOpen(true);
  const handleOpenMarketplace = () => setMarketOpen(true);
  const handleOpenSettings = () => setSettingsOpen(true);
  const handleOpenDocs = () => setDocsOpen(true);

  // Entry point to simulate live collaboration
  const handleStartCollab = () => setCollabBanner(true);

  return (
    <div className="App">
      <div className="dashboard-root">
        <Sidebar
          activeView={activeView}
          onNavigate={setActiveView}
          onOpenAssets={handleOpenAssets}
          onOpenMarketplace={handleOpenMarketplace}
          onOpenSettings={handleOpenSettings}
        />
        <div className="main-content-area">
          <Topbar
            theme={theme}
            setTheme={setTheme}
            onOpenChat={handleOpenChat}
            onOpenAssets={handleOpenAssets}
            onOpenMarketplace={handleOpenMarketplace}
            onOpenSettings={handleOpenSettings}
            onOpenDocs={handleOpenDocs}
            onStartCollab={handleStartCollab}
          />
          {collabBanner && (
            <CollaborationBanner onClose={() => setCollabBanner(false)} />
          )}
          <div className="main-workspace">
            <Workspace
              activeView={activeView}
              onOpenChat={handleOpenChat}
              onOpenAssets={handleOpenAssets}
              onOpenMarketplace={handleOpenMarketplace}
              onOpenDocs={handleOpenDocs}
            />
          </div>
        </div>
        {/* Modal portal zone */}
        <AIChatModal open={chatOpen} onClose={() => setChatOpen(false)} />
        <AssetModal open={assetOpen} onClose={() => setAssetOpen(false)} />
        <MarketplaceModal
          open={marketOpen}
          onClose={() => setMarketOpen(false)}
        />
        <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />
        <DocumentationModal open={docsOpen} onClose={() => setDocsOpen(false)} />
      </div>
    </div>
  );
}

export default App;
