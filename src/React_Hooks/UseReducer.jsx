import { Box, Typography } from '@mui/material';
import React, { useReducer } from 'react'

// reducer function with a switch case function to return a value 
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        case "newUserInput":
            return { ...state, userInput: action.payload }
        case "tgColor":
            return { ...state, color: !state.color }
        default:
            throw new Error();
    }
}
// actions for illustrating the types
const ACTION = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    NEW_USER_INPUT: "newUserInput",
    TG_COLOR: "tgColor"
}
// this is the main rendered component
function UseReducer() {
    // use reducer hook for holding state and dispatch ,the useReducer function takes in a a function and initial state
    const [state, dispatch] = useReducer(reducer, { count: 0, userInput: "", color: false })
    return (
        <section className='text-center d-flex flex-column align-items-center pb-5' style={{ color: state.color ? "#fff" : "#fff952" }}>
            <Box sx={{ width: { xs: "90%",lg:"75%"} }} className="input-group input-group-lg  mt-4">
                <span class="input-group-text" id="inputGroup-sizing-lg"><Typography sx={{ fontSize: { xs: "0.9rem", lg: "1.5rem" } }}> input color</Typography></span>
                <input
                    className='my-2'
                    value={state.userInput}
                    onChange={(e) => dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })}
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg" />
            </Box>
            <p className='my-2 fs-3'>{state.count}</p>
            <div className='text-center my-2'>
                <button className='btn btnsm btn-danger  px-5 fs-3' onClick={(() => dispatch({ type: ACTION.DECREMENT }))}>-</button>
                <button className='btn btnsm btn-success ms-2  px-5 fs-3' onClick={(() => dispatch({ type: ACTION.INCREMENT }))}>+</button>
            </div>
            <p className='fs-1 mx-3'>{state.userInput}</p>
            <button className='btn btnsm btn-info ms-2  px-5 fs-3' onClick={(() => dispatch({ type: ACTION.TG_COLOR }))}>color</button>
        </section>
    )
}

export default UseReducer