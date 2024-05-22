// src/components/Navigation.jsx
import React from 'react';

function Navigation() {
    return (
        <nav style={styles.nav}>
            <ul style={styles.ul}>
                <li style={styles.li}><a href="/" style={styles.a}>Inicio</a></li>
                <li style={styles.li}><a href="/catalog" style={styles.a}>Catálogo</a></li>
                <li style={styles.li}><a href="./about" style={styles.a}>Acerca de</a></li>
                <li style={styles.li}><a href="/contact" style={styles.a}>Contacto</a></li>
            </ul>
        </nav>
    );
}

const styles = {
    nav: {
        flex: '2',
        textAlign: 'center',
    },
    ul: {
        listStyleType: 'none',
        padding: '0',
        margin: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    li: {
        marginLeft: '20px',
        marginRight: '20px',
    },
    a: {
        textDecoration: 'none',
        color: '#000',
        fontSize: '16px',
        fontWeight: 'bold',
    },
};

export default Navigation;
