import React from 'react';

const RetroGrid = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none [perspective:200px]">
            <div className="absolute inset-0 [transform:rotateX(35deg)]">
                <div className="animate-grid-flow [background-repeat:repeat] [background-size:60px_60px] [height:300%] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600%] [background-image:linear-gradient(to_right,rgba(6,182,212,0.4)_1px,transparent_0),linear-gradient(to_bottom,rgba(6,182,212,0.4)_1px,transparent_0)] dark:[background-image:linear-gradient(to_right,rgba(6,182,212,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(6,182,212,0.3)_1px,transparent_0)]" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-slate-950" />
        </div>
    );
};

export default RetroGrid;
