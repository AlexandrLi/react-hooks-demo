import React from 'react';

export function Row({label, children}) {
  return (
    <div className="row">
      {label && <div>{label}</div>}
      <div>{children}</div>
    </div>
  );
}
