import React, {useState} from 'react'
import './ExpenseForm.css'


const ExpenseForm = () =>{

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }
    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }
    const dateChangeHandler = (e) => {
        setDate(e.target.value)
    }

    const submitHandler = (e) =>  {
        e.preventDefault();
        let data = {
            enteredTitle: title,
            enteredAmount: amount,
            enteredDate: new Date(date),
        }
        console.log(data);
    }

    return <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input
                id="title"
                type="text"
                onChange={titleChangeHandler}
            />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input
                type="number"
                min='0.01'
                step='0.01'
                onChange={amountChangeHandler}
            />
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input
                type="date"
                min="2021-01-01"
                max="2022-12-21"
                onChange={dateChangeHandler}
            />
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
    </div>
</form>
}

export default ExpenseForm