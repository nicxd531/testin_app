import { useEffect, useState } from "react"
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import {db} from "../config/firebase-config"
import { useGetUserInfo } from "./useGetUserInfo";


export const useGetTransactions =()=>{
    // this hook is used to get data from the specified database
    // states and hook for getting user info and also refrence to the particular section of the data base
    const {userID}=useGetUserInfo()
    const [transactions, setTransaction ]= useState([]);
    const [transactionTotal, setTransactionTotal ]= useState({balance:0.0,income:0.0,expenses:0.0});
    const transactionCollectionRef = collection(db,"transactions")
    // function for getting transaction
    const getTransactions = async ()=>{
        let  unsubscribe;
        try{
           const queryTransactions =query(transactionCollectionRef,where("userID","==",userID),orderBy("createdAt")) ;
           let totalIncome = 0;
           let totalExpense = 0;
           unsubscribe = onSnapshot(queryTransactions,(snapshot)=>{
            let docs = [];
            snapshot.forEach((doc3)=>{
                const data = doc3.data()
                const id = doc3.id
              docs &&  docs.push({...data,id})
                if (data.transactionType == "Expense"){
                    
                    totalExpense += Number(data.transactionAmount)
                }else{
                    totalIncome += Number(data.transactionAmount)
                }
            })
             
            let balance = totalIncome - totalExpense
            setTransaction(docs)
            setTransactionTotal({
                balance,
                expense: totalExpense,
                income: totalIncome
            })
           })
        }catch(err){
            console.error(err)
        }
        return () => unsubscribe();
    }
    useEffect(
        ()=>{
            getTransactions()
           
        }
    ,[])
    return {transactions,transactionTotal}
}