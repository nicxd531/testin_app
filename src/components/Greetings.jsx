import React from 'react'
import { useState, useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';

function Greetings() {
    // useState hook for taking in fetched greetings
  const [greeting, setGreeting] = useState('');

   // useEffect hook for fetching the data and storing it in greetings and also reinvocking the fetchGreeting method 
   useEffect(() => {
        const fetchGreeting = async () => {
        try {
            const response = await fetch('https://www.greetingsapi.com/random');
            
            if (!response.ok) {
            throw new Error('Failed to fetch greeting');
            }

            const data = await response.json();
            setGreeting(data.greeting);
        } catch (error) {
            console.error('Error fetching greeting:', error.message);
        }
        };

        // Fetch a new greeting every 10 seconds
        const intervalId = setInterval(() => {
        fetchGreeting();
        }, 10000);
    }
    , []);

  return (
    <h3 className=''>
        <ReactTypingEffect
            text={greeting ? greeting: "Hello"}
            eraseSpeed= { "20ms"}
            typingDelay= {"20ms"}
        /> 🖐🏽
    </h3>
 )
}

export default Greetings