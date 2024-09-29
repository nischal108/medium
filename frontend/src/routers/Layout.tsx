// Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../components/AppBar';  // Import your AppBar component

const Layout: React.FC = () => {
  return (
    <div>
      <AppBar />  {/* AppBar will be shown on all pages */}
      <div className="content">
        <Outlet />  {/* Nested routes will be rendered here */}
      </div>
    </div>
  );
};

export default Layout;
