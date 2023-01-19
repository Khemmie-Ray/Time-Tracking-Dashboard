import React from "react";
import { useState } from "react";
import { createContext } from "react";
const Context = createContext()
import data from "./data";

function ContextProvider({children}) {
    const [dataInfo, setDataInfo] = useState([])
    
    const forData = () => data.map(item => {
        const {id, title, image, timeframes} = props
        setDataInfo(item.props)
    })
    console.log(dataInfo)

    return (
        <Context.Provider value={{dataInfo}}>
            {children}
        </Context.Provider>
    )
}

// export { ContextProvider, Context }
