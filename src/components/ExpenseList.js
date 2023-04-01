import React, { useContext, useEffect, useState} from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';


const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

    useEffect(() => {
        setfilteredExpenses(expenses);
    }, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value.toLowerCase())
		);
		setfilteredExpenses(searchResults);
	};

    return (
        <>
            <input
                type='text'
                className='form-control mb-3'
                onChange={handleChange}
            />

            <ul className='list-group'>
                {filteredExpenses.map((expense) => (
                    <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
                ))}
            </ul>
        </>

    )
}

export default ExpenseList;
