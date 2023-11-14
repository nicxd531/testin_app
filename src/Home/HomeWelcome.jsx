import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import DotIndicator from '../components/DotIndicator';

function HomeWelcome({greeting}) {
    const list =["Redux" 
    , "React","React Hooks","useEffect","useContext","useReff","Material UI"]

  return (
    <section className='p-3 py-5  d-flex  flex-column '>
      <h3 className=''><ReactTypingEffect
        text={greeting?greeting: "Hello"}
        eraseSpeed= { "20ms"}
        typingDelay= {"20ms"}
      /> 🖐🏽</h3>
      <h2 className=''>Welcome to </h2>
      <h1 className='fw-bold'>Testing App</h1>
      <h2 className=''> An app created to test newly acquired skill</h2>
     <h2 className=''>
        skills that includes : <ReactTypingEffect
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