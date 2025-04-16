import React, { useReducer } from 'react'

const initialState = {
    count: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case "+": {
            return { count: state.count + 1 }
        }
        case "-": {
            return { count: state.count - 1 }
        }
        default:
            return state;
    }
}



const CounterApp = () => {

    const [state, dispath] = useReducer(reducer, initialState)


    return (
        <div className='flex flex-col space-y-10 justify-center items-center mt-3'>
            <div className='flex flex-col justify-center items-center space-y-3'>
                <h1 className='font-bold text-2xl text-red-300'>Step - 1 with useReducer</h1>
                <div className="flex flex-row space-x-3">
                    <button type="button" className='border-2 border-gray-50 hover:bg-red-300 p-3 rounded-lg text-2xl font-bold text-center'
                        onClick={() => dispath({ type: "+" })}
                    >+</button>
                    <button type="button" className='border-2 border-gray-50 hover:bg-red-300 p-3 rounded-lg text-2xl font-bold  text-center'
                        onClick={() => dispath({ type: "-" })}
                    >-</button>
                </div>
                <p className='text-center font-bold'>Count:{state.count}</p>
            </div>

            


        </div>
    )
}

export default CounterApp