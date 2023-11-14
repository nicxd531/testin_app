import React from 'react'
import { useState, useEffect } from 'react';

function DotIndicator() {

    // useState hook used for state management in the dot indicator component used to control either blinking is true or false
    const [isBlinking, setIsBlinking] = useState(false);

    // useEffect hook used to invoke the set interval method witha a function that sets blinking to true after invocation 
    // which contains a set time out function that set is blinking to false
    useEffect(() => {
        const blinkInterval = setInterval(() => {
            setIsBlinking(true);
      
            // After 500 milliseconds, stop blinking and reset size
            setTimeout(() => {
              setIsBlinking(false);
            }, 500);
        }, 1500); // Blink every 1500 milliseconds

        // Clean up the interval on component unmount
        return () => clearInterval(blinkInterval);
    
    }, [])
    

  return (
    <div className='main-dot px-2 mx-2'>
        <div className="static-dot dot"></div>
        <div className={`dot blinking-dot ${isBlinking ? 'blinking' : ''}`}></div>
    </div>
  )
}

export default DotIndicator