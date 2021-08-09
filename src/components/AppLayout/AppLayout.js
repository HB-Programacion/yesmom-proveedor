import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import './AppLayout.css';
const AppLayout = ({ children }) => {
    return (
        <div>
            <Header logged={false}/>
            {children}
            <Footer />
        </div>
    )
}

export default AppLayout
