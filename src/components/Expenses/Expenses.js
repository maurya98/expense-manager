import React , {useState} from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function Expenses(props) {
    
    const [title, setTitle] = useState(props.title); //useState return 2 value i.e the current value and a function to update the value
    const clickHandler =() =>{
        setTitle("Update"); //pass the value to update the value of the title
    }
  return (
    <Card className="expenseCard">
      <ExpenseDate date_={props.date} />
      <ExpenseItem title={title} />
      <div className="ExpensePrice">
        <button className="button" onClick={clickHandler}>₹{props.amount}/month</button>
      </div>
    </Card>
  );
}

export default Expenses;
