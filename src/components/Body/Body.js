import { useDispatch, useSelector } from "react-redux";
import "./body.css";
import { removeItem } from "../../store/slice";
export default function Body({}) {
  let dsiaptch = useDispatch();
  const store = useSelector((store) => store.Transactions);
  return (
    <>
      <div id="box">
        <h1 id="history">Transaction History</h1>
        <table>
          {store.transaction.map((trans, index) => {
            console.log(trans, "alskdjf");
            return (
              <tr className={trans.type}>
                <td>{trans.purpose}</td>
                <td>{trans.amount}</td>
                <td>
                  <button
                    onClick={() => {
                      dsiaptch(removeItem(trans.id));
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
