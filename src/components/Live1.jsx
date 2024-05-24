import React, { useState } from "react";

const Live1 = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <button 
                className="relative w-28 h-10 border-2 border-transparent bg-black rounded-3xl cursor-pointer flex items-center justify-center transition duration-300 hover:bg-gradient-to-r hover:from-[#6a11cb] hover:to-[#2575fc] my-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => window.open(props.url, '_blank')}
            >
                <span className={`text-white transition-opacity duration-300 opacity-${isHovered ? '100' : '0'}`}>
                    View Design
                </span>
            </button>
        </div>
    );
}

export default Live1;
