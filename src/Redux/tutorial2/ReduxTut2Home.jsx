import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../features/UserReducer'
import { Box, Typography } from '@mui/material'


function ReduxTut2Home() {
    // this component displays the data from the usersTut2 data
    // the useSelector method is used to fetch the data stored in the store 
    // the useDispatch method is used to fetch the delete user mthod from the usersTut2 component
    const usersTut2 = useSelector((state) => state.usersTut2)
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteUser({ id: id }))
    }
    return (
        <Box sx={{ width: "100%" }}>
            <h2>Crud App with JSON server</h2>
            <Link to={"/reduxHome/create"} className='btn btn-success my-3'> create +</Link>
            <table className='table w-100 p-2'>
                <thead className='w-100' style={{ width: "100%" }}>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        usersTut2 && usersTut2.map((user, index) => {
                            const { name, email, id } = user
                            return <tr key={index} className='w-100'>
                                <td>{id}</td>
                                <td ><Typography sx={{ width: "30%", fontSize: { xs: "0.8rem", lg: "1.2rem" } }}>{name}</Typography></td>
                                <td><Typography sx={{ width: "30%", fontSize: { xs: "0.8rem", lg: "1.2rem" } }}>{email}</Typography></td>
                                <td className='d-lg-flex '>
                                    <Box sx={{ mb: { lg: 2 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, flexWrap: "wrap" }}>
                                        <Link to={`/reduxHome/edit/${user.id}`} className='btn btnsm btn-primary  flex-column mt-lg-1'>edit</Link>
                                        <button onClick={() => handleDelete(id)} className='btn btnsm btn-danger mt-1 ms-lg-2'>delete</button>
                                    </Box>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </Box >
    )
}

export default ReduxTut2Home