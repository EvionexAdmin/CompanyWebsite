import React from 'react';
import { Users } from 'lucide-react';

window.CareersPage = () => (
    <div className="animate-fade-in pt-24">
        <Section>
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Join Our Journey</h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        We are growing rapidly. Help us shape the future of Indian technology.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 shadow-lg border border-slate-200 dark:border-slate-700">
                        <div className="w-20 h-20 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Users size={40} className="text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">No Current Openings</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                            We don't have any specific roles open right now, but we're always looking for talented individuals to join our network.
                        </p>
                        <Button variant="outline" onClick={() => window.location.href = 'mailto:careers@evionex.com'}>
                            Send Us Your Resume
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    </div>
);
