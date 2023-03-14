import React from 'react';

function Button(props) {
  const { onClick, disabled, className, children } = props;

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`text-base font-bold p-1 transition-colors duration-300 ${props.active ? 'text-secondaryColor bg-white border-primaryColor border-2 mx-2 rounded hover:bg-primaryColor hover:text-white' : 'bg-primaryColor text-white rounded px-4 hover:bg-white hover:text-secondaryColor border-2 border-primaryColor'}`}
    >
      {children}
    </button>
  );
}

export default Button;
