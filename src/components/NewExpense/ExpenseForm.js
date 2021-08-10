import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [formValue, setFormValue] = useState();
    const titleChangeHandler = (event) => {console.log(event.value)};
    const amountChangeHandler = (event) => {console.log(event.value)};
    const dateChangeHandler = (event) => {console.log(event.value)};
    
    const onSubmitHandler = () => {
            //setFormValue(form.value);
            console.log(formValue);
    }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onSubmit={onSubmitHandler}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
