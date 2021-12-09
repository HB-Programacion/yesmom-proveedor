import React from 'react'
import Construccion from '../../pages/construccion/Construccion';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import './AppLayout.css';
const AppLayout = ({ children }) => {
    return (
        <div>
            <Header logged={true}/>
            <div>
                Hola
            </div>
            {children}
            <Footer />
        </div>
    )
}

export default AppLayout
