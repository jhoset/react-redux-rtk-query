import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy, } from './store/slices/counter/counterSlice';

function App() {
  const { value } = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter: {value}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(incrementBy(10))}>
          Increment by 2
        </button>
      </div>
    </>
  )
}

export default App
