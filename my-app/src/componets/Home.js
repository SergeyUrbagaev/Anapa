import { useState } from "react"
import "../style/home.css"

export default function Home() {
	const [time, setTime] = useState(false)
	const newData = new Date()
	const data = newData.toLocaleTimeString()
	return (
		<div className="wraper">
			<h1 className="oneText">Сдача квартиры</h1>
			<h3 className="twoText">Отдохните в комфорте<br /> всего в 500 метрах от моря!</h3>
			<h3>{data}</h3>
		</div>
	)
}