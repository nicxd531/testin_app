import React,{useState} from 'react'
import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


function TransactionPanel({addTransaction}) {
    const [title, setTitle]=useState("");
    const [description, setDescription]=useState("");
    const [transactionAmount, setTransactionAmount]=useState(0);
    const [transactionType, setTransactionType]=useState("Expense");
    const onSubmit = (e)=>{
        e.preventDefault()
        addTransaction({title:title,description:description,transactionAmount:transactionAmount,transactionType:transactionType})
        setDescription("")
        setTransactionAmount(0)
        setTitle("")
    }
    const handleChange = (event) => {
        setTransactionType(event.target.value);
      };
  return (
    <Box sx={{mb:5}}>
        <FormControl onSubmit={onSubmit}>
            <Typography variant="h5" sx={{fontSize:{xs:"14px",lg:"1.5rem"}}}>Transaction Adding Panel</Typography>
            <Box sx={{mt:2,flexDirection:{xs:"column",lg:"row"},alignItems:{xs:"start",lg:"center"}}} className="d-flex ">
                <TextField sx={{mr:2 ,mb:{xs:2,lg:0}}} value={title} label="Title" onChange={(e)=>setTitle(e.target.value)}/>
                <TextField label="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <FormControl  sx={{ width:{xs:"75%",lg:"fit-content"},ml:{xs:0,lg:2},mt:{xs:2,lg:0}}}>
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        label="Amount"
                        type='number'
                        value={transactionAmount}
                        onChange={(e)=>setTransactionAmount(e.target.value)}
                    />
                </FormControl>
                
                <FormControl sx={{mx:{xs:0,lg:2},mt:{xs:2,lg:0}}}>
                    <FormLabel id="demo-controlled-radio-buttons-group">Transaction Type</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={transactionType}
                        row
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Expense" control={<Radio />} label="Expense" />
                        <FormControlLabel value="Income" control={<Radio />} label="Income" />
                    </RadioGroup>
                    </FormControl>
                <Button type='submit'disabled={title== ""|| transactionAmount == 0 ? true :false} onClick={onSubmit} sx={{ml:{xs:0,lg:2},mt:{xs:2,lg:0}}} variant="contained">Add transaction</Button>
            </Box>
        </FormControl>
    </Box>
  )
}

export default TransactionPanel