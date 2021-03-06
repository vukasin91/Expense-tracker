import "../Expenses/ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const clikc
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onclick={}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
