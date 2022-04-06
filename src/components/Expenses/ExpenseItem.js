import "./ExpenseItem.css"


function ExpenseItem(props){
    return <div className="itemTitle">{props.title}</div>
}

export default ExpenseItem;