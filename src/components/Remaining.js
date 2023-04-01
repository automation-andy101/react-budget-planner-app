import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';


const Remaining = () => {
  const { budget, expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  return (
    <div className='alert alert-success'>
      <span>
        Remaining: £{budget - totalExpenses}
      </span>
    </div>
  )
}

export default Remaining;
