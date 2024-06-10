import { useSelector } from "react-redux";
import "./Header.css";
import { randomIntFromInterval } from "../utils/ramdonNumberGenerator";
import { useEffect } from "react";

// useDispatch ( function <--->slice wala function* (parameter: Outgoing Data))
// useSelector(()=>{})
// useSelector((parameter my aata h store)=>{ return krna hota h apni slice ka path,  jo b slice chiye ho })

export default function Heading(props) {
  console.log(props.setParentData, "Heading props");
  const transactions = useSelector((store) => store.Transactions);

  const ramdomArrayName = ["Mubashar", "Zunair", "Ali", "Malik", "Ajay"];

  useEffect(() => {
    setInterval(() => {
      props.setParentData(
        ramdomArrayName[randomIntFromInterval(0, ramdomArrayName.length)]
      );
    }, 3000);
  }, []);

  return (
    <div id="mainBox">
      <h1>Expense Tracker By {props.parent}</h1>
      <h1 id="blncBox">Current Balance</h1>
      <h1 id="blnc">${transactions.balance}</h1>
      <div id="showBalance">
        <div>
          <h1>INCOME</h1>
          <h1 id="income">${transactions.income}</h1>
        </div>
        <div id="expnsBox">
          <h1>EXPENSE</h1>
          <h1 id="expense">${transactions.expense}</h1>
        </div>
      </div>
    </div>
  );
}
