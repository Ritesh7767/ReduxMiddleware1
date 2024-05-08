import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, DECREMENT_BY, INCREMENT, INCREMENT_BY } from './redux/coutnerSlice'

function App() {

  let count = useSelector(state => state.counterSlice)
  console.log(count)
  const dispatch = useDispatch()

  const handleClick = operation => {
    switch(operation){
      case 1 : return dispatch(INCREMENT(1))
      case -1 : return dispatch(DECREMENT(-1))
      case 5 : return dispatch(INCREMENT_BY(5))
      default : dispatch(DECREMENT_BY(5))
    }
  }

  return (
    <>
      <h1>Counter Value :- {count} </h1>
      <button onClick={() => handleClick(1)}>+</button>
      <button onClick={() => handleClick(-1)}>-</button>
      <button onClick={() => handleClick(5)}>+ by 5</button>
      <button onClick={() => handleClick(-5)}>- by 5</button>
    </>
  )
}

export default App
