import React from 'react';
import ExpenseItem from './ExpenseItem';


const ExpenseList = () => {
    const expenses = [
        { id: 12345, name: 'Shopping', cost: 50 },
        { id: 12345, name: 'Holiday', cost: 300 },
        { id: 12345, name: 'Transportation', cost: 30 },
        { id: 12345, name: 'Fuel', cost: 40 },
        { id: 12345, name: 'Childcare', cost: 40 }
    ];

    return (
        <ul className='list-group'>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
            ))}
        </ul>
    )
}

export default ExpenseList;
