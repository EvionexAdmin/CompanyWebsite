import React from 'react';
import Section from '../components/Section';
import SpotlightWrapper from '../components/SpotlightWrapper';

const WhoWeAre = () => (
    <div className="animate-fade-in pt-24">
        <Section>
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-16">
                    <div className="md:w-1/2 sticky top-32">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl transform rotate-3 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Team Collaboration"
                                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px] transform transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <SpotlightWrapper className="rounded-3xl p-8 md:p-10">
                            <div className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-wider text-cyan-500 uppercase bg-cyan-500/10 rounded-full">
                                Our Vision & Mission
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                                Democratizing AI for <br />
                                <span className="text-cyan-500">Scientific Progress.</span>
                            </h2>

                            <div className="space-y-8 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Who We Are</h3>
                                    <p>
                                        Evionex is a technology startup developing cutting-edge AI-powered software solutions for scientific research institutes and educational bodies worldwide. Incorporated in September 2025, we focus on usability, functionality, and affordability.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Our Mission</h3>
                                    <p>
                                        To empower India's research and education communities through intelligent digital transformation. We strive to break down barriers to innovation by providing accessible, state-of-the-art platforms that modernize laboratories and classrooms.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Our Goals</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-base">
                                        <li>Enable world-class research with organized documentation and efficient resource management.</li>
                                        <li>Enhance learning outcomes through personalized, adaptive digital tools.</li>
                                        <li>Bridge the digital divide with affordable, scalable technology for all institutions.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mt-8 border-t border-slate-200 dark:border-slate-700 pt-8">
                                <div>
                                    <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">2+</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Flagship Products</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">100%</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Indian Compliance</p>
                                </div>
                            </div>
                        </SpotlightWrapper>
                    </div>
                </div>
            </div>
        </Section>
    </div>
);

export default WhoWeAre;
