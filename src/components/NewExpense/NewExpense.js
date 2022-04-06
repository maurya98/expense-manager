import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
const NewExpense = () => {
  return (
    <Card className="AddExpenseContainer">
      <div className="addExpenseMessage">Add your Expenses!!</div>
      <ExpenseForm />
    </Card>
  );
};

export default NewExpense;
