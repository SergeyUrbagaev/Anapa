import Navbar from "./componets/Navbar";
import "./index.css";
import Home from "./componets/Home";
import Sales from "./componets/Sales";
import Gallery from "./componets/Gallery";
import SeaJpeg from "./img/Sea.jpg"

export default function App() {
	const arrGalerey = [
		require('./img/sales1.jpeg'),
		require('./img/sales2.jpeg'),
		require('./img/sales3.jpg'),
		require('./img/sales4.jpeg'),
	]
	return (
		<div>
			<Navbar />
			<Home />
			<Sales />
			<Gallery photos={arrGalerey} />
			<img src={SeaJpeg} alt="2" />
		</div>
	);
}