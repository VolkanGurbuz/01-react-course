import React, {useState} from "react";
import "./ExpenseForm.css"


const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    //multiple states pair component
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // instead of one state

    // const [userInput, setUserInput] = useState({enteredTitle: '', enteredAmount: '', enteredDate: ''});


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        //takes object, pulls out all the key value pairs, adds them to this new object
        // setUserInput({...userInput, enteredTitle: event.target.value});
        //will receive the previous state snapsshot
        //this approach above with many of states could be depending on an outdated or incorrect snapshots
        //react will always will get latest snapshots safe function below
        // setUserInput((prevState) => {
        //     //return new state
        //     return {...prevState, enteredTitle: event.target.value}
        // })
    };

    const amountChangeHandle = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({...userInput, enteredAmount: event.target.value});
    };

    const dateChangeHandle = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({...userInput, enteredDate: event.target.value});
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="text" onChange={amountChangeHandle}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandle}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
};


export default ExpenseForm;
