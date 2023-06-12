import React from 'react'
import Card from './card'
import { useContext } from 'react'
import { ExpenseTrackerContext } from './context'
export default function History({transactions}) {
    const {history} = useContext(ExpenseTrackerContext)
    console.log(history)
  return (
    <div className='flex flex-col mt-5 w-full ' >
        <h1 className=' font-sans font-bold py-2 border-b-2' >History</h1>
        <div className="flex flex-col w-full">
            {
                history.length >= 1 ? (history.map((item,idx) => (
                   <Card key={idx} item={item} />
                ))) : (<>
                    <p className='text-lg text-red-500' >No transactions yet !!</p>
                </>)
            }
        </div>
    </div>
  )
}
