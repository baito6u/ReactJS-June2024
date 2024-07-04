import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";

import "./styles.css"

export const Tracker = () => {
  const { addTransaction } = useAddTransaction();
  const { transactions } = useGetTransactions();

  const [description, setDescription] = useState("");
  const [trasactionAmount, setTrasactionAmount] = useState(0);
  const [trasactionType, setTrasactionType] = useState("expense");

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({ description, trasactionAmount, trasactionType });
  };

  return (
    <>
      <div className="tracker">
        <div className="container">
          <h1>Expense Tracker</h1>
          <div className="balance">
            <h3>Your Balance</h3>
            <h2>$0.00</h2>
          </div>
          <div className="summary">
            <div className="income">
              <h4>Income</h4>
              <p>$0.00</p>
            </div>
            <div className="expenses">
              <h4>Expenses</h4>
              <p>$0.00</p>
            </div>
          </div>
          <form className="add-transaction" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Descriptoin"
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              required
              onChange={(e) => setTrasactionAmount(e.target.value)}
            />
            <input
              type="radio"
              id="expense"
              value="expense"
              checked={trasactionType === "expense"}
              onChange={(e) => setTrasactionType(e.target.value)}
            />
            <label htmlFor="expense">Expense</label>
            <input
              type="radio"
              id="income"
              value="income"
              checked={trasactionType === "income"}
              onChange={(e) => setTrasactionType(e.target.value)}
            />
            <label htmlFor="income">Income</label>

            <button type="submit">Add Transaction</button>
          </form>
        </div>
      </div>
      <div className="transactions">
        <h3>Transactions</h3>
        <ul>
          {transactions.map((transaction) => {
            const {createdAt, description, trasactionAmount, trasactionType } =
              transaction;

            return (
              <li key={createdAt}>
                <h4>{description}</h4>
                <p>${trasactionAmount} - <label style={{color: trasactionType == "expense" ? "red" : "green"}}>{trasactionType}</label></p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
