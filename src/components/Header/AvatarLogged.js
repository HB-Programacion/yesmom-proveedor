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
    const { nombreTienda="TiendaDefault" } = useSelector(state => state.supplier);

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
    const shortName = getShortName(nombreTienda);


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
                    title={`${nombreTienda}`}
                >
                    <div className="items-dropdown-menu">
                        <Link to="/p/info/mis-datos">
                            <p>Mis datos</p>
                        </Link>
                        {/* <Link to="/p/add-new-product">
                            <p>Carga manual</p>
                        </Link> */}
                        {/* <Link to="/p/visualizate-products">
                            <p>Visualización de productos</p>
                        </Link> */}
                        {/* <Link to="/p/informacion-perfil/productos-activos">
                            <p>Eliminar producto</p>
                        </Link> */}

                        <div class="dropdown-divider"></div>

                        <Link to="/p/info/registro">
                            <p>Mis ordenes</p>
                        </Link>
                        <Link to="/p/info/cambiar-password">
                            <p>Cambiar contraseña</p>
                        </Link>
                        <Link to="/p/info/perfil-tienda">
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
