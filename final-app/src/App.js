import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Weather from './Weather';
import CurrencyExchange from './currencyExchange';
import Attractions from './Attractions';
import Portfolio from './Portfolio';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/currency-exchange" element={<CurrencyExchange />} />
                    <Route path="/Attractions" element={<Attractions />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
