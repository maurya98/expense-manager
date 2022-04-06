import "./ExpenseDate.css"
import Card from '../UI/Card'

function ExpenseDate(props){
    const month = props.date_.toLocaleString('en-US',{month:'long'});
    const day = props.date_.toLocaleString('en-US',{day : '2-digit'});
    const fullYear = props.date_.getFullYear();

    return <Card className="dateBox">
        <div className="month">{month}</div>
        <div className="year">{fullYear}</div>
        <div className="date_date">{day}</div>    
    </Card>
}

export default ExpenseDate;