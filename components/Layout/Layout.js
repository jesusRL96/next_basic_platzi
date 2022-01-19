import React from 'react';
import Navbar from '@components/Navbar/Navbar'

const Layout = ({children }) => {
  return (
    <div>
        <Navbar />
        {children}
        -Footer
    </div>
  );
};

export default Layout;
