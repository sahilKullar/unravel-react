import React from 'react';
import { Outlet } from 'react-router-dom';

export default function PageLayout() {
  return (
    <div className="layout">
      <Outlet />
    </div>
  );
}
