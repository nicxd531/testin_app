import {addDoc,collection,serverTimestamp} from "firebase/firestore"
import {db} from "../config/firebase-config"
import { useGetUserInfo } from "./useGetUserInfo"
export const useAddTransaction =()=>{
    const {userID}= useGetUserInfo()
    const transactionCollectionRef = collection(db,"transactions")
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