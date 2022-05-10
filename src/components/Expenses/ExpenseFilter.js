import './ExpenseFilter.css';
const ExpenseFilter = (props) => {
    //const [selectedYear, setSelectedYear]=useState('2022');
const yearFilterHandler = (event) => {
   // setSelectedYear(event.target.value);
   // console.log(event.target.value);
    props.onChangeFilter(event.target.value);
}
    return <div className="filterContainer">
        <div className="filterLable">
            Filter Your Expense By Year
        </div>
        <div className="filterOption">
            <select className="filterSelect" value={props.selected} onChange={yearFilterHandler}>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    </div>
}

export default ExpenseFilter;