import React, { useState } from 'react';

const MyComponent = () => {
  const [buttonText, setButtonText] = useState('Click me');

  const handleClick = () => {
    setButtonText('Button Clicked!');
  };

  return (
    <div>
      <h1>{buttonText}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default MyComponent;