//js code will tranform to jsx code on the browser
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
import React, {useState} from "react";

function ExpenseItem(props) {

    //first ppointer adjust the element, function we can later to call to change
    const [title, setTitle] = useState(props.title);

    const clickHandle = () => {
        setTitle("Updated");
    };

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                <button onClick={clickHandle}>Change Title
                </button>
            </Card></li>);
}


export default ExpenseItem;
