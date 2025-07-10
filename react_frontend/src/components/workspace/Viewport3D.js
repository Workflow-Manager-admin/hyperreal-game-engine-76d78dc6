import React, { useRef, useEffect } from "react";

/** PUBLIC_INTERFACE: 3D WebGL viewport placeholder with future preview support */
export default function Viewport3D({ onOpenDocs }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Placeholder: setup WebGL context and basic clear
    const canvas = canvasRef.current;
    if (canvas) {
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (gl) {
        gl.clearColor(0.13, 0.15, 0.23, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
      }
    }
  }, []);
  return (
    <div
      className="viewport3d"
      style={{
        width: "100%",
        height: "100%",
        padding: 0,
        minHeight: 0,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "stretch",
        background: "transparent"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 21px 0 21px" }}>
        <h2 style={{ color: "#15B5F0", fontWeight: 500, fontSize: "1.1em", margin: 0 }}>
          3D Viewport
        </h2>
        <button onClick={onOpenDocs} style={{
          background: "rgba(22,28,34,0.5)",
          color: "#15B5F0",
          border: "none",
          borderRadius: "7px",
          padding: "6px 14px",
          cursor: "pointer"
        }}>
          <span role="img" aria-label="Docs">❓</span> Docs
        </button>
      </div>
      <canvas
        ref={canvasRef}
        width={800}
        height={420}
        style={{
          width: "100%",
          minHeight: "320px",
          background: "#181c22",
          borderRadius: "8px",
          margin: "18px auto 14px auto",
          boxShadow: "0 2px 26px 0 #15B5F013"
        }}
      />
      <div style={{ color: "#aaa", textAlign: "center", fontSize: "0.9em", marginBottom: "1.7em" }}>
        <span>
          <b>Preview coming soon!</b> <br />
          Support for digital humans, photorealistic scenes, VFX, etc.
        </span>
      </div>
    </div>
  );
}
