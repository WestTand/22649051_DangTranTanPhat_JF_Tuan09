import React, { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/actions';

const initialState = {
    count: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case '+':
            return { count: state.count + 1 };
        case '-':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const CounterApp = () => {
    const [state, dispatchLocal] = useReducer(reducer, initialState);

    const countRedux = useSelector((state) => state.count);
    const dispatchRedux = useDispatch();

    return (
        <div className='flex flex-col space-y-10 justify-center items-center mt-3'>
            {/* useReducer Section */}
            <div className='flex flex-col justify-center items-center space-y-3'>
                <h1 className='font-bold text-2xl text-red-300'>Step 1: useReducer</h1>
                <div className='flex flex-row space-x-3'>
                    <button
                        className='border-2 border-gray-50 hover:bg-red-300 p-3 rounded-lg text-2xl font-bold'
                        onClick={() => dispatchLocal({ type: '+' })}
                    >
                        +
                    </button>
                    <button
                        className='border-2 border-gray-50 hover:bg-red-300 p-3 rounded-lg text-2xl font-bold'
                        onClick={() => dispatchLocal({ type: '-' })}
                    >
                        -
                    </button>
                </div>
                <p className='font-bold'>Local Count: {state.count}</p>
            </div>

            {/* Redux Section */}
            <div className='flex flex-col justify-center items-center space-y-3'>
                <h1 className='font-bold text-2xl text-blue-300'>Step 2: Redux</h1>
                <div className='flex flex-row space-x-3'>
                    <button
                        className='border-2 border-gray-50 hover:bg-blue-300 p-3 rounded-lg text-2xl font-bold'
                        onClick={() => dispatchRedux(increment())}
                    >
                        +
                    </button>
                    <button
                        className='border-2 border-gray-50 hover:bg-blue-300 p-3 rounded-lg text-2xl font-bold'
                        onClick={() => dispatchRedux(decrement())}
                    >
                        -
                    </button>
                </div>
                <p className='font-bold'>Redux Count: {countRedux}</p>
            </div>
        </div>
    );
};

export default CounterApp;
