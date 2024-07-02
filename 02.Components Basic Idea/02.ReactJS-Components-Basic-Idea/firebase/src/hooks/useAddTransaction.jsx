import {addDoc, collection, serverTimestamp} from "firebase/firestore"
import {db} from "../config/firebase"

export const useAddTransaction = () => {
    const transactionCollectionRef = collection(db, "transactions")
    const addTransaction = async () => {
        await addDoc(transactionCollectionRef, {
            userId:"",
            description: "",
            trasactionAmount: 0,    
            trasactionType: "",
            createdAt: serverTimestamp(),  
        });
    };
    
    return {addTransaction};
}