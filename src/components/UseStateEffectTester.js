import { useState, useEffect } from "react";


const UsecountEffectTester = () => {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue);
    const [message, setMessage] = useState('Hi there, How are you ?');

    let counter = count;

    const increment = () => {
        setCount(counter+=1)
    }

    const decrement = () => {
        setCount(counter-=1)
    }

    const reset = () => {
        setCount(counter = initialValue)
    }

    useEffect(()=>{
        console.log('Trigger use effect hook');

        setTimeout(()=>{
            setMessage("I'm fine, thanks for asking");
        }, 2000)
    })

        return (
            <div>
            <h2>{message}</h2>
            <h3>Счетчик: {counter}</h3>
            <button onClick={()=>{increment()}}> Плюс </button>
            <button onClick={()=>{decrement()}}> Минус </button>
            <button onClick={()=>{reset()}}> Сброс </button>
            </div>
        )
    
}

export default UsecountEffectTester