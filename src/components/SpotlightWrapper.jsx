import React, { useState, useRef } from 'react';

const SpotlightWrapper = ({ children, className = "" }) => {
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

export default SpotlightWrapper;
