import Navbar from "./componets/Navbar";
import "./index.css";
import Home from "./componets/Home";
import Sales from "./componets/Sales";
import Gallery from "./componets/Gallery";

export default function App() {
	const arrGalerey = [
		'../img/sea.jpg',
		'../img/sales2.jpeg',
		'../img/sales3.jpg',
		'../img/sales4.jpeg',
	]
	return (
		<div>
			<Navbar />
			<Home />
			<Sales />
			<Gallery photos={arrGalerey} />

		</div>
	);
}