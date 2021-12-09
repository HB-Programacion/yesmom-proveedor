import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './NavMenu.css';

const NavMenu = () => {

    useEffect(()=>{
        console.log('se montó')
    },[])
    return (
        <div className="container_nav-menu">
            <div className="nav_menu-actions">
                <div>
                    Tienda
                </div>
                <a className="nav_menu-actions-link">
                    <Link to="/p/store/new">
                        +Crear tienda
                    </Link>
                </a>
            </div>
        </div>
    )
}

export default NavMenu
