import React,{useState} from 'react'

function Question() {
    // this component only contains states and html tags 
    // use state hook for right answers
    const [rightAnswer, setRightAnswer]=useState(false)
    // use state hook for wrong answers
    const [wrongAnswer, setWrongAnswer]=useState(false)
    // use state hook for revealing answers
    const [reavealAnswer, setRevealAnswer]=useState(false)
    
  return (
    <section className='w-75 d-flex flex-column align-items-center'>
        <div className='w-75'>
         <h2 className='bg-success text-center'>Question</h2>
        </div>
        <div className='my-3'>
            <h3>Pick the right answer</h3>
            <div className='mt-3'>
                <button className='btn btn-sm btn-success' onClick={()=>{setRightAnswer(true),setWrongAnswer(false),setRevealAnswer(false)}}>patience</button>
                <button className='btn btn-sm btn-danger mx-3' onClick={()=>{setRightAnswer(false),setWrongAnswer(true),setRevealAnswer(false)}}>insult</button>
                <button className='btn btn-sm btn-info' onClick={()=>{setRightAnswer(false),setWrongAnswer(false),setRevealAnswer("act nice")}}>Reaveal Answer</button>
            </div>
        </div>
        <div className='my-3 bg-info p-3' >
            <h1>Result</h1>
            {rightAnswer && <h3>nice!.. you got it right</h3>}
            {wrongAnswer && <h3>opps!.. you got it wrong, try again?</h3>}
            {reavealAnswer && <h3>the right answer is <span>{reavealAnswer}</span></h3>}
        </div>
    </section>
  )
}

export default Question