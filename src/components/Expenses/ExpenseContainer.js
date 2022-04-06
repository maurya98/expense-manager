import Expenses from "./Expenses"
import "./ExpenseContainer.css"
import Card from "../UI/Card"
function ExpenseContainer(props){
    return (
        <Card className="container">
        <Expenses id={props.data[0].id} title={props.data[0].title} date={props.data[0].date} amount={props.data[0].amount} />
        <Expenses id={props.data[1].id} title={props.data[1].title} date={props.data[1].date} amount={props.data[1].amount} />
        <Expenses id={props.data[2].id} title={props.data[2].title} date={props.data[2].date} amount={props.data[2].amount} />
        <Expenses id={props.data[3].id} title={props.data[3].title} date={props.data[3].date} amount={props.data[3].amount} />
        </Card>
      );
}

export default ExpenseContainer;