import ExpenseItem from "./components/ExpenseItem";


function App() {
    const expenses = [{id: 'e', title: 'new desk', amount: 450, date: new Date(2021, 5, 12)}, {
        id: 'e2',
        title: 'new des2k',
        amount: 410,
        date: new Date(2021, 5, 3)
    }];


    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
        </div>
    );
}

export default App;
