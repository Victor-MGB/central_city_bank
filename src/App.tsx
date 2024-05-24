import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Services from "./components/Service";
import Investments from "./components/Investment";
import TravelInfoComponent from "./components/ExchangeIntro";
import Security from "./components/Security";
import Footer from "./components/Footer";
import About from "./components/About";
import INDEX from "./components/INDEX";
import ContactCenter from "./components/Contact";
import CurrencyRates from "./components/CurrencyRate";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<INDEX />} />
				<Route path='/services' element={<Services />} />
				<Route path='/investments' element={<Investments />} />
				<Route path='/travel-info' element={<TravelInfoComponent />} />
				<Route path='/security' element={<Security />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<ContactCenter />} />
				<Route path='/rates' element={<CurrencyRates />} />
				<Route path='/converter' element={<CurrencyConverter />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
