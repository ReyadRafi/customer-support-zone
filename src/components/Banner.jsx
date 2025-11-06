import React from "react";

export default function Banner({ inProgressCount, resolvedCount }) {
  return (
    <header className="banner container">
      <div className="banner-grid">
        <div className="card banner-card purple">
          <div className="banner-title">In-Progress</div>
          <div className="banner-count">{inProgressCount}</div>
        </div>
        <div className="card banner-card green">
          <div className="banner-title">Resolved</div>
          <div className="banner-count">{resolvedCount}</div>
        </div>
      </div>
    </header>
  );
}
