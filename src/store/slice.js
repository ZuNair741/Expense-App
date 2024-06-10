import { createSlice } from "@reduxjs/toolkit";

const Transaction = createSlice({
  name: "AddTransaction",
  initialState: {
    balance: 0,
    transaction: [],
    income: 0,
    expense: 0,
  },
  reducers: {
    removeItem: (state, action) => {
      const restTransaction = state.transaction.filter(
        (oldTransaction) => oldTransaction.id !== action.payload
      );
      const deleteTransaction = state.transaction.find(
        (transaction) => transaction.id === action.payload
      );
      state.balance =
        deleteTransaction.amount > 0
          ? state.balance - Math.abs(deleteTransaction.amount)
          : state.balance + Math.abs(deleteTransaction.amount);
      state.expense =
        deleteTransaction.amount < 0
          ? state.expense - Math.abs(deleteTransaction.amount)
          : state.expense;
      state.income =
        deleteTransaction.amount > 0
          ? state.income - Math.abs(deleteTransaction.amount)
          : state.income;
      state.transaction = restTransaction;
    },
    addTransaction: (state, action) => {
      state.balance += action.payload.amount;
      state.transaction.push(action.payload);
      if (action.payload.amount > 0) {
        state.income += action.payload.amount;
      } else {
        state.expense -= action.payload.amount;
      }
    },
  },
});
export const { addTransaction, removeItem } = Transaction.actions;
export default Transaction;
