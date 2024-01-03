import React, { useEffect } from 'react'
import { Box, Divider, Paper, ThemeProvider, createTheme,  } from '@mui/material'
import Transactions from './Transactions';
import {useAddTransaction} from "../../hooks/useAddTransaction"
import { useGetTransactions } from '../../hooks/useGetTransactions';
import TransactionPanel from './TransactionPanel';
import WelcomeDashboard from './WelcomeDashboard';

function ExpenseTrackerHome() {
  // this component is the main home component for expenses
  // custom hook for gettinging and adding transactions 
  const {transactions,transactionTotal}=useGetTransactions();
  const {addTransaction} = useAddTransaction();
  return (
    <Box  className="expense-tracker-home" sx={{flexGrow: 1, p: 3 ,position:"relative",height:"fit-content"}}>
        <Paper sx={{opacity:"0.8",p:3 ,ml:{xs:5, width:{xs:"100%"}}}}>
            <WelcomeDashboard transactionTotal={transactionTotal}/>
            <Divider/>
            <TransactionPanel addTransaction={addTransaction}/>
            <Divider/>
             <Transactions transactions={transactions} />
        </Paper>
    </Box>
  )
}

export default ExpenseTrackerHome