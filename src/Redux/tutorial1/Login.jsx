import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from "../features/User"
import { userStatus } from '../features/UserStatus';
import Form from 'react-bootstrap/Form';
import { Box, Button } from '@mui/material';

function Login() {
    // this component is used to login to the profile component and also contains the colour picker logic to switch the text colour
    const [data, setData] = useState({
        name: "",
        age: "",
        email: ""
    })
    const dispatch = useDispatch();
    const dispatch2 = useDispatch();
    const handleClick = () => {
        dispatch(
            login(data)
        ),
            dispatch2(userStatus(true))
    }
    return (
        <Box sx={{ width: { xs: "95%", lg: "75%" }, px: { xs: 4 }, py: { xs: 6 } }} className='d-flex flex-column  border bg-secondary text-white '>
            <header className='fs-1 fw-bold text-uppercase mb-5'>welcome </header>
            <Form
                onSubmit={handleClick}
            >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        type="text"
                        placeholder="input name"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        placeholder="name@example.com"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        onChange={(e) => setData({ ...data, age: e.target.value })}
                        placeholder="input age" />
                </Form.Group>
            </Form>
            <Box sx={{textAlign:"center" ,mt:2}}>
                <Button
                    sx={{ width: { xs:"100%",lg: "50%", nx: "auto", textAlign: "center" } }}
                    variant='contained'
                    onClick={handleClick}
                >
                    login
                </Button>
            </Box>

        </Box>
    )
}

export default Login