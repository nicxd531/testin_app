import React from 'react'
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/Theme';
import ColorPicker from './ColorPicker';
import ColorSelector from './ColorSelector';



function ChangeColor() {
  const dispatch = useDispatch()

  
  return (
    <section className='py-5 d-flex flex-column'>
      <ColorPicker dispatch={dispatch} changeColor={changeColor}/>
      <ColorSelector dispatch={dispatch} changeColor={changeColor}/>
      
    </section>
  )
}

export default ChangeColor