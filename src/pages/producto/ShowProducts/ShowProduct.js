import React from 'react'
import AppLayout from '../../../components/AppLayout/AppLayout'
import ButtonFilled from '../../../components/Producto/Button/ButtonFilled'
import ImageProducto from '../../../components/Producto/Image/ImageProducto'
import './ShowProduct.css'
const ShowProduct = () => {
    return (
        <>
            <AppLayout>

                <div className="box-main-proveedor">
                    <div className="contenedor-centered">
                        <div className="all-content">
                            <div className="title-content">
                                <h4 className="title-add-producto">Previsualización</h4>
                            </div>
                            <div className="container-content">
                                <div className="flex-content-product">
                                    <div className="container-images">
                                        <div className="container-image-selected">
                                            <ImageProducto type="big" src="https://i.ibb.co/0F715MD/image.png" i={1}/>
                                        </div>
                                        <div className="images-secondary">
                                            <ImageProducto type="small" src="https://i.ibb.co/0F715MD/image.png" i={1}/>
                                            <ImageProducto type="small" src="https://i.ibb.co/0F715MD/image.png" i={2}/>
                                            <ImageProducto type="small" src="https://i.ibb.co/0F715MD/image.png" i={3}/>
                                            <ImageProducto type="small" src="https://i.ibb.co/0F715MD/image.png" i={4}/>
                                            <ImageProducto type="small" src="https://i.ibb.co/0F715MD/image.png" i={4}/>
                                        </div>
                                    </div>
                                    <div className="container-details"> 
                                        <section className="some-info-product">
                                            <h5 className="ft-semibold">Conjunto Bebe 4 piezas</h5>
                                            <h6 className="ft-light">Único - Baby plaza</h6>
                                            <p className="text-description">Hermoso conjunto 4 piezas super fresco importado Contiene pantalón, polo body , gorro, vincha.</p>
                                            <p className="price">S/ 68.00</p>
                                            <div className="container-selects"> 
                                                <div className="group-select">
                                                    <label className="text-label" htmlFor="talla">Color</label>
                                                    <select id="color">
                                                        <option>Selecciona el color</option>
                                                    </select>
                                                </div>
                                                <div className="group-select">
                                                    <label className="text-label" htmlFor="talla">Talla</label>
                                                    <select id="talla">
                                                        <option>Selecciona la talla</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="container-cantidad">
                                                <p className="text-label">Cantidad</p>
                                                <div className="control-buttons">
                                                    <div className="control-cantidad">
                                                        <svg width="24" height="4" viewBox="0 0 24 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33333 0.659668C0.596953 0.659668 0 1.25662 0 1.993C0 2.72938 0.596953 3.32633 1.33333 3.32633H22.6667C23.403 3.32633 24 2.72938 24 1.993C24 1.25662 23.403 0.659668 22.6667 0.659668L1.33333 0.659668Z" fill="#D3DEE3"/>
                                                        </svg>
                                                    </div>
                                                    <p>1</p>
                                                    <div className="control-cantidad">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.500001 10.6597C0.223858 10.6597 0 10.8836 0 11.1597V12.8403C0 13.1164 0.223858 13.3403 0.5 13.3403H10.6597V23.5C10.6597 23.7761 10.8836 24 11.1597 24H12.8403C13.1164 24 13.3403 23.7761 13.3403 23.5V13.3403H23.5C23.7761 13.3403 24 13.1164 24 12.8403V11.1597C24 10.8836 23.7761 10.6597 23.5 10.6597H13.3403V0.500001C13.3403 0.223858 13.1164 0 12.8403 0H11.1597C10.8836 0 10.6597 0.223858 10.6597 0.5V10.6597H0.500001Z" fill="#D3DEE3"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container-buttons">
                                                <div className="btn-normal">
                                                    <ButtonFilled color="third">
                                                        Agregar al carrito
                                                    </ButtonFilled>
                                                </div>
                                                <div className="btn-normal">
                                                    <ButtonFilled color="third">
                                                        Ver la tienda
                                                    </ButtonFilled>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                                <div className="container-details">
                                    <section className="all-info-producto">
                                        <h5 className="ft-semibold">Detalle del Producto</h5>
                                        <p className="text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A tortor, diam molestie et rhoncus, amet lacus, velit. Ac ipsum fames gravida habitant aliquet orci. Imperdiet egestas morbi egestas posuere diam. Pharetra, sit volutpat varius sed sit urna euismod. Viverra nunc turpis nulla at et venenatis vitae, facilisis fringilla. Quam aliquet et proin nulla lacus aliquet quam</p>


                                        <h5 className="ft-semibold">Puntos destacados del producto</h5>
                                        <ol>
                                            <li>haretra, sit volutpat varius</li>
                                            <li>
                                                Sed sit urna euismod
                                                <ul>
                                                    <li>Viverra nunc turpis</li>
                                                    <li>Nulla at et venenatis vitae</li>
                                                    <li>Facilisis fringilla</li>
                                                </ul>
                                            </li>
                                            <li>Quam aliquet et</li>
                                            <li>Proin nulla lacus quam</li>
                                        </ol>

                                        <h5 className="ft-semibold">Pais de producción</h5>
                                        <p className="text-description">Pharetra, sit volutpat varius</p>

                                        <h5 className="ft-semibold">Dimensiones</h5>
                                        <p className="text-description">xx - xx cm</p>

                                        <h5 className="ft-semibold">Material de producto</h5>
                                        <p className="text-description">Pharetra, sit volutpat varius</p>

                                        <h5 className="ft-semibold">Términos y condiciones</h5>
                                        <p className="text-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A tortor, diam molestie et rhoncus, amet lacus, velit. Ac ipsum fames gravida habitant aliquet orci. Imperdiet </p>
                                    </section>
                                </div>
                                <hr  className="line-end"/>
                                <div className="container-actions">
                                        <div className="btn-normal">
                                            <ButtonFilled>
                                                Guardar
                                            </ButtonFilled>
                                        </div>

                                        <div className="btn-normal opacity-btn">
                                            <ButtonFilled color="yellow">
                                                Editar
                                            </ButtonFilled>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>

        </>
    )
}

export default ShowProduct
