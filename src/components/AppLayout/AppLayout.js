import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const AppLayout = ({ children }) => {
    return (
        <div>
            <Header logged={true}/>
            {children}
            <Footer />
        </div>
    )
}

export default AppLayout
