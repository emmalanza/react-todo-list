import React from 'react';

const Button = ({
    onClick,
    iconSrc,
    iconAlt = 'Icono',
    size = "size-16",
    bgColor = 'bg-customViolet-700/75',
    textColor = 'text-white',
    borderColor = 'border-slate-500'
}) => {
    return (
        <button
            className={`cursor-pointer ${bgColor} 
                  shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] 
                  px-5 py-3 ${size} 
                  rounded-xl border-[1px] ${borderColor} ${textColor} font-medium group`}
            onClick={onClick}
        >
            <div className="relative overflow-hidden">
                <p
                    className="group-hover:-translate-y-20 
                    duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                >
                    <img src={iconSrc} alt={iconAlt} />
                </p>
                <p
                    className="absolute top-20 left-0 group-hover:top-0 
                    duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                >
                    <img src={iconSrc} alt={iconAlt} />
                </p>
            </div>

        </button>
    );
};

export default Button;
