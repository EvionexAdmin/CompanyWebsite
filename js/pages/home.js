import React from 'react';
import { ArrowRight, Cpu, Shield, Layout } from 'lucide-react';

window.HomePage = () => (
    <div className="animate-fade-in">
        <div className="min-h-[90vh] flex items-center justify-center overflow-hidden relative">
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-500/20 rounded-full blur-[100px] animate-pulse-slow pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse-slow delay-1000 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">


                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-tight animate-slide-up delay-100">
                    Transforming <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">
                        <DecryptedText text="Research & Education" />
                    </span>
                </h1>

                <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-200 backdrop-blur-sm rounded-xl p-2">
                    Evionex empowers institutions with intelligent, AI-powered digital transformation. We bridge the gap between traditional methods and the future of discovery.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-300">
                    <Button onClick={() => window.location.href = 'products.html'}>
                        Explore Our Products
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button variant="secondary" onClick={() => window.location.href = 'contact.html'}>
                        Partner With Us
                    </Button>
                </div>
            </div>
        </div>

        <Section className="relative">
            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">The Evionex Advantage</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Addressing the critical gaps in Indian research and education with proprietary, India-first solutions.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <SpotlightCard
                        title="AI-Powered Insights"
                        description="Proprietary AI models optimized for Indian contexts to assist with grant writing, personalized learning, and data analytics."
                        icon={Cpu}
                        delay={0}
                    />
                    <SpotlightCard
                        title="Regulatory Compliance"
                        description="Built-in audit trails and GxP compliance support to meet FDA/EMA regulations and simplify institutional reporting."
                        icon={Shield}
                        delay={100}
                    />
                    <SpotlightCard
                        title="Unified Management"
                        description="Consolidated platforms replacing fragmented tools. One solution for resource booking, documentation, and progress tracking."
                        icon={Layout}
                        delay={200}
                    />
                </div>
            </div>
        </Section>
    </div>
);
