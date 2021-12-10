import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './NavMenu.css';
import StoreSelect from './StoreSelect/StoreSelect';

const NavMenu = () => {


    return (
        <div className="container_nav-menu">
            <div className="nav_menu-actions">
                <div>
                    <StoreSelect />
                </div>
                <Link to="/p/store/new" className="nav_menu-actions-link">
                    +Crear tienda
                </Link>
            </div>
        </div>
    )
}

export default NavMenu
