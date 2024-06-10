import { useForm } from "react-hook-form";
import "./Footer.css";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../store/slice";
export default function Footer() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const addTrans = (details) => {
    details.amount = +details.amount;
    if (details.amount > 0) {
      details.type = "income";
    } else {
      details.type = "expense";
    }
    dispatch(addTransaction(details));
    reset();
  };

  return (
    <>
      <form id="transactionBox" onSubmit={handleSubmit(addTrans)}>
        <h1 id="heading">Add New Transaction</h1>
        <h2>Purpose</h2>
        <input
          {...register("purpose", { required: true })}
          id="textBox"
          type="text"
        />
        <h2>Amount</h2>
        <input
          {...register("amount", { required: true })}
          id="amountBox"
          type="number"
        />
        <button>Add Transaction</button>
      </form>
    </>
  );
}
