import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FlaskConical, FileText, Calculator, Calendar, Clock, MessageSquare, Shield,
    BookOpen, BrainCircuit, Mic, ClipboardList, BarChart, Users, CheckCircle
} from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

const Products = () => {
    const navigate = useNavigate();

    return (
        <div className="animate-fade-in pt-24">
            <Section>
                <div className="container mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Products</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Designed by academics for academics - digital solutions that actually work.
                    </p>
                </div>

                <div className="container mx-auto space-y-32 px-4">

                    {/* Evinote Section */}
                    <div>
                        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-bold mb-6 w-fit">
                                    <FlaskConical size={16} /> Research Solution
                                </div>
                                <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Evinote</h3>
                                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                                    The comprehensive electronic lab notebook solution that transforms how research teams document, collaborate, and manage laboratory resources.
                                </p>
                                <div className="flex flex-wrap items-center gap-4">
                                    <Button onClick={() => window.open('https://youtu.be/1SjxMRxl-EA?si=Gqy8pxdTbm3l01Po', '_blank')}>
                                        Watch Demo
                                    </Button>
                                    <Button variant="secondary" onClick={() => navigate('/contact')}>
                                        Request Demo
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 group-hover:opacity-0 transition-opacity duration-500 z-10" />
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/KbUlFY_-5qI"
                                        title="EviNote Demo"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: FileText, title: "Electronic Lab Notebook", desc: "Digitize all your research notes with secure, searchable documentation that meets compliance standards." },
                                { icon: Calculator, title: "Budget Tracking", desc: "Real-time tracking of research expenditures with automated grant reporting capabilities." },
                                { icon: Calendar, title: "Lab Calendar", desc: "Coordinate schedules, meetings, and equipment usage across your entire research team." },
                                { icon: Clock, title: "Resource Booking", desc: "Manage shared lab equipment and facilities with an intuitive reservation system." },
                                { icon: MessageSquare, title: "Lab Chat", desc: "Secure, topic-based messaging for research teams with file sharing and threaded discussions." },
                                { icon: Shield, title: "Data Security", desc: "Enterprise-grade security with role-based access controls and audit trails." }
                            ].map((feature, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors group">
                                    <div className="w-12 h-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <feature.icon size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Luminary Section */}
                    <div>
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-16">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-sm font-bold mb-6 w-fit">
                                    <BookOpen size={16} /> Education Solution
                                </div>
                                <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Luminary</h3>
                                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                                    The AI-powered learning platform that enhances student engagement, automates assessment, and transforms how educators deliver content.
                                </p>
                                <div className="flex flex-wrap items-center gap-4">
                                    <Button onClick={() => window.open('https://youtu.be/r-hpIGB21W4?si=6aTPsjE4eedW25Lk', '_blank')}>
                                        Watch Demo
                                    </Button>
                                    <Button variant="secondary" onClick={() => navigate('/contact')}>
                                        Request Demo
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video group">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 group-hover:opacity-0 transition-opacity duration-500 z-10" />
                                    <iframe
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/r-hpIGB21W4"
                                        title="Luminary Demo"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: BookOpen, title: "Digital Journals", desc: "Interactive notebooks with multimedia support and automatic organization of learning materials." },
                                { icon: BrainCircuit, title: "AI-Driven Quizzes", desc: "Adaptive assessments that adjust difficulty based on student performance and identify knowledge gaps." },
                                { icon: Mic, title: "Interview Practice", desc: "AI-based simulation for job interviews with personalized feedback on communication skills." },
                                { icon: ClipboardList, title: "Assignment Management", desc: "Streamlined submission, grading, and feedback process with plagiarism detection." },
                                { icon: BarChart, title: "Performance Analytics", desc: "Detailed insights into student progress with actionable recommendations for improvement." },
                                { icon: Users, title: "Collaboration Tools", desc: "Group workspaces with real-time co-editing and peer review capabilities." }
                            ].map((feature, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors group">
                                    <div className="w-12 h-12 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <feature.icon size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Comparison / Pricing Section */}
                    <div className="py-12">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Choose the Right Solution</h2>
                            <p className="text-slate-600 dark:text-slate-400">Tailored platforms for every institution's needs.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Evinote Card */}
                            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl relative overflow-hidden group hover:border-emerald-500 transition-colors">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700" />
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Evinote</h3>
                                <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-6">For Research Labs</p>
                                <p className="text-sm text-slate-500 mb-8">Institutional pricing available - contact for discounts</p>

                                <ul className="space-y-4 mb-8">
                                    {["Electronic Lab Notebook", "Budget & Resource Tracking", "Lab Collaboration Tools", "Equipment Booking System"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                            <CheckCircle size={18} className="text-emerald-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full" onClick={() => navigate('/contact')}>Contact Sales</Button>
                            </div>

                            {/* Luminary Card */}
                            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl relative overflow-hidden group hover:border-cyan-500 transition-colors">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700" />
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Luminary</h3>
                                <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-6">For Educational Institutions</p>
                                <p className="text-sm text-slate-500 mb-8">Comprehensive education management</p>

                                <ul className="space-y-4 mb-8">
                                    {["Digital Learning Journals", "AI-Powered Assessment", "Interview Practice Tools", "Assignment Management"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                            <CheckCircle size={18} className="text-cyan-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full" variant="outline" onClick={() => navigate('/contact')}>Get Started</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Products;
