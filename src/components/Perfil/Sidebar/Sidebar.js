import React from 'react';
import { Link,useLocation } from 'react-router-dom';

import './Sidebar.css';

function Sidebar() {

    const {pathname} = useLocation();
    const pushLinks=[
        { name : "Registro" , to : "/informacion-perfil/registro" , active:"/informacion-perfil/registro"},
        { name : "Productos" , to : "/" , active:"/"},
        { name : "Cambiar contraseña" , to : "/informacion-perfil/cambiar-password" , active:"/informacion-perfil/cambiar-password"},
        { name : "Perfil de tienda" , to : "/informacion-perfil/perfil-tienda" , active:"/informacion-perfil/perfil-tienda"},
        { name : "Términos y condiciones" , to : "/informacion-perfil/terminos" , active:"/informacion-perfil/terminos"},
        { name : "Desactivar cuenta" , to : "" , active:"/"},
    ]
    return (
        <div className="perfil-sidebar">
            <ul className="perfil-sidebar-list">
                {pushLinks.map(({name,to,active},i)=>(
                    <Link key={i} to={to} className={`${active === pathname ? "perfil-link-active" : ""}`}>
                        <li>{ name }</li>
                    </Link>
                ))}
               
            </ul>
            <p className="perfil-close-session">Cerrar sesión</p>
        </div>
    )
}

export default Sidebar
