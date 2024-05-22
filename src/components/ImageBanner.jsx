import React from 'react';

function ImageBanner() {
    return (
        <div style={styles.imageContainer}>
            <img src="../src/images/banner.png" alt="Promotional Banner" style={styles.image} />
        </div>
    );
}

const styles = {
    imageContainer: {
        width: '100%',
        textAlign: 'center',
        marginBottom: '20px',
    },
    image: {
        width: '100%',
    }
};

export default ImageBanner;