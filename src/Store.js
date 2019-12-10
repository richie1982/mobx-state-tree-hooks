import React, { createContext } from 'react'
import Invoice from './models/Invoice'
import makeInspectable from 'mobx-devtools-mst'
// import { onPatch } from "mobx-state-tree";


const store = Invoice.create({currency: "GBP"})
export const CTX = createContext()

export const Store = ({children}) => {

    return(
        <CTX.Provider value={store}>
            {children}
        </CTX.Provider>
    )
}

// onPatch(store, patch => {
//     console.log(patch)
// }) 

makeInspectable(store)