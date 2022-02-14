import Expenses from "./components/expenses/Expenses";
import React from "react";
import NewExpense from "./components/newexpense/NewExpense";

//arrow function

const App = () => {


    const expenses = [{id: 'e', title: 'new desk', amount: 450, date: new Date(2021, 5, 12)}, {
        id: 'e2',
        title: 'new des2k',
        amount: 410,
        date: new Date(2021, 5, 3)
    }];
    //alternative

    // return React.createElement('div', {}, React.createElement('h2', {}, 'Lets get started'), React.createElement(Expenses, {items: expenses}))

    const addExpenseHandler = expense => {
        console.log("in app.js");
        console.log(expense);
    }


    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    )
        ;
}

export default App;
