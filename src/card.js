import React from 'react'

export default function Card({item}) {
  return (
    <div className={`flex justify-between  border-b-8 ${item?.type == '+' ? "border-b-green-600" :  "border-b-red-600"} w-full mb-4 bg-white p-3`}>
        <h1>{item?.product}</h1>
        <h2>$ {item?.amount}</h2>
        {/* <div className="h-full w-4  bg-green-500 "></div> */}
    </div>
  )
}
