import React from 'react';

const Button = ({ onClick, text, variant, className }) => {
    let buttonStyle = 'py-2 px-4 rounded';

    if (variant === 'primary') {
        buttonStyle += ' bg-purple-500 text-white';
    } else if (variant === 'secondary') {
        buttonStyle += ' bg-gray-400 text-black';
    }

    return (
        <button onClick={onClick} className={`${buttonStyle} ${className}`}>
            {text}
        </button >
    );
};

export default Button;
