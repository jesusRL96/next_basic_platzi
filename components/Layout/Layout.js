import React from 'react';
import Navbar from '@components/Navbar/Navbar'
import styles from './layout.module.css'


const Layout = ({children }) => {
  return (
    <div className='container'>                     {/* Module Global */}
        <div className="container-navbar">          {/* Module Global */}
            <Navbar />
        </div>
        {children}
        <div className={styles.containerFooter}>    {/* Module Global */}
            -Footer
        </div>
        <style jsx>{`
            .container-navbar {
                background-color: red;
            }
        `}</style>
    </div>
  );
};

export default Layout;
