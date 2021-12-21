import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './NavMenu.css';
import StoreSelect from './StoreSelect/StoreSelect';

const allowed = [ 
    '/p/info/registro',
    '/p/info/productos',
    '/p/info/eliminar-tienda'
 ]
const NavMenu = () => {

    const { pathname } = useLocation();

    const allowedPath = () => {
        return allowed.includes(pathname);
    }
    return (
        <>
            {

                allowedPath() &&
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
                
            }
        </>
    )
}

export default NavMenu
