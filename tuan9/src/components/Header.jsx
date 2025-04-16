import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex flex-row space-x-2 border-2 border-gray-50 p-3 justify-center items-center'>
            <Link href="" to="/" className='text-2xl font-bold border-2 border-black rounded-lg p-3'>CounterApp</Link>



        </div>
    )
}

export default Header