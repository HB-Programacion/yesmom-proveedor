import React from 'react';
import AppLayout from '../../components/AppLayout/AppLayout';
import AccordionItem from '../../components/Producto/AccordionItem';

const SeeProducts = () => {
    return (
        <>
            <AppLayout>
                    <div className="box-main-proveedor">
                        <div className="contenedor-centered">
                            <div className="all-content">
                                <div className="container-contenido">
                                    <div className="container-advice">
                                        <h5>Gracias por registrar tu producto, en las próximas horas será evaluado para mostrarlo en tienda</h5>
                                    </div>

                                    <h4 className="title-product">Visualización de productos</h4>
                                    <div className="container-select">
                                        <select>
                                            <option>Ordenar por </option>
                                            <option>Precio de mayor a menor</option>
                                            <option>Precio de menor a mayor</option>
                                            <option>A-Z (alfabéticamente)</option>
                                            <option>Z-A (alfabéticamente)</option>
                                            <option>Últimos 30 días)</option>
                                            <option>Últimos 6 meses</option>
                                        </select> 
                                    </div>
                                    <div className="container-cards">
                                        <AccordionItem />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </AppLayout>
            <style jsx>
                {`
                    .all-content{
                        padding:10rem 0;
                    }
                    .contenedor-centered{
                        padding : 0 2.5rem;
                    }
                    select{
                        width:15rem;
                        padding:1rem;
                        border: 1px solid #556EA1;
                        box-sizing: border-box;
                        border-radius: 20px;

                        background: url(https://i.ibb.co/mtG2wk2/image.png) no-repeat right #ffffff;
                        background-size: 1.25rem;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        background-position-x: 92.5% ;

                        font-family:"mont-regular"!important;
                        font-size:1.2rem;
                        color:#556EA1;
                    }
                    select:focus{
                        outline:none;
                    }
                    

                    /**CONTENIDO */
                    .container-advice{
                        border: 2px solid #55B446;
                        box-sizing: border-box;
                        border-radius: 24px;
                    }
                    .container-advice h5{
                        font-family:"mont-semibold"!important;
                        font-size:2rem;
                        color:#55B446;
                        text-align:center;
                        margin: 1.5rem 2rem;
                    }

                    /**TITLE PRODUCT */
                    .title-product{
                        font-family: "mont-semibold"!important;
                        font-size:2.5rem;
                        color:#DC6A8D;
                        text-align:center;
                        margin:2rem 0;
                    }
                    /**SELECT */
                    .container-select{
                        display:flex;
                        justify-content:flex-end;
                    }
                                
                `}
            </style>
        </>
    )
}

export default SeeProducts
