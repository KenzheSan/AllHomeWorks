import React,{useState} from "react"
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
    const Magic = () =>{
        const [changes,setChanges] = useState(false)
        return (
            <div>
                <button onClick={()=>{
                    setChanges(true)
                }}>Note the Expense</button >
                <button onClick={()=>{
                    setChanges(false)
                }}>Hide the Expense</button>
                {changes && <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHundler}/>}
            </div>
        )
    }
    return <div className='new-expense'>
        <Magic/>
    </div>
}

export default NewExpense;