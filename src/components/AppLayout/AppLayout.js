import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const AppLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default AppLayout
