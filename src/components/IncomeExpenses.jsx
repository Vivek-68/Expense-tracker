import React from 'react'

const IncomeExpenses = () => {
  return (
    <div className='income-expenses-container'>
        <div className='income'>
            <h2>Income</h2>
            <h3 style={{color:'green'}}>+$0.00</h3>
        </div>
         <div className='line-between'></div>
        <div className="expenses">
            <h2>Expenses</h2>
            <h3 style={{color:'red'}}>-$0.00</h3>
        </div>

    </div>
  )
}

export default IncomeExpenses