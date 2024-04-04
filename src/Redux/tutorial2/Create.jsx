import React, { useState } from 'react'
import { addUser } from '../features/UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material'


function Create() {
    // the useDispatch method is used to fetch the addUser method from the usersTut2 componet so as to run the function
    // the use navigate method is used to navigate to what ever url is passed into it 
    // the use selector method is used to fetch the usersTut2 data stored in store 
    // the e.preventDefault method is used to prevent the default refresh on submit method to stop the browser from refreshing on submit 
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const usersTut2 = useSelector((state) => state.usersTut2)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({ id: usersTut2[usersTut2.length - 1].id + 1, name, email }))
        navigate("/reduxHome")
    }
    return (
        <Box sx={{ width: "100%" }} className='d-flex  mt-5 justify-content-center align-items-center'>
            <Box sx={{ width: { xs: "90%", lg: "50%" }, px: { xs: 2 }, py: { xs: 5 } }} className=' border bg-secondary text-white '>
                <h3>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>name:</label>
                        <input type='text' name='name' className='form-control' placeholder='enter name'
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div>

                        <label htmlFor='email'>Email:</label>
                        <input type="email" name='email' className='form-control' placeholder='enter email'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </form><br />
                <Button variant='contained' onClick={handleSubmit} className='btn btn-info'>submit</Button>

            </Box>

        </Box>
    )
}

export default Create