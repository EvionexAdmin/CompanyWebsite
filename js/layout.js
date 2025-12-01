import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Linkedin, Twitter, Instagram, MapPin, Mail } from 'lucide-react';

window.Navbar = ({ activePage, darkMode, setDarkMode }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'home', label: 'Home', href: 'index.html' },
        { id: 'who-we-are', label: 'Who We Are', href: 'who-we-are.html' },
        { id: 'products', label: 'Products', href: 'products.html' },
        { id: 'team', label: 'Team', href: 'team.html' },
        { id: 'careers', label: 'Careers', href: 'careers.html' },
        { id: 'contact', label: 'Contact', href: 'contact.html' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a
                        href="index.html"
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
                    </a>

                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activePage === link.id
                                    ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <Button variant="primary" className="px-5 py-2 text-sm" onClick={() => window.location.href = 'contact.html'}>
                            Get Started
                        </Button>
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
                            <a
                                key={link.id}
                                href={link.href}
                                className={`p-4 text-left rounded-xl text-lg font-medium transition-all ${activePage === link.id
                                    ? 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400'
                                    : 'text-slate-600 dark:text-slate-300'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="p-4">
                            <Button className="w-full" onClick={() => window.location.href = 'contact.html'}>
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

window.Footer = () => (
    <footer className="bg-slate-900/90 backdrop-blur-md text-white pt-20 pb-10 border-t border-slate-800">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                            E
                        </div>
                        <span className="text-xl font-bold">Evionex</span>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-6">
                        Driving Digitalization. Empowering India's research and education communities through intelligent digital transformation.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-600 transition-colors">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-600 transition-colors">
                            <Twitter size={18} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-600 transition-colors">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6">Company</h4>
                    <ul className="space-y-3 text-slate-400">
                        <li><a href="who-we-are.html" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                        <li><a href="team.html" className="hover:text-cyan-400 transition-colors">Leadership</a></li>
                        <li><a href="careers.html" className="hover:text-cyan-400 transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">News & Press</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6">Products</h4>
                    <ul className="space-y-3 text-slate-400">
                        <li><a href="products.html" className="hover:text-cyan-400 transition-colors">EviNote (Research)</a></li>
                        <li><a href="products.html" className="hover:text-cyan-400 transition-colors">Luminary (Education)</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6">Contact</h4>
                    <ul className="space-y-3 text-slate-400">
                        <li className="flex items-start gap-3">
                            <MapPin size={20} className="text-cyan-500 shrink-0 mt-1" />
                            <span>Shriram Nagar, Aundh,<br />Pune, Maharashtra 411007</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={20} className="text-cyan-500 shrink-0" />
                            <span>evionex.info@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Evionex Private Limited. All rights reserved.</p>
            </div>
        </div>
    </footer>
);
