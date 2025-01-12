import Navbar from "./componets/Navbar";
import "./index.css";
import Home from "./componets/Home";
import Sales from "./componets/Sales";
import Gallery from "./componets/Gallery";

export default function App() {
	const arrGalerey = [
		require('./img/img-galerey/1.jpg'),
		require('./img/img-galerey/2.jpg'),
		require('./img/img-galerey/3.jpg'),
		require('./img/img-galerey/4.jpg'),
		require('./img/img-galerey/5.jpg'),
		require('./img/img-galerey/6.jpg'),
		require('./img/img-galerey/7.jpg'),
		require('./img/img-galerey/8.jpg'),
		require('./img/img-galerey/9.jpg'),
		require('./img/img-galerey/10.jpg'),
		require('./img/img-galerey/11.jpg'),
		require('./img/img-galerey/12.jpg'),
		require('./img/img-galerey/13.jpg'),
		require('./img/img-galerey/14.jpg'),
		require('./img/img-galerey/15.jpg'),
		require('./img/img-galerey/16.jpg'),

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