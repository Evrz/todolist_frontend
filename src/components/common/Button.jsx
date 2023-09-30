import React from 'react';

const Button = ({ buttonType, onClick, data, text, variant, className, src }) => {
    let buttonStyle = 'py-2 px-4 rounded';

    if (variant === 'primary') {
        buttonStyle += ' bg-purple-500 text-white';
    } else if (variant === 'secondary') {
        buttonStyle += ' bg-gray-400 text-black';
    }

    return (
        buttonType === 'icon' ? (
            <div className={`flex justify-center ${data?.icon.width} ${data?.icon.height}`}>
                <img src={src ?? data?.icon?.src} alt={data?.icon?.alt} />
            </div>
        ) : (
            <button onClick={onClick} className={`${buttonStyle} ${className}`}>
                {text}
            </button>
        )
    );

};

export default Button;
