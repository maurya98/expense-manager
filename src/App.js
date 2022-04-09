import ExpenseContainer from "./components/Expenses/ExpenseContainer";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
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

  const addExpenseHandler = expenses => {
    console.log(expenses);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
    <ExpenseContainer data={expenses}></ExpenseContainer>
    </div>
  );
}

export default App;
