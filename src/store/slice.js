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
      state.transaction.splice(action.payload, 1);
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
