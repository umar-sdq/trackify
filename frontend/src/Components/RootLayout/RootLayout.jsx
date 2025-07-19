import React from 'react';
import Header from '../Header/Header.jsx';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>

    </div>
  );
};

export default RootLayout;
