import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const TransactionList = () => {
  const {transactions,deleteTransaction} = useContext(GlobalContext);
  return (
   
    <div className='transaction-list-container'>
    <h2>History</h2>
    <hr />
    { transactions.map((item) => {
      return  <div key={item.id} className='transaction-card-max'>
       
      <div className='transaction-card'>
        <div className="flex1">
        <button className='delete-btn' onClick={()=>deleteTransaction(item.id)}>X</button>
          <p>{item.text}</p>
        </div>
      
          <p>{item.amount<0 && '-'}${Math.abs(item.amount)}</p>
      </div>
      <span className="line-end" style={item.amount>0?{borderLeft:'3px solid green'}:{}}></span>
      </div>
    })
  }
   

</div>
   
    
  )
}

export default TransactionList