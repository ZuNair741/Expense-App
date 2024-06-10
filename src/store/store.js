import { configureStore } from "@reduxjs/toolkit";
import Transaction from "./slice";

const Store = configureStore({
  reducer: { Transactions: Transaction.reducer, },
});
export default Store;
