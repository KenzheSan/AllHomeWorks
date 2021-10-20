import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../../UI/Card'
import ExpensesFilter from './ExpensesFilter'

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2022')

	const filterChangeHundler = (selectedYear) => {
		console.log(selectedYear)
		setFilteredYear(selectedYear)
	}
    const showExpense = props.expenses.filter(item =>{
        return item.date.getFullYear().toString() === filteredYear
    })
	// const showExpense =(props) =>{
	//     const expenseData = filteredYear
	//     if(expenseData){
	//         return
	//     }
	// }

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHundler}
			/>
			{/* <ExpenseItem
				title={props.expenses[0].title}
				amount={props.expenses[0].amount}
				date={props.expenses[0].date}
			/>
			<ExpenseItem
				title={props.expenses[1].title}
				amount={props.expenses[1].amount}
				date={props.expenses[1].date}
			/>
			<ExpenseItem
				title={props.expenses[2].title}
				amount={props.expenses[2].amount}
				date={props.expenses[2].date}
			/> */}
			{showExpense.map((el, id) => {
				return (
					<ExpenseItem
						title={el.title}
						amount={el.amount}
						date={el.date}
						key={el.id}
					/>
				)
			})}
		</Card>
	)
}

export default Expenses
