import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";

import { useGetUserInfo } from "./useGetUserInfo";

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userID } = useGetUserInfo();
  const addTransaction = async ({
    description,
    trasactionAmount,
    trasactionType,
  }) => {
    await addDoc(transactionCollectionRef, {
      userID,
      description,
      trasactionAmount,
      trasactionType,
      createdAt: serverTimestamp(),
    });
  };

  return { addTransaction };
};
