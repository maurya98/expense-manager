import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //Using Multiple State {Better to use multiple state approach}
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Also you can group states by creating objects
  /*
  const [userInput, setUserInput] = useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
  });
*/
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*
    setUserInput((prevState) => {
      return { ...userInput, enteredTitle: event.target.value };
    });
    */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); 
    /*setUserInput({
      ...userInput, //this is done because other data does not get lost so we copy the other value useing ... operator and then we override enteredTitle
      enteredAmount: event.target.value,
    });
    setUserInput((prevState) => {
      return { ...userInput, enteredAmount: event.target.value };
    });
    */
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /*setUserInput((prevState) => {
      return { ...userInput, enteredDate: event.target.value };
    });
    */
  };
  const submitHandler = (event) => {
    event.preventDefault(); // prevent page to reload
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData); 
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="newExpenseControls">
          <div className="newExpenseControl">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="newExpenseControl">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="newExpenseControl">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2024-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="newExpenseAction">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
