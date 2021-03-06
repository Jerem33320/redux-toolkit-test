import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch();
    const [incAmount, setIncAmount] = useState(0);
    const addValue = Number(incAmount) || 0;

    const resetAll = () => {
        setIncAmount(0);
        dispatch(reset())
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input 
                value={incAmount} 
                onChange={e => setIncAmount(e.target.value)}
                type="text"
            />

            <div>
            <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
            <button onClick={() => dispatch(resetAll())}>Reset All</button>
            </div>
        </section>
    )
}

export default Counter