import React from 'react'
import Question from './usestate/Question'

function UseState() {
  // this component only contatains the imported question component
  return (
    <section className='d-flex justify-content-center align-items-center flex-cloumn '>
        <Question/>
    </section>
  )
}

export default UseState