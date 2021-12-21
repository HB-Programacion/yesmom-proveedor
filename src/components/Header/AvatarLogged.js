import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DropdownButton , Dropdown } from 'react-bootstrap';

import { logout } from '../../redux/actions/auth';
import { cleanDataSupplier } from '../../redux/actions/supplier';
import Loading from '../Loading/Loading';

import './AvatarLogged.css';
const AvatarLogged = () => {
    
    const dispatch = useDispatch();
    const { nombreCompletoEncargado="" } = useSelector(state => state.supplier);

    const getShortName = ( name ) => {
        
        const namesSeparated = name.toUpperCase().trim().split(" ");
        let initials ="";
        namesSeparated.forEach((string,i) => {
            if( i < 2){
                initials=initials+string.charAt(0);   
            }else{
                return;
            }
        });
        return initials;
    }
    const getFirstName = ( name) => {
        return name.split(" ")[0];
    }
    const shortName = getShortName(nombreCompletoEncargado);


    const handleLogout = () => {
        dispatch ( logout());
        dispatch ( cleanDataSupplier());
    }


    return (
        <>
            {/* <Loading /> */}
            <div className="avatar__logged">
                <p className="avatar__logged-text">{ shortName }</p>
            </div> 
            <div className="avatar-logged-global">
                <DropdownButton
                    /* as={ButtonGroup} */
                    id={`dropdown-variants-info`}
                    variant={"info"}
                    title={`${getFirstName(nombreCompletoEncargado)}`}
                >
                    <div className="items-dropdown-menu">
                        <Link to="/p/info/mis-datos">
                            <p>Mis datos</p>
                        </Link>
                        <div class="dropdown-divider"></div>
                        <Link to="/p/info/registro">
                            <p>Mi tienda</p>
                        </Link>
                        <Link to="/p/info/mis-ordenes">
                            <p>Mis ordenes</p>
                        </Link>
                        <Link to="/p/info/cambiar-password">
                            <p>Cambiar contraseña</p>
                        </Link>
                        <Link to="/p/info/desactivar-cuenta">
                            <p>Desactivar cuenta</p>
                        </Link>

                        <div class="dropdown-divider"></div>

                        <div onClick={ handleLogout }>
                                <p className="logout-dropdown">Cerrar sesión</p>
                        </div>
                    </div>
                </DropdownButton>
            </div>
        </>

        
    )
}

export default AvatarLogged
