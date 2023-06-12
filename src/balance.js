import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ExpenseTrackerContext } from './context'
export default function Balance() {
  const {balance} = useContext(ExpenseTrackerContext)
  const [bal , setBal] = useState()
  useEffect(() => {
    setBal(balance)
  })
  console.log(bal)
  return (
    <div className="w-full mt-5 mx-0 flex flex-col">
          <p className='text-2xl font-sans text-black'>Your Balance</p>
          <p className='font-mono font-bold text-3xl' >$ {bal}</p>
        </div>
  )
}
