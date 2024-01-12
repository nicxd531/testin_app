import React from 'react'

function IntroHeader({header,description}) {
  return (
    <header className='mb-3 px-3 header-top-padding'>
        <h1>{header}</h1>
        <h4>{description}</h4>
        <hr className='w-100 bg-warning mt-5'/>
    </header>
  )
}

export default IntroHeader