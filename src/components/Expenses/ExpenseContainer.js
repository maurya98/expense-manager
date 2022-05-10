import Expenses from "./Expenses";
import "./ExpenseContainer.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseContainer(props) {
  const [filteredYear, setFilterYear] = useState('2016');
  const filterChangeHandler = (selectedYear) => {
    console.log(props.data);
    setFilterYear(selectedYear);
    console.log(selectedYear);
  };
  return (
    <Card className="container">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {console.log(props.data)}
      {
      props.data.map( (expense) => 
        <Expenses
        id={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      />
      )
      };
{/*     
      <Expenses
        id={props.data[0].id}
        title={props.data[0].title}
        date={props.data[0].date}
        amount={props.data[0].amount}
      />
      <Expenses
        id={props.data[1].id}
        title={props.data[1].title}
        date={props.data[1].date}
        amount={props.data[1].amount}
      />
      <Expenses
        id={props.data[2].id}
        title={props.data[2].title}
        date={props.data[2].date}
        amount={props.data[2].amount}
      />
      <Expenses
        id={props.data[3].id}
        title={props.data[3].title}
        date={props.data[3].date}
        amount={props.data[3].amount}
      /> */}
    </Card>
  );
}

export default ExpenseContainer;
