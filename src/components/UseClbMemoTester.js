import { useState, useCallback, useMemo } from "react";
import '../App.css'

const add = (fst, snd) => {
    console.log(fst); //ПОЧЕМУ ВЫВОДИТ В КОНСОЛЬ ПРИ ИСПОЛЬЗОВАНИИ EXTRA функции?
    console.log(snd); //ПОЧЕМУ ВЫВОДИТ В КОНСОЛЬ ПРИ ИСПОЛЬЗОВАНИИ EXTRA функции?
    return (fst + snd)
};

const UseCallbackTester = () => {
  
    const [firstVal, setFirstVal] = useState(10);
    const increment = () => setFirstVal(num => num + 1);
    
    const [secondVal, setSecondVal] = useState(20);
    const decrease = () => setSecondVal(num => num - 1);
    
    const [extraVal, setExtraVal] = useState(10000);
    const modifyExtralVal = () => setExtraVal(num => num - 1);
    
    const additionResult = useCallback(add(firstVal, secondVal), [firstVal, secondVal]);
      
    return (
      <>
      <h3>UseCallback</h3>
        <section className="box">
          <span>{firstVal}</span>
          <button onClick={increment}>+ 1</button>
        </section>
        <section className="box">
          <span>{secondVal}</span>
          <button onClick={decrease}>- 1</button>
         </section>
        <div className="box">Result: {additionResult}
        </div>
        <section className="box extra">
          <span>{extraVal}</span>
          <button onClick={modifyExtralVal}>- 1</button>
         </section>
      </>
    )
  }

  const UseMemoTester = () => {
    const [num, setNum] = useState(0);
    
    const getFactorial = val => {
      if (val === 0) return 1; 
      return val * getFactorial(val - 1);
    };
    
    const calculatedFactorial = useMemo(() => {
      return num ? getFactorial(num) : 0; // //Почему при значении 0, падает в бесконечный цикл ? (обычно использование других хуков внутри хука useMemo может привести к зацикливанию)
    }, [num]);
    
    return (
      <div>
        <h3>UseMemo</h3>
        <section className="box">
          <div>Enter a number:</div>
          <input value={num} onChange={(e) =>
            setNum(e.target.value)}
          />
        </section>
        <div className="box">Factorial: {calculatedFactorial}</div>
      </div>
    );
  }

export {UseCallbackTester, UseMemoTester}