import React from 'react';
import SpotlightWrapper from './SpotlightWrapper';

const SpotlightCard = ({ title, description, icon: Icon, delay }) => {
    return (
        <SpotlightWrapper className="rounded-2xl px-8 py-12 group" style={{ animationDelay: `${delay}ms` }}>
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center mb-6 text-white shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                <Icon size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                {title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {description}
            </p>
        </SpotlightWrapper>
    );
};

export default SpotlightCard;
