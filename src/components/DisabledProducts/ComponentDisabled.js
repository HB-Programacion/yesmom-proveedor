import React from 'react'

const ComponentDisabled = ( ) => {
    return (
        <div className="container-filter">
            <div className="container-filter-activos">
                <p
                onClick= { () => setActiveFilter(0)}
                className={`filter-product-active ${activeFilter === 0 ? 'active-filter-products' : ""}`}
                >Activos</p> 
                <p
                onClick= { () => setActiveFilter(1)}
                className={`filter-product-active ${activeFilter === 1 ? 'active-filter-products' : ""}`}
                >No activos</p> 
            </div>
            <div className="active-products-filter">

                <Checkbox content='Seleccionar todo' />
                <div className="container-icon-delete">
                <img 
                    className={`icon-delete ${active.length==0 ? 'icon-delete-disabled' : ''}`}
                    src={iconDelete} 
                    alt=""
                    onClick = { handleDeleteActive }  
                />
                </div>
                <Input placeholder="Buscar..." />
            </div>
        </div>
    )
}

export default ComponentDisabled
