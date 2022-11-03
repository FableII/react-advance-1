import { useEffect, useReducer } from "react";

const UseReducerTester = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0,}); 

  const  { count } = state;

  useEffect(()=>{
    const id = setInterval(()=>{
      dispatch({type: 'plus'});
    }, 1000);
    return () => clearInterval(id);
  },[])

  function reducer(state, action) {
    switch (action.type) {
      case "plus":
        return {
          ...state,
          count: state.count + 1
        };
      case "minus":
        return {
          ...state,
          count: state.count - 1
        };
      default: {
        return state;
      }
    }
  }

  return (
    <>
      <h5>{count}</h5>
      <button onClick={()=> dispatch({type: 'plus'})}>INCREMENT</button>
      <button onClick={()=> dispatch({type: 'minus'})}>DECREMENT</button>
    </>
  );
};

export default UseReducerTester;
