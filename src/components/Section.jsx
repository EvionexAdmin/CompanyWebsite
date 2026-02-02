import React from 'react';

const Section = ({ id, className = '', children }) => (
    <section id={id} className={`w-full px-4 py-20 md:py-32 ${className}`}>
        {children}
    </section>
);

export default Section;
