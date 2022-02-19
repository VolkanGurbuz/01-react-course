import Expenses from "./components/expenses/Expenses";
import React, {useState} from "react";
import NewExpense from "./components/newexpense/NewExpense";


const DUMMY_EXPENSES = [{id: 'e', title: 'new desk', amount: 450, date: new Date(2020, 5, 12)}, {
    id: 'e21',
    title: 'new des2k',
    amount: 200,
    date: new Date(2021, 8, 3)
}, {
    id: 'e233',
    title: 'new des2k',
    amount: 200,
    date: new Date(2021, 1, 3)
}, {
    id: 'e23',
    title: 'new des2k',
    amount: 100,
    date: new Date(2021, 1, 3)
}];

//arrow function

const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


    //alternative

    // return React.createElement('div', {}, React.createElement('h2', {}, 'Lets get started'), React.createElement(Expenses, {items: expenses}))

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>
    );

}


export default App;
