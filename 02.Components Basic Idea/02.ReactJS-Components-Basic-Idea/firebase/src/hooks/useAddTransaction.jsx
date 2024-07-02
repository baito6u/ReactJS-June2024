import {addDoc, collection, serverTimestamp} from "firebase/firestore"
import {db} from "../config/firebase"

export const useAddTransaction = () => {
    const transactionCollectionRef = collection(db, "transactions")
    const addTransaction = async ({description, trasactionAmount, trasactionType}) => {
        await addDoc(transactionCollectionRef, {
            userId: "",
            description,
            trasactionAmount,    
            trasactionType,
            createdAt: serverTimestamp(),  
        });
    };
    
    return {addTransaction};
}