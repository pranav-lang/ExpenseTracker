// import { createContext, useContext, useEffect, useState } from "react";
// import expenseContext from "./index";
// const value = {
//     amount : 0,
//     balance  : 0,
//     expense : 0,
//     income : 0
// }


// export const updateAccount = (amount,type) => {
//             if(type === '+') {
//                 value.income = value.income + amount
//                 value.balance = value.balance + amount
//             }else{
//                 value.expense  = value.expense + amount
//                 value.balance  = value.balance - amount
//             }
//             return {...value,amount}
// }

// export const ExpenseTrackerProvider = ({children}) => {
//        return(
//         <expenseContext.Provider value={{updateAccount,value}}>
//             {children}
//         </expenseContext.Provider>
//        )
// }

