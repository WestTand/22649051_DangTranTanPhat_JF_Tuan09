import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootPage = () => {
    return (
        <div>
            <Header />
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <Footer />

        </div>
    )
}

export default RootPage