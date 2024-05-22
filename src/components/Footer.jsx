// src/components/Footer.jsx
import React from 'react';

function Footer() {
    return (
        <footer style={styles.footer}>
            <p>© {new Date().getFullYear()} WandisPets - Todos los derechos reservados 2024</p>
        </footer>
    );
}

const styles = {
    footer: {
        backgroundColor: '#FC6998',
        color: '#fff',
        textAlign: 'center',
        padding: '20px 0',
        bottom: '0',
        width: '100%',
        marginTop: 'auto',
    }
};

export default Footer;
