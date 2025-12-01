import React, { useState, useRef } from 'react';

window.RetroGrid = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none [perspective:200px]">
            <div className="absolute inset-0 [transform:rotateX(35deg)]">
                <div className="animate-grid-flow [background-repeat:repeat] [background-size:60px_60px] [height:300%] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600%] [background-image:linear-gradient(to_right,rgba(6,182,212,0.4)_1px,transparent_0),linear-gradient(to_bottom,rgba(6,182,212,0.4)_1px,transparent_0)] dark:[background-image:linear-gradient(to_right,rgba(6,182,212,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(6,182,212,0.3)_1px,transparent_0)]" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-slate-950" />
        </div>
    );
};

window.SpotlightWrapper = ({ children, className = "" }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setOpacity(1)}
            onMouseLeave={() => setOpacity(0)}
            className={`relative overflow-hidden border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-2xl ${className}`}
        >
            <div
                className="pointer-events-none absolute -inset-px transition duration-300 z-0"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6,182,212,0.15), transparent 40%)`,
                }}
            />
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
};

window.SpotlightCard = ({ title, description, icon: Icon, delay }) => {
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

window.Button = ({ children, onClick, variant = 'primary', className = '' }) => {
    const baseStyle = "relative overflow-hidden px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center z-10";
    const variants = {
        primary: "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:shadow-lg hover:shadow-cyan-500/30 focus:ring-cyan-500 border-none",
        secondary: "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 focus:ring-slate-500",
        outline: "bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white",
    };

    return (
        <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className} group`}>
            {variant === 'primary' && (
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
            )}
            {children}
        </button>
    );
};

window.Section = ({ id, className = '', children }) => (
    <section id={id} className={`w-full px-4 py-20 md:py-32 ${className}`}>
        {children}
    </section>
);
