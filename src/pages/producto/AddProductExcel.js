import React from 'react';
import ButtonFilled from '../../components/Producto/Button/ButtonFilled';


const AddProductExcel = () => {
    return (
        <>
            <div className="box-main-proveedor">
                <div className="contenedor-centered">
                    <div className="container-banner">
                        <img className="mobile" src={`${process.env.PUBLIC_URL}/assets/images/banner.png`} />
                        <img className="desktop" src={`${process.env.PUBLIC_URL}/assets/images/banner-desktop.png`} />
                        <p>Productos</p>
                    </div>
                    <div className="all-content">
                        <div className="container-contenido"> 
                            <h4 className="title-product">¡Sube tus productos de manera rápida!</h4>
                            <h5 className="subtitle-product">Sigue este paso a paso y podrás cargar tus productos a nuestro marketplace. Empieza a vender muy rápido</h5>

                            <div className="container-excel">
                                <div className="item-excel">
                                    <div className="container-image-step">
                                        <img className="img-excel" src={`${process.env.PUBLIC_URL}/assets/images/producto/excel/ExcelFirst.png`} alt="paso 1 excel"/>
                                        <div className="container-circle">
                                            <div className="position-number">
                                                <img className="circle-yellow"src={`${process.env.PUBLIC_URL}/assets/images/producto/excel/circle-yellow.svg`} />
                                                <p>1</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Descarga nuestro formato Excel para la carga de productos </p>
                                </div>
                                <div className="item-excel">
                                    <div className="container-image-step">
                                        <img className="img-excel" src={`${process.env.PUBLIC_URL}/assets/images/producto/excel/ExcelSecond.png`} alt="paso 2 excel" />
                                        <div className="container-circle">
                                            <div className="position-number">
                                                <img className="circle-yellow"src={`${process.env.PUBLIC_URL}/assets/images/producto/excel/circle-yellow.svg`} />
                                                <p>2</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Completa la información de tus productos en el formato y súbelo en nuestra web</p>
                                </div>
                                <div className="item-excel">
                                    <div className="container-image-step">
                                        <img className="img-excel" src={`${process.env.PUBLIC_URL}/assets/images/producto/excel/ExcelThird.png`} alt="paso 3 excel"/>
                                        <div className="container-circle">
                                            <div className="position-number">
                                                <img className="circle-yellow"src={`${process.env.PUBLIC_URL}/assets/images/producto/excel/circle-yellow.svg`} />
                                                <p>3</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p>¡Listo! Solo debes esperar a nuestra confirmación para comenzar a vender</p>
                                </div>
                            </div>

                            <div className="container-import">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/producto/excel/arrow.svg`}/>
                                <h4 className="title-product">Importar productos</h4>
                            </div>

                            <div className="container-boxes-option">
                                <div className="box-option">
                                    <div className="flex-1 download">
                                        <img clas src={`${process.env.PUBLIC_URL}/assets/images/producto/excel/download.svg`} alt="formato" />
                                    </div>
                                    <div className="only-button">
                                        <ButtonFilled color="red" outline>
                                            Descarga el formato
                                        </ButtonFilled>
                                    </div>
                                </div>
                                <div className="box-option">
                                    <div className="flex-1">
                                        <p>Arrastra el archivo aquí, o</p>
                                    </div>
                                    <div className="only-button">
                                        <ButtonFilled color="blue" fsize="less">
                                            Elige desde tu computadora...
                                        </ButtonFilled>
                                    </div>
                                </div>
                            </div>
                            <div className="container-save">
                                <ButtonFilled >
                                    Guardar
                                </ButtonFilled>
                            </div>

                        </div> 
                    </div>
                </div>
            </div>

            <style jsx>
                {`
                    .desktop{
                        display:none;
                        z-index:-1;
                    }
                    .box-main-proveedor{
                        padding: 8rem 0;
                    }

                    .contenedor-centered{
                        /* display:flex;
                        justify-content: center;
                        align-items: center; 
                        margin:0 2.5rem;*/
                    }

                    /**BANNER */
                    .container-banner{
                        width:100%;
                        position:relative;
                    }
                    .container-banner img{
                        width:100%;
                    }
                    .container-banner p{
                        margin:0;
                        position:absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);

                        font-size:3rem;
                        font-family:"clicker"!important;
                        color:#ffffff;
                    }
                    /*TITLE**/
                    .title-product{
                        font-family: "mont-semibold"!important;
                        font-size:2.5rem;
                        color:#DC6A8D;
                        text-align:center;
                        margin:1rem 0;
                    }
                    .subtitle-product{
                        font-family:"mont-regular"!important;
                        font-size:1.5rem;
                        color:#5A5A5A;
                        text-align:center;
                        letter-spacing:0.03rem;
                        margin: 1rem 0;
                    }
                     /**Content */
                     .container-contenido{
                         padding:2rem;
                     }

                     /**STEPS-EXCE */
                     .container-excel{
                         padding : 2rem 0;
                         display:flex;
                         justify-content:center;
                         align-items:center;
                         flex-direction:column;
                     }
                     .item-excel{
                         margin: 2rem 0;
                         padding : 0 3.3rem;
                     }
                     .item-excel{
                         display:flex;
                         justify-content:center;
                         align-items:center;
                         flex-direction:column;
                     }
                     .item-excel p{
                        margin :2rem 0;
                        text-align:center;
                        font-family:"mont-heavy"!important;
                        font-size:1.5rem;
                        color:#5A5A5A;
                     }

                     .container-image-step{
                        position:relative;
                        padding : 1rem;
                        border: 2px dashed #575756;
                        box-sizing: border-box;
                        border-radius:50%;
                     }
                     .img-excel{
                         width:100%;
                     }
                     .container-circle{
                         position:absolute;
                         width:25%;
                         top:0;
                         left:1rem;
                     }
                     

                     .circle-yellow{
                         position:relative;
                         width:100%;
                     }
                     .position-number{
                         position:relative;
                     }
                     .position-number p{
                        
                        margin:0;
                        position:absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-size:3rem;
                        font-family:"omnes-bold"!important;
                        color:#ffffff;
                     }
                     .container-import{
                         display:flex;
                         justify-content:center;
                         align-items:center;
                         flex-direction:column;
                     }
                     .container-import h4{
                         margin-top:2rem;
                     }

                     /**BOX */
                     .box-option{
                        padding :3rem 2rem;
                        margin:2rem 0;
                        background: #FFFFFF;
                        border: 10px solid #FFFFFF;
                        box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
                        border-radius: 20px;

                        display:flex;
                        flex-direction:column;
                        align-items:center;
                        justify-content:center;
                     }
                     .container-save{
                         padding:0 2rem;
                         margin-top:4rem;
                     }
                     .box-option img{
                         margin-bottom:2rem;
                     }
                     .styled{
                         background:red;
                     }
                     .box-option .flex-1 p{
                         font-family:"mont-light"!important;
                         font-size:1.3rem;
                         color:#575650;
                     }



                     @media (min-width:480px) and (max-width:767px){
                        .contenedor-centered{
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            flex-direction:column;
                         }
                         .all-content{
                             width:48rem;
                         }
                     }
                     @media (min-width:768px){
                         .container-banner p{
                             font-size:3.5rem;
                         }
                         .container-contenido{
                             padding:5rem 2rem;
                         }
                         .mobile{
                             display:none;
                             z-index:-1;
                             visibility:hidden;
                         }
                         .desktop{
                             display:block;
                         }
                         .container-excel{
                            flex-direction:row;
                         }
                         .item-excel{
                             width:100%;
                             padding: 0 1rem;
                         }
                         .container-boxes-option{
                             margin:4rem 0;
                             display:flex;
                             justify-content:center;
                         }
                         .box-option{
                             flex-basis:50%;
                             margin:0 2rem;
                         }
                         .container-save{
                             width:30rem;
                             margin: 0 auto;
                         }

                     }

                     @media (min-width:1024px){
                        .container-contenido{
                             padding:7rem 2rem;
                         }
                        .container-banner p{
                             font-size:4rem;
                         }
                     }
                     @media(min-width:1280px){
                         .all-content{
                             display:flex;
                             align-items:center;
                             justify-content:center;
                         }
                         .container-contenido{
                             width:90%;
                         }
                        .container-banner p{
                             font-size:4.5rem;
                         }
                         .box-option{
                             flex-direction:row;
                             justify-content:center;
                             align-items:center;
                         }
                         .flex-1{
                             padding:0 1rem;
                         }
                         .download{
                             margin-top:2rem;
                         }
                         .item-excel{
                             padding: 0 8rem;
                         }
                     }
                     
                `}
            </style>
        </>
    )
}

export default AddProductExcel
