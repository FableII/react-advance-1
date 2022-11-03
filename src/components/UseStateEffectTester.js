import { useState, useEffect } from "react";
import React from "react";

/* const WindowWidthSize = () => {
    const [windowWidthSize, setWindowWidthSize] = React.useState(0);
  
    React.useEffect(() => {
      function handleResize(e) {
        const { width } = document.body.getBoundingClientRect();
  
        setWindowWidthSize(Math.ceil(width));
      }
  
      window.addEventListener('resize', handleResize)
    }, []);
  
    return (
      <h3>
        The window size {windowWidthSize} pixels
      </h3>
    )
  }; */

  const WindowWidthSize = () => {
    const [windowWidthSize, setWindowWidthSize] = React.useState(0);
  
    React.useEffect(() => {
      function handleResize(e) {
        const { width } = document.body.getBoundingClientRect();
  
        setWindowWidthSize(Math.ceil(width));
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <h3>
        The window size {windowWidthSize} pixels
      </h3>
    )
  };


const UsecountEffectTester = () => {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue);
    const [message, setMessage] = useState('Hi there, How are you ?');
    const [showWindowWidthSize, setShowWindowWidthSize] = useState(true);

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

    useEffect(() => {
        console.log('trigger use effect hook');
    
        setTimeout(() => {
          setMessage("I'm fine, thanks for asking.");
        }, 5000)
      }, []);

        return (
            <div>
            <h3>{message}</h3>
            <h3>Счетчик: {counter}</h3>
            <button onClick={()=> increment()}> Плюс </button>
            <button onClick={()=> decrement()}> Минус </button>
            <button onClick={()=> reset()}> Сброс </button>
            <div>
                {showWindowWidthSize && <WindowWidthSize/>}
                <button onClick={() => setShowWindowWidthSize(false)}>Magic Button</button>
            </div>
            </div>
        )
    
}

export default UsecountEffectTester