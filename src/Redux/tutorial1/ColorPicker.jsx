import React from 'react'
import Form from 'react-bootstrap/Form';
import {useState} from 'react'

function ColorPicker({dispatch,changeColor}) {
  // this component contain the color picker logic from bootstrap
    const [color, setColor] = useState("");
  return (
    <div className='d-flex flex-column align-items-center'> 
        <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
        <Form.Control
          type="color"
          id="exampleColorInput"
          defaultValue="#563d7c"
          onChange={(e)=> setColor(e.target.value)}
          title="Choose your color"
          className='mb-3'
        />
        <button 
        onClick={()=>{dispatch(changeColor(color) );}
        }
          className='btn btn-success  btn-sm px-3 mx-3 flex-grow-1'>
              changeColor
          </button>
      </div>
  )
}

export default ColorPicker