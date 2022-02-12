import Expenses from "./components/expenses/Expenses";
import React from "react";


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

    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses items={expenses}/>
        </div>
    )
        ;
}

export default App;
