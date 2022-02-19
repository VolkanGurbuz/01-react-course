import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    //new array wil return original array will not touch
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    //set id for individual elements if no any id , we can use (expense. index)
    //function to pass on map

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                {filteredExpenses.map((expense) => (<ExpenseItem key={expense.id} title={expense.title}
                                                                 amount={expense.amount}
                                                                 date={expense.date}/>))}

            </Card></div>);

}


export default Expenses;
