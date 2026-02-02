import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
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

export default Button;
