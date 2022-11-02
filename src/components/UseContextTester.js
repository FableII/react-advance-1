import React from "react";
import { useContext } from "react";

const NumberContext = React.createContext();

const UseContextTester = () => {
    return (
        <NumberContext.Provider value={42}>
            <div>
                <Display />
            </div>
        </NumberContext.Provider>
    )
}

const Display = () => {
    const value = useContext(NumberContext)
    return(
        <div>The answer is {value}</div>
    )
}

export default UseContextTester