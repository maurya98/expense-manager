import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData
    };
    props.onAddExpense(expenseData);
  };
  return (
    <Card className="AddExpenseContainer">
      <div className="addExpenseMessage">Add your Expenses!!</div>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </Card>
  );
};

export default NewExpense;
