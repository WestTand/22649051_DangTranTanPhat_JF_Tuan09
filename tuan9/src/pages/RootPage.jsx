import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const RootPage = () => {
    return (
        <>
            <header className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">React Redux App</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <Link to="/" className="hover:text-gray-300">Counter</Link>
                            </li>
                            <li>
                                <Link to="/todo" className="hover:text-gray-300">Todo List</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootPage