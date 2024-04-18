import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, Currency, remaining} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upperLimit = 20000;
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && newBudget <= upperLimit) {
            dispatch({ type: "SET_BUDGET", payload: newBudget});
        } else if (newBudget > upperLimit) {
            alert("The budget cannot exceed "+Currency+"20.000")
        } else if (remaining < 10) {
            alert("You cannot reduce the budget value lower than the spending")
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {Currency}</span>
<input 
    className="w-50 ms-1"
    required
    type="number"
    id="cost" 
    step="10" 
    value={newBudget} 
    onKeyDown={handleKeyDown}
    onChange={handleBudgetChange}
    >
</input>
</div>
    );
};
export default Budget;