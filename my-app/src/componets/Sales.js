import "../style/sales.css"

export default function Sales() {
	return (
		<div className="wraper-sales">
			<h1 className="last-news">Последние новости</h1>
			<div className="block-news">
				<div className="conteiner">
					<div className="conteiner-img"></div>
					<div className="text-news">Скидки на</div>
					<button>Узнать</button>
				</div>
				<div className="conteiner">
					<div className="conteiner-img"></div>
					<div className="text-news">Летние предложения для вас!</div>
					<button>Узнать</button>
				</div>
				<div className="conteiner">
					<div className="conteiner-img"></div>
					<div className="text-news">Специальные предложения для семей!</div>
					<button>Узнать</button>
				</div>
				<div className="conteiner">
					<div className="conteiner-img"></div>
					<div className="text-news">Новые удобства в квартире!</div>
					<button>Узнать</button>
				</div>
			</div>
		</div>
	)
}