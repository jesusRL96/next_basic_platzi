import React from 'react';
import Navbar from '@components/Navbar/Navbar'
import styles from './layout.module.css'
import { Container } from '@chakra-ui/react'

const Layout = ({children }) => {
  return (
    <Container maxW='container.xl'>
        <div>
            <Navbar />
        </div>
        {children}
        <div>
            -Footer
        </div>
        <style jsx>{`
            .container-navbar {
                background-color: red;
            }
        `}</style>
    </Container>
  );
};

export default Layout;
