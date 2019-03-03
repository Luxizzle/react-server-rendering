import React from 'react';
import './Container.css';

function Container({ children, ...props }) {
  return (
    <div className="Container" {...props}>
      {children}
    </div>
  );
}

export default Container;
