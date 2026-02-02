import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, MapPin, Mail } from 'lucide-react';

const Footer = () => (
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
                        <li><Link to="/who-we-are" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                        <li><Link to="/team" className="hover:text-cyan-400 transition-colors">Leadership</Link></li>
                        <li><Link to="/careers" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
                        <li><a href="#" className="hover:text-cyan-400 transition-colors">News & Press</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6">Products</h4>
                    <ul className="space-y-3 text-slate-400">
                        <li><Link to="/products" className="hover:text-cyan-400 transition-colors">EviNote (Research)</Link></li>
                        <li><Link to="/products" className="hover:text-cyan-400 transition-colors">Luminary (Education)</Link></li>
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

export default Footer;
