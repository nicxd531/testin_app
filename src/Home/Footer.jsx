import React from 'react'


function Footer() {
  return (
    <footer className='p-3 d-flex footer flex-row justify-content-center align-items-center'>
        <h2 className='p-2 flex-grow-1 text-center fs-6'>
            Created using : 
            <img src='/vite.svg'/> + <img src='/react.svg' className='rotating-image'/>
        </h2>
        <h2 className='p-2 flex-grow-1 text-center fs-6'>Author: Ola Olasunkanmi</h2>
        <h2 className='p-2 flex-grow-1 text-center fs-6'>Copyright : all rights reserved 2023</h2>
    </footer>
  )
}

export default Footer