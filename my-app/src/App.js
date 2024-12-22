import Navbar from "./componets/Navbar";
import "./index.css";
import Home from "./componets/Home";
import Sales from "./componets/Sales";
export default function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<Sales />
		</div>
	);
}