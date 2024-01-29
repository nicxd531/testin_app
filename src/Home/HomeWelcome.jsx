import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import Greetings from '../components/Greetings';

function HomeWelcome({greeting}) {
    // this component consist of just jsx code and imported react typing effect 
    // array list of skills which is then feed to react tytping effect for display 
    const list =["Redux" , "React","React Hooks","useEffect","useContext","useReff","useState","Material UI 🧉","Firebase 🔥"]

  return (
    <section className='p-3 py-5  d-flex  flex-column text-lg-center p-lg-5'>
      <Greetings/>
      <h2 className=''>Welcome to </h2>
      <h1 className='fw-bold'>Test-In App</h1>
      <h2 className=''> An app created to test newly acquired skill</h2>
      <h2 className=''>
        skills that includes:  
        <ReactTypingEffect
          text={list}
          eraseSpeed= {"10ms"}
          typingDelay= {"10ms"}
          cursor ={" "}
        />
      </h2>
    </section>
  )
}

export default HomeWelcome