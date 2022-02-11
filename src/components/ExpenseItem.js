//js code will tranform to jsx code on the browser
import './ExpenseItem.css';


function ExpenseItem() {
    return (<div className="expense-item">
        <div>
            March 28th 2022
        </div>
        <div className="expense-item__description">
            <h2>Car Insurance</h2>
            <div className="expense-item__price">$294</div>
        </div>
    </div>);
}


export default ExpenseItem;
