import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <div>
      <form>
        <div className="newExpenseControls">
          <div className="newExpenseControl">
            <label>Title</label>
            <input type="text" />
          </div>
          <div className="newExpenseControl">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" />
          </div>
          <div className="newExpenseControl">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2024-12-31" />
          </div>
        </div>
        <div className="newExpenseAction">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
