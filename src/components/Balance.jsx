import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const res = transactions.reduce((acc,item) => (acc+item.amount),0).toFixed(2);
  return (
    <div className='balance-container'>
    <h1>Your Balance</h1>
    <h2>{res<0 && '-'}${Math.abs(res)}</h2>
    </div>
  );
}
export default Balance

