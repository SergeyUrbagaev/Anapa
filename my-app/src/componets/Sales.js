import "../style/sales.css"

export default function Sales() {
	const backgroundImage1 = `url(${require('../img/sales1.jpeg')})`
	const backgroundImage2 = `url(${require('../img/sales2.jpeg')})`
	const backgroundImage3 = `url(${require('../img/sales3.jpg')})`
	const backgroundImage4 = `url(${require('../img/sales4.jpeg')})`
	return (
		<div className="wraper-sales">
			<h1 className="last-news">Последние новости</h1>
			<div className="block-news">
				<div className="conteiner">
					<div className="conteiner-img" style={{ backgroundImage: backgroundImage1 }}></div>
					<h3 className="main-news">Скидки на</h3>
					<p className="text-news">Планируйте свой отдых заранее и получите скидку 20%!</p>
					<button className="butt-learn">Узнать</button>
				</div>
				<div className="conteiner">
					<div className="conteiner-img" style={{ backgroundImage: backgroundImage2 }} alt={"2"}> </div>
					<h3 className="main-news">Летние предложения для вас!</h3>
					<p className="text-news">Не упустите шанс отдохнуть на море по суперценам!</p>
					<button className="butt-learn">Узнать</button>
				</div>
				<div className="conteiner">
					<div className="conteiner-img" style={{ backgroundImage: backgroundImage3 }}></div>
					<h3 className="main-news">Специальные предложения для семей!</h3>
					<p className="text-news">Семейные пакеты с дополнительными бонусами для детей!</p>
					<button className="butt-learn">Узнать</button>
				</div>
				<div className="conteiner">
					<div className="conteiner-img" style={{ backgroundImage: backgroundImage4 }}></div>
					<h3 className="main-news">Новые удобства в квартире!</h3>
					<p className="text-news">Теперь у нас есть бассейн и зона для барбекю!</p>
					<button className="butt-learn">Узнать</button>
				</div>
			</div>
		</div >

	)
}