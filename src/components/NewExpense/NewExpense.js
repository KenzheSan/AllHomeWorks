import React from "react"
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const onSaveExpenseDataHundler = data =>{
        let expenseData = {
            ...data,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHundler}/>
    </div>
}

export default NewExpense;