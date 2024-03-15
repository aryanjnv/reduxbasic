
import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, increaseCounter, decrement,toggleCounter } from './store';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch(increment());
  };

  const increaseHandler = () => {
    dispatch(increaseCounter(5)); 
  };

  const decrementHandler = () => {
   dispatch(decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(toggleCounter()); 
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
