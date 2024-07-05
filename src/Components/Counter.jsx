import React from "react";
import "./Counter.css";
import { useSelector ,useDispatch } from "react-redux";
import { increment,decrement,reset } from "../Redux/count";


const Counter = () => {
    const {count} = useSelector((state)=> state.count)
    const dispatch = useDispatch()
    console.log(count,'This is count')
  return (
    <div>
      <h1>Counter</h1>
      <div className="container">
        <h3>{count}</h3>
        <div className="counter-btn">
          <button onClick={()=> dispatch(decrement())}>decrement</button>
          <button onClick={()=> dispatch(reset())}>Reset</button>
          <button onClick={()=> dispatch(increment())}>increment</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
