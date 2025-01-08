import React, { useState } from 'react'

import "../style/gallery.css";



const Gallery = ({ photos }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const goToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
	}
	const goToPrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
	};
	return (
		<div className='gallery'>
			<button
				onClick={goToPrev}
				className='but-prev'
			>{"Предыдущая"}</button>
			<div className='photoCont'>
				<img
					src={photos[currentIndex]}
					className='photo'
					alt={`Photo ${currentIndex}`}
				/>
			</div>
			<button
				onClick={goToNext}
				className='but-prev'
			>{"Следующая"}</button>


		</div>)
};

export default Gallery;