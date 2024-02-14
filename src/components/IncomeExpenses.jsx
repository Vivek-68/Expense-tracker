import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(i => i.amount);
  const income = amounts.filter(i => i>0).reduce((acc,i) => (acc+i),0).toFixed(2);
  const expense = (amounts.filter(i=>i<0).reduce((acc,i) => (acc+i),0)*-1).toFixed(2);
  return (
    <div className='income-expenses-container'>
        <div className='income'>
            <h2>Income</h2>
            <h3 style={{color:'green'}}>+${income}</h3>
        </div>
         <div className='line-between'></div>
        <div className="expenses">
            <h2>Expenses</h2>
            <h3 style={{color:'red'}}>-${expense}</h3>
        </div>

    </div>
  )
}

export default IncomeExpenses