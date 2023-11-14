import React from 'react'
import { useState, useEffect } from 'react';

function DotIndicator({data}) {
    // console.log(data)

    // useState hook used for state management in the dot indicator component used to control either blinking is true or false
    const [isBlinking, setIsBlinking] = useState(false);
    const getClassName = () => {
     switch(data){
        case "not-started":
            return data
        case "in-progress":
            return data
        case "completed":
            return data
        default:
            return "bg-info"
    }
};
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
    <div className='main-dot mx-2 h-100'>
        <div className={`static-dot dot ${getClassName()}`}></div>
        <div className={`dot blinking-dot ${isBlinking ? 'blinking' : ''} ${getClassName()}`}></div>
    </div>
  )
}

export default DotIndicator