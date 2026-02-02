import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Button from '../components/Button';

const Navbar = ({ darkMode, setDarkMode }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: '/', label: 'Home' },
        { id: '/who-we-are', label: 'Who We Are' },
        { id: '/products', label: 'Products' },
        { id: '/team', label: 'Team' },
        { id: '/careers', label: 'Careers' },
        { id: '/contact', label: 'Contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-3 cursor-pointer group"
                    >
                        <img
                            src={darkMode ? "Pure Logo V1.png" : "LM Pure Logo V1.png"}
                            alt="Evionex Logo"
                            className="h-12 w-auto transition-all duration-300"
                        />
                        <img
                            src={darkMode ? "Pure Text.png" : "LMPure_Text.png"}
                            alt="Evionex"
                            className="h-8 w-auto mt-1 transition-all duration-300"
                        />
                    </Link>

                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                to={link.id}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${isActive(link.id)
                                    ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <Link to="/contact">
                            <Button variant="primary" className="px-5 py-2 text-sm">
                                Get Started
                            </Button>
                        </Link>
                    </div>

                    <div className="lg:hidden flex items-center gap-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full text-slate-600 dark:text-slate-300"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-slate-900 dark:text-white"
                        >
                            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-xl">
                    <div className="flex flex-col p-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                to={link.id}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`p-4 text-left rounded-xl text-lg font-medium transition-all ${isActive(link.id)
                                    ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400'
                                    : 'text-slate-600 dark:text-slate-300'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="p-4">
                            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="w-full">
                                    Get Started
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
