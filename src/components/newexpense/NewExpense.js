import React from "react";
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
//ppoint the function to pass expense
    return (<div className="new-expense"><ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
};

export default NewExpense;
