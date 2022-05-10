import ExpenseContainer from "./components/Expenses/ExpenseContainer";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Netflix",
    date: new Date(2021, 7, 14),
    amount: 199
  },
  {
    id: "e2",
    title: "Amazon Prime",
    date: new Date(2021, 8, 15),
    amount: 1499
  },
  {
    id: "e3",
    title: "Eros Now",
    date: new Date(2021, 9, 16),
    amount: 999
  },
  {
    id: "e4",
    title: "Disney+",
    date: new Date(2021, 10, 17),
    amount: 1499
  }
];
function App() {
const [expenses,setExpense] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = expense => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
    <ExpenseContainer data={expenses}></ExpenseContainer>
    </div>
  );
}

export default App;
