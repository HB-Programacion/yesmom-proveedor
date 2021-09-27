import { DropdownButton , Dropdown } from 'react-bootstrap';
import React from 'react'

import './AvatarLogged.css';
import { Link } from 'react-router-dom';

function AvatarLogged({ logged , name }) {
    
    const getShortName = ( name ) => {
        
        const namesSeparated = name.trim().split(" ");
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
                        <Link to="/p/add-new-product">
                            <p>Carga manual</p>
                        </Link>
                        <Link to="/p/visualizate-products">
                            <p>Visualización de productos</p>
                        </Link>
                        <Link to="/">
                            <p>Eliminar producto</p>
                        </Link>
                    </div>
                </DropdownButton>
            </div>
        </>

        
    )
}

export default AvatarLogged
