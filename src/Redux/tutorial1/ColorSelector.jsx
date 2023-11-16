import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function ColorSelector({dispatch,changeColor}) {
    const selectChange =(e)=>{
        dispatch(changeColor(e.target.value))
      }
    
  return (
    <div>
        <FloatingLabel 
        controlId="floatingSelect" 
        label="you can also select a colour here"
        className='mt-5'
        >
          <Form.Select 
          aria-label="Floating label select example"
          className='px-5'
          onChange={(e)=>selectChange(e)}
          >
            <option>Open this select menu</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
          </Form.Select>
        </FloatingLabel>
      </div>
  )
}

export default ColorSelector