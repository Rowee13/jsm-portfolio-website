import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<Testimonials />
			<Footer />
		</div>
	);
}

export default App;
