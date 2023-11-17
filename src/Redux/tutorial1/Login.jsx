import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {login} from "../features/User"
import {userStatus }from '../features/UserStatus';
import Form from 'react-bootstrap/Form';





function Login() {
    // this component is used to login to the profile component and also contains the colour picker logic to switch the text colour
    const[data, setData]= useState({
        name: "", 
        age: "", 
        email:""
    }) 
    const dispatch = useDispatch();
    const dispatch2 = useDispatch();
    const handleClick=()=>{
        dispatch(
            login(data)
            ),
            dispatch2(userStatus(true))
    }
  return (
    <section className='d-flex flex-column  border bg-secondary text-white p-5 w-75'>
        <header className='fs-1 fw-bold text-uppercase mb-5'>welcome </header>
        <Form 
        onSubmit={handleClick}
        >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                required
                onChange={(e)=>setData({...data, name:e.target.value})}
                type="text" 
                placeholder="input name" 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                required
                type="email" 
                onChange={(e)=>setData({...data, email:e.target.value})}
                placeholder="name@example.com" 
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Age</Form.Label>
                <Form.Control 
                required
                type="number" 
                onChange={(e)=>setData({...data, age:e.target.value})}
                placeholder="input age" />
            </Form.Group>
        </Form>
        <button 
        onClick={handleClick}
        className='btn btn-success  btn-sm px-3 mx-3 w-25'>
            login
        </button>
        
    </section>
  )
}

export default Login