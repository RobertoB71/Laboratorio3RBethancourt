import React from 'react';
import Header from './components/Header';
import ImageBanner from './components/ImageBanner';
import Catalog from './components/Catalog';
import Footer from './components/Footer';

function App() {
    return (
        <div style={styles.container}>
            <Header />
            <ImageBanner />
            <main style={styles.main}>
                <Catalog />
            </main>
            <Footer />
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        flex: '1',
        padding: '20px',
    }
};

export default App;
