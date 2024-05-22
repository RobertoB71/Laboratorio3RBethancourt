// src/components/Catalog.jsx
// src/components/Catalog.jsx
import React from 'react';

function Catalog() {
    const products = [
        { id: 1, name: 'ALIMENTO PERRO - FIT FORMULA', price: 89.00, image: '../src/images/perrofit.png', description: 'FIT Fórmula MR Cachorro, es un alimento completo', rating: 5, reviews: 121 },
        { id: 2, name: 'Comida natural para perros', price: 559.00, image: '../src/images/nutribest.png', description: 'Salmón y Arroz es un alimento Premium formulado por nuestros expertos en nutrición', rating: 5, reviews: 121 },
        { id: 3, name: 'CANi Comida Premium', price: 289.00, image: '../src/images/canipremium.png', description: 'Es un alimento Premium Super Completo, rico en Vitaminas, proteina animal y minerales', rating: 5, reviews: 121 },
        { id: 4, name: 'VIVEFOX Headphones', price: 39.00, image: '../src/images/formulanatural.png', description: 'Antioxidante Natural', rating: 5, reviews: 121 }
    ];

    return (
        <div style={styles.catalog}>
            <h2 style={styles.title}>Catálogo de Productos</h2>
            <div style={styles.productGrid}>
                {products.map(product => (
                    <div key={product.id} style={styles.card}>
                        <img src={product.image} alt={product.name} style={styles.image} />
                        <h3 style={styles.productName}>{product.name}</h3>
                        <p style={styles.description}>{product.description}</p>
                        <p style={styles.price}>${product.price.toFixed(2)}</p>
                        <div style={styles.rating}>
                            {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)} ({product.reviews})
                        </div>
                        <button style={styles.button}>COMPRAR</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    catalog: {
        padding: '20px',
    },
    title: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    productGrid: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        width: '200px',
        margin: '10px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
    },
    productName: {
        fontSize: '18px',
        margin: '10px 0',
    },
    description: {
        fontSize: '14px',
        color: '#555',
    },
    price: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
    rating: {
        margin: '10px 0',
        color: '#f5c518',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 15px',
        cursor: 'pointer',
    }
};

export default Catalog;
