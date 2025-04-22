import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

const RootPage = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);

    // Apply theme to the entire app
    document.body.className = isDarkMode ? 'dark-theme' : '';

    return (
        <>
            <header className="bg-gray-800 text-white p-4" style={{ backgroundColor: 'var(--header-bg)', color: 'var(--header-text)' }}>
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-xl font-bold">React Redux App</h1>
                    <nav className="flex items-center">
                        <ul className="flex space-x-4 mr-4">
                            <li>
                                <Link to="/" className="hover:text-gray-300">Counter</Link>
                            </li>
                            <li>
                                <Link to="/todo" className="hover:text-gray-300">Todo List</Link>
                            </li>
                        </ul>
                        <button
                            onClick={() => dispatch(toggleTheme())}
                            className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600"
                            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto p-4">
                <Outlet />
            </main>
        </>
    )
}

export default RootPage