import "../style/sales.css"

export default function Sales() {
	return (
		<div className="wraper-sales">
			<h1 className="last-news">Последние новости</h1>
			<div className="block-news">
				<div className="conteiner">
					<div className="conteiner-img" style={{ backgroundImage: "url('../img/sales2.jpeg')" }}></div>
					<h1 className="main-news">Скидки на</h1>
					<p>Планируйте свой отдых заранее и получите скидку 20%!</p>
					<button>Узнать</button>
				</div>
				<div className="conteiner">
					<div className="conteiner-img"></div>
					<h1 className="main-news">Летние предложения для вас!</h1>
					<p>Не упустите шанс отдохнуть на море по суперценам!</p>
					<button>Узнать</button>
				</div>
				<div className="conteiner">
					<div className="conteiner-img"></div>
					<h1 className="main-news">Специальные предложения для семей!</h1>
					<p>Семейные пакеты с дополнительными бонусами для детей!</p>
					<button>Узнать</button>
				</div>
				<div className="conteiner">
					<div className="conteiner-img"></div>
					<h1 className="main-news">Новые удобства в квартире!</h1>
					<p>Теперь у нас есть бассейн и зона для барбекю!</p>
					<button>Узнать</button>
				</div>
			</div>
		</div >
	)
}