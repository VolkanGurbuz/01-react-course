import Expenses from "./components/Expenses";


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
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
