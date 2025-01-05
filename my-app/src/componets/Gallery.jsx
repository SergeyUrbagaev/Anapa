import React, { useState } from 'react'
import "../style/gallery.css";

const images = [
    { id: 1, src: '../img/sea.jpg', alt: 'sales1' },
    { id: 2, src: '../img/sales2.jpeg', alt: 'sales2' },
    { id: 3, src: '../img/sales3.jpg', alt: 'sales3' },
    { id: 4, src: '../img/sales4.jpeg', alt: 'sales4' },
]
console.log(images[0]);

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery">
            {images.map((image) => (
                <img
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    className="gallery-image"
                    onClick={() => openModal(image.src)}
                />
            ))}

            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <img src={selectedImage} alt="Selected" className="modal-image" />
                </div>
            )}
        </div>
    );
};

export default Gallery;