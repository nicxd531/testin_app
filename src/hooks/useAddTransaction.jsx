import {addDoc,collection,serverTimestamp} from "firebase/firestore"
import {db} from "../config/firebase-config"
import { useGetUserInfo } from "./useGetUserInfo"
export const useAddTransaction =()=>{
    // this hook is for adding transations
    // function for getting user info and also reference for the required data base
    const {userID}= useGetUserInfo()
    const transactionCollectionRef = collection(db,"transactions")
    // function for adding the transaction to the data base
    const addTransaction = async ({title,description,transactionAmount,transactionType}) => {
        await addDoc(transactionCollectionRef,{
            userID,
            title,
            description,
            transactionAmount,
            transactionType,
            createdAt:serverTimestamp()
        })
    };
    return {addTransaction}
}