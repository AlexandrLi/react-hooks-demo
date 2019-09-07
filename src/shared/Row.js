import React from 'react';

export default function({label, children}) {
  return (
    <div className="row">
      {label && <div>{label}</div>}
      <div>{children}</div>
    </div>
  );
}
