import React from 'react';
import './styles.css'

const Button = ({title, onClick}: { title: string, onClick: () => void }) => {
  
    return <div
      
        className={`button font-bold text-white text-center pt-3 cursor-pointer text-base dark-blue`}
        onClick={onClick}>
        {title}
    </div>;
};

export default Button;
