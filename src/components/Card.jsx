import React from "react";

export default function Card({ title, icon: Icon, children, right }) {
  return (
    <div className="content-card">
      <div className="card-header">
        <div className="card-title-wrap">
          {Icon && (
            <div className="card-icon">
              <Icon size={18} />
            </div>
          )}
          <h3>{title}</h3>
        </div>
        {right && <div>{right}</div>}
      </div>

      {children}
    </div>
  );
}