import '../style/advantages.css';

export default function Advantages() {
	return (
		<div className="advantages-container">
			<div className="hero-section">
				<div className="white-box">
					<h2>Не упустите свой шанс!</h2>
					<button className="book-button">Забронировать</button>
				</div>
			</div>

			<div className="benefits-section">
				<div className="benefit-item">
					<h3><span>800</span> <br />метров до моря</h3>
				</div>
				<div className="benefit-item">
					<h3><span>24/7</span><br /> поддержка</h3>
				</div>
				<div className="benefit-item">
					<h3><span>100%</span><br /> удовлетворенность отдыхающих</h3>
				</div>
			</div>
		</div>
	);
}