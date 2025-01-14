import React, { useState } from 'react'

import "../style/gallery.css";



const Gallery = ({ photos }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isFullScreen, setIsFullScreen] = useState(false);
	const goToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
	}
	const goToPrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
	};
	const toggleFullScreen = (e) => {
		e.stopPropagation();
		setIsFullScreen(!isFullScreen);
	}
	return (
		<div className='wrap-home'>
			<h1 style={{ textAlign: 'center', marginTop: '20px' }} className='title-home'>Галлерея квартиры</h1>
			<div className='gallery'>

				<button
					onClick={goToPrev}
					className='but-prev'
				>{"Предыдущая"}</button>
				<div className='photoCont'>
					<img
						src={photos[currentIndex]}
						className='photo'
						alt={`home ${currentIndex}`}
						onClick={toggleFullScreen}
					/>
				</div>
				<button
					onClick={goToNext}
					className='but-prev'
				>{"Следующая"}</button>
				{isFullScreen && (
					<div className="fullscreen-overlay" onClick={toggleFullScreen}>
						<div className="fullscreen-container">
							<img
								src={photos[currentIndex]}
								alt={`home ${currentIndex}`}
								className="fullscreen-image"
							/>
							<button
								className="close-button"
								onClick={toggleFullScreen}
							>
								✕
							</button>
						</div>
					</div>
				)}

			</div>
		</div>)
};

export default Gallery;