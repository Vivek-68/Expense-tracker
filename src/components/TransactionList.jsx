import React from 'react'

const TransactionList = () => {
  return (
    <div className='transaction-list-container'>
        <h2>History</h2>
        <hr />
        <div className='transaction-card-max'>
        <div className='transaction-card'>
            <p>Cash</p>
            <p>-$250</p>
        </div>
        <span className="line-end"></span>
        </div>

    </div>
  )
}

export default TransactionList