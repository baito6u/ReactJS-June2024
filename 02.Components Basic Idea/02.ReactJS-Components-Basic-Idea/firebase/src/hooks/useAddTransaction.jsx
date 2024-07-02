import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";

import { useGetUserInfo } from "./useGetUserInfo";

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userId } = useGetUserInfo();
  const addTransaction = async ({
    description,
    trasactionAmount,
    trasactionType,
  }) => {
    await addDoc(transactionCollectionRef, {
      userId,
      description,
      trasactionAmount,
      trasactionType,
      createdAt: serverTimestamp(),
    });
  };

  return { addTransaction };
};
