import React, { useState } from 'react'
import '../style/style-navbar.css'
import SeaJpeg from "../img/Sea.jpg"


export default function Navbar() {
	const [isMenyOpen, setMenyOpen] = useState(false);

	const toogleMenu = () => {
		setMenyOpen(!isMenyOpen)
	}


	return (
		<div className="navbar">

			<div className='logo'>
				<img src={SeaJpeg} alt='123' />
				<div className='anapa'><a href='https://habr.com/ru'>Анапа</a></div>
			</div>
			<ul className={`nav-links ${isMenyOpen ? 'active' : ''}`}>

				<ul className='navbar-center-nav' >
					<li><a href='https://habr.com/ru'>Квартира</a></li>
					<li><a href='https://habr.com/ru'>Услуги</a></li>
					<li><a href='https://habr.com/ru'>Контакты</a></li>
				</ul>

			</ul>
			<div className='booking'><a href='https://habr.com/ru'>Забронировать сейчас</a></div>
			<div className='menu-toggle' onClick={toogleMenu}>
				<span className='bar'></span>
				<span className='bar'></span>
				<span className='bar'></span>



			</div>
		</div>
	)
}

