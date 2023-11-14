import React, { useState,useEffect } from 'react'
import HomeWelcome from '../Home/HomeWelcome'
import Faq from '../Home/Faq';


function Home() {
  // this component only coctains imported components 
  return(
    <main className='Home min-vh'>
        <HomeWelcome/>
        <Faq/>
    </main>
  )
}

export default Home