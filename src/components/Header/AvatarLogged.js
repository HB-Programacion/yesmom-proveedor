import { DropdownButton , Dropdown } from 'react-bootstrap';
import React from 'react'

import './AvatarLogged.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import { cleanDataSupplier } from '../../redux/actions/supplier';

function AvatarLogged({ name }) {
    
    const dispatch = useDispatch();
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
    const shortName = getShortName(name);


    const handleLogout = () => {
        dispatch ( logout());
        dispatch ( cleanDataSupplier());
    }
    return (
        <>
            <div className="avatar__logged">
                <p className="avatar__logged-text">{ shortName }</p>
            </div> 
            <div className="avatar-logged-global">
                <DropdownButton
                    /* as={ButtonGroup} */
                    id={`dropdown-variants-info`}
                    variant={"info"}
                    title={`${name}`}
                >
                    <div className="items-dropdown-menu">
                        <Link to="/p/product-excel">
                            <p>Importar productos</p>
                        </Link>
                        {/* <Link to="/p/add-new-product">
                            <p>Carga manual</p>
                        </Link> */}
                        <Link to="/p/visualizate-products">
                            <p>Visualización de productos</p>
                        </Link>
                        {/* <Link to="/p/informacion-perfil/productos-activos">
                            <p>Eliminar producto</p>
                        </Link> */}

                        <div class="dropdown-divider"></div>

                        <Link to="/p/informacion-perfil/registro">
                            <p>Mi perfil</p>
                        </Link>
                        <Link to="/p/informacion-perfil/productos-activos">
                            <p>Productos</p>
                        </Link>
                        <Link to="/p/informacion-perfil/cambiar-password">
                            <p>Cambiar contraseña</p>
                        </Link>
                        <Link to="/p/informacion-perfil/perfil-tienda">
                            <p>Perfil de tienda</p>
                        </Link>
                        <Link to="/p/informacion-perfil/terminos">
                            <p>Términos y condiciones</p>
                        </Link>
                        <Link to="/p/informacion-perfil/desactivar-cuenta">
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
