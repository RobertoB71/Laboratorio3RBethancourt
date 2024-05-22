// src/components/Header.jsx
import React from 'react';
import Navigation from './Navigation';

function Header() {
    return (
        <header style={styles.header}>
            <div style={styles.logoContainer}>
                <img src='../src/images/logowandis.png' alt="Logo" style={styles.logo} />
            </div>
            <Navigation />
        </header>
    );
}

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#F8F8F8',
    },
    logoContainer: {
        flex: '1',
    },
    logo: {
        height: '90px',
    },
};

export default Header;
