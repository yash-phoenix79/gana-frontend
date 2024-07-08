import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { increment, decrement, incrementByAmount } from '../features/exampleSlice';

const Counter = () => {
    const count = useSelector((state: RootState) => state.example.value);
    const dispatch = useAppDispatch();

    return (
        <div className="flex-center">
            <h1>Counter: {count}</h1>
            <div className="flex-buttons">
                <button className="increment" onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <button className="decrement" onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
                <button className="incrementByAmount" onClick={() => dispatch(incrementByAmount(5))}>
                    Increment by 5
                </button>
            </div>
        </div>
    );
};

export default Counter;
