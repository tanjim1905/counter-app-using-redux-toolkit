import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../features/Slice/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())} disabled={count <= 0}>
        Decrement
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
