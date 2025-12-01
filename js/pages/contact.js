import React from 'react';
import { MapPin, Mail, Briefcase } from 'lucide-react';

window.ContactPage = () => (
    <div className="animate-fade-in pt-24">
        <Section>
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Contact Info */}
                    <div className="bg-slate-900 p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full blur-[80px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

                        <h2 className="text-3xl font-bold mb-8 relative z-10">Get in Touch</h2>
                        <p className="text-slate-300 mb-12 relative z-10">
                            Ready to digitize your institution? Reach out to us for a demo or consultation.
                        </p>

                        <div className="space-y-8 relative z-10">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <MapPin className="text-cyan-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Registered Office</h4>
                                    <p className="text-slate-300 text-sm">
                                        S-138 1 A 2 Shriram Nagar,<br />
                                        Society FL NO 17 P D Road,<br />
                                        Aundh, Haveli, Pune- 411007
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <Mail className="text-cyan-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Email Us</h4>
                                    <p className="text-slate-300 text-sm">evionex.info@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-lg">
                                    <Briefcase className="text-cyan-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1">Business Hours</h4>
                                    <p className="text-slate-300 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-12">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-900 dark:text-slate-200">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-cyan-500 outline-none transition-all" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-900 dark:text-slate-200">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-cyan-500 outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-900 dark:text-slate-200">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-cyan-500 outline-none transition-all" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-900 dark:text-slate-200">Interest</label>
                                <select className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-cyan-500 outline-none transition-all">
                                    <option>EviNote (Research)</option>
                                    <option>Luminary (Education)</option>
                                    <option>Partnership / Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-900 dark:text-slate-200">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-cyan-500 outline-none transition-all" placeholder="How can we help you?"></textarea>
                            </div>

                            <Button className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    </div>
);
