import React, { useState,useEffect } from 'react'
import HomeWelcome from '../Home/HomeWelcome'
import Faq from '../Home/Faq';


function Home() {
  const [greeting, setGreeting] = useState('');
  

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

  return(
    <main className='Home min-vh'>
        <HomeWelcome greeting={greeting} />
        <Faq/>
    </main>
  )
}

export default Home