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
					<h3 className="main-news">Скидки</h3>
					<p className="text-news">Планируйте свой отдых заранее и получите скидку 10%!</p>
					<button className="butt-learn">Узнать</button>
				</div>
				<div className="conteiner">
					<div className="conteiner-img" style={{ backgroundImage: backgroundImage2 }} alt={"2"}> </div>
					<h3 className="main-news">Новости Анапы</h3>
					<p className="text-news">Что случилось в самом прекрасном Черноморском курорте</p>
					<a href="https://93.ru/text/tags/anapa/"><button className="butt-learn">Узнать</button></a>
				</div>
				<div className="conteiner">
					<div className="conteiner-img" style={{ backgroundImage: backgroundImage3 }}></div>
					<h3 className="main-news">Перспективы развития города-курорта Анапа</h3>
					<p className="text-news">Грандиозные планы на песчанную Анапу.</p>
					<a href="/prospects.html"><button className="butt-learn">Узнать</button></a>
				</div>
				<div className="conteiner">
					<div className="conteiner-img" style={{ backgroundImage: backgroundImage4 }}></div>
					<h3 className="main-news">Что находится рядом с квартирой</h3>
					<p className="text-news">Полезные локации вблизи апартаментов</p>
					<button className="butt-learn">Узнать</button>
				</div>
			</div>
		</div >

	)
}