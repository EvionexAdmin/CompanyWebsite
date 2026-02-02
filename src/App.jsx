import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import RetroGrid from './components/RetroGrid';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Products from './pages/Products';
import Team from './pages/Team';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <HashRouter>
            <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

                <div className="fixed inset-0 z-0">
                    <RetroGrid />
                </div>

                <main className="relative z-10 min-h-screen">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/who-we-are" element={<WhoWeAre />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </HashRouter>
    );
}

export default App;
