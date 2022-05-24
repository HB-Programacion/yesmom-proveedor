import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { logout } from '../../../redux/actions/auth';
import { cleanDataSupplier } from '../../../redux/actions/supplier';
import './Sidebar.css';

const pushLinks=[
    { name : "Registro" , to : "/p/info/registro" },
    { name : "Productos" , to : "/p/info/productos"},
    // { name : "Cambiar contraseña" , to : "/p/informacion-perfil/cambiar-password" },
    // { name : "Perfil de tienda" , to : "/p/informacion-perfil/perfil-tienda" },
    // { name : "Términos y condiciones" , to : "/p/informacion-perfil/terminos" },
    // { name : "Eliminar tienda" , to :"/p/info/eliminar-tienda"},
    // { name : "Desactivar cuenta" , to : "/p/info/desactivar-cuenta" },
]
const Sidebar = () => {

    const {pathname} = useLocation();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( logout()) ;
        dispatch ( cleanDataSupplier() );
    }
    return (
        <div className="perfil-sidebar">
            <ul className="perfil-sidebar-list">
                {pushLinks.map(({name,to},i)=>(
                    <Link key={i} to={to} className={`${to === pathname ? "perfil-link-active" : ""}`}>
                        <li>{ name }</li>
                    </Link>
                ))}
               
            </ul>
            <p className="perfil-close-session" onClick = { handleLogout }>Cerrar sesión</p>
        </div>
    )
}

export default Sidebar
