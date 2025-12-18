import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

window.TeamPage = () => {
    const Section = window.Section;
    if (!Section) return null;

    return (
        <div className="animate-fade-in pt-24">
            <Section>
                <div className="container mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Meet The Visionaries</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400">The leadership driving Evionex forward.</p>
                </div>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl px-4">
                    {[
                        { name: "Atharva Shinde", role: "Director & Co-Founder", delay: 0, image: "Atharva_suit.png", description: "Multi-disciplined professional with strong background in Bio-informatics and an undying passion for Aging research." },
                        { name: "Kedar Navsariwala", role: "Director & Co-Founder", delay: 100, image: "Kedar_photo.jpg", description: "Molecular biologist turned Machine Learning Engineer, loves to design AI tools to help researchers and clinicians." },
                        { name: "Mrunal Samant", role: "Director & Co-Founder", delay: 200, image: "Mrunal_photo1.jfif", description: "Passionate about technology and leadership, driving Evionex to new heights in the global market through her expertise in management." }
                    ].map((member, idx) => (
                        <div
                            key={idx}
                            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg text-center border-t-4 border-cyan-500 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                            style={{ animationDelay: `${member.delay}ms` }}
                        >
                            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-slate-100 dark:border-slate-700 shadow-lg">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{member.name}</h3>
                            <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-4">{member.role}</p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                                {member.description}
                            </p>
                            <div className="flex justify-center gap-4 text-slate-400">
                                <Linkedin size={20} className="hover:text-cyan-600 cursor-pointer transition-colors" />
                                <Twitter size={20} className="hover:text-cyan-600 cursor-pointer transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};
