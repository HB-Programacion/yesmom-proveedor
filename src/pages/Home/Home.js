import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppLayout from "../../components/AppLayout/AppLayout";
import ButtonFilled from "../../components/Producto/Button/ButtonFilled";

const Home = () => {
    return (
        <>
            <AppLayout>
                <div className="box-main-proveedor">
                    <div className="contenedor-centered">
                        <div className="all-content">
                            <div className="container-contenido">
                                <h3 className="title-page">¿Por qué vender en Yes mom?</h3>

                                <div className="container-onda">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/assets/images/ondas-azules.svg`}
                                        alt="ondas azules"
                                    />
                                </div>
                                <div className="container-paragraph">
                                    <p className="paragraph-page">
                                        Yes Mom es la marca aliada de papis y mamis, porque los ayuda a
                                        disfrutar esta maravillosa etapa sin preocupaciones. Nuestra
                                        plataforma digital reúne en un solo lugar todo lo que necesitan
                                        para la llegada de su bebé y acompañar su crecimiento. ¡Forma
                                        parte de la experiencia de pertenecer a la única web que ayuda a
                                        armar las mejores listas de artículos y servicios para bebés en
                                        el mercado peruano!
                                    </p>
                                </div>
                                <div className="container-buttons">
                                    <ButtonFilled color="second">Iniciar sesión</ButtonFilled>
                                    <ButtonFilled color="first">Registrate aquí</ButtonFilled>
                                </div>
                            </div>

                            <section className="container-section vender-yesmom">
                                <h4 className="star-text">
                                    <img className="icon-start-1" src={`${process.env.PUBLIC_URL}/assets/images/black-star.svg`} />
                                    <p className="title-section">¿Cómo vender en Yes mom?</p>
                                    <img className="icon-start-2" src={`${process.env.PUBLIC_URL}/assets/images/black-star.svg`} />
                                </h4>
                                <div className="container-description">
                                    <h5>
                                        Unirte al marketplace de Yes Mom es simple, rápido y ¡Completamente gratis!
                                    </h5>
                                </div>

                                <div className="box-vender">
                                    <Container fluid="true">

                                        <Row>
                                            <Col xs={12} lg={3}>
                                                <div className="container-step">
                                                    <div className="item-excel">
                                                        <div className="container-image-step">
                                                            <img className="img-excel" src={`${process.env.PUBLIC_URL}/assets/images/home/vender-1.png`} alt="paso 1 vender" />
                                                            <div className="container-circle">
                                                                <div className="position-number">
                                                                    <img className="circle-yellow" src={`${process.env.PUBLIC_URL}/assets/images/producto/excel/circle-yellow.svg`} />
                                                                    <p>1</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="description">Crea una cuenta en el marketplace de Yes Mom</p>
                                                </div>
                                            </Col>
                                            <Col xs={12} lg={3}>
                                                <div className="container-step">
                                                    <div className="item-excel">
                                                        <div className="container-image-step">
                                                            <img className="img-excel" src={`${process.env.PUBLIC_URL}/assets/images/home/vender-2.png`} alt="paso 2 vender" />
                                                            <div className="container-circle">
                                                                <div className="position-number">
                                                                    <img className="circle-yellow" src={`${process.env.PUBLIC_URL}/assets/images/producto/excel/circle-yellow.svg`} />
                                                                    <p>2</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="description">Crea el perfil de tu tienda, sube un logo y una foto bonita para que destaques</p>
                                                </div>
                                            </Col>
                                            <Col xs={12} lg={3}>
                                                <div className="container-step">
                                                    <div className="item-excel">
                                                        <div className="container-image-step">
                                                            <img className="img-excel" src={`${process.env.PUBLIC_URL}/assets/images/home/vender-3.png`} alt="paso 3 vender" />
                                                            <div className="container-circle">
                                                                <div className="position-number">
                                                                    <img className="circle-yellow" src={`${process.env.PUBLIC_URL}/assets/images/producto/excel/circle-yellow.svg`} />
                                                                    <p>3</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="description">Carga tus productos y esperar nuestra confirmación</p>
                                                </div>
                                            </Col>
                                            <Col xs={12} lg={3} >
                                                <div className="container-step">
                                                    <div className="item-excel">
                                                        <div className="container-image-step">
                                                            <img className="img-excel" src={`${process.env.PUBLIC_URL}/assets/images/home/vender-4.png`} alt="paso 4 vender" />
                                                            <div className="container-circle">
                                                                <div className="position-number">
                                                                    <img className="circle-yellow" src={`${process.env.PUBLIC_URL}/assets/images/producto/excel/circle-yellow.svg`} />
                                                                    <p>4</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="description">¡Listo! Ya puedes vender y ganar más con Yes Mom</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>

                                <div className="empezar-a-vender">
                                    <ButtonFilled color="first">
                                        Empezar a vender
                                    </ButtonFilled>
                                </div>
                            </section>

                            <section className="container-section como-ayudarte">
                                <img className="abs-2" src={`${process.env.PUBLIC_URL}/assets/images/nube-blanca.svg`} />
                                <img className="abs-1" src={`${process.env.PUBLIC_URL}/assets/images/nube-blanca.svg`} />
                                <img className="abs-3" src={`${process.env.PUBLIC_URL}/assets/images/nube-blanca.svg`} />
                                <p className="title-section">¿Cómo podemos ayudarte?</p>
                                <div className="container-description-second">
                                    <h5 >
                                        <span className="some-gray">Nuestro equipo estará encantado de contactarte y resolver todas tu dudas.</span>
                                        <br />
                                        Recuerda que también puedes escribirnos a través de nuestras redes sociales. </h5>
                                </div>

                                <div className="container-image">

                                </div>
                                <div className="container-sociales">
                                    <div className="item-sociales">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/home/arroba.svg`}/>
                                        <p>mibebe@gmail.com</p>
                                    </div>
                                    <div className="item-sociales">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/home/telefono.svg`}/>
                                        <p>+51 947 234 452</p>
                                    </div>
                                    <div className="item-sociales">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/home/pin.svg`}/>
                                        <p>123 Los Robles , Miraflores</p>
                                    </div>
                                </div>

                                <div className="container-form">
                                    <form>
                                        <div className="box-input">
                                            <label htmlFor="nombres">Nombre y Apellido</label>
                                            <input type="text" id="nombres"/>
                                        </div>
                                        <div className="box-input">
                                            <label htmlFor="correo">Dirección de correo electrónico</label>
                                            <input type="email" id="correo"/>
                                        </div>
                                        <div className="box-input">
                                            <label>Escribe aquí tu pregunta....</label>
                                            <textarea>

                                            </textarea>
                                        </div>
                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </AppLayout>

            <style jsx>
                {`
                    .box-main-proveedor{
                        padding: 10rem 0;
                    }
                    .container-contenido{
                        padding:0 3rem;
                        display:flex;
                        flex-direction:column;
                        justify-content:center;
                    }
                    .title-page{
                        font-family:"mont-heavy"!important;
                        font-size:2rem;
                        color:#DC6A8D;
                        text-align:center;
                    }
                    .container-onda{
                        margin: 0 auto;
                    }
                    .container-paragraph{
                        margin:2rem 0;
                    }
                    .paragraph-page{
                        font-family:"mont-regular"!important;
                        font-size:1.3rem;
                        color:#5A5A5A;
                        text-align:justify;
                        line-height: 22px;
                    }

                    .container-buttons{
                        padding:0 2rem;
                    }
                    .container-buttons > div{
                        margin:1rem 0;
                    }

                    /**SECTION VENDER */
                    .container-section{
                        padding: 5rem 0;
                    }
                    .container-description{
                        padding: 0 10rem;
                    }
                    .title-section{
                        font-family:"mont-semibold"!important;
                        font-size:2.5rem;
                        color:#DC6A8D;
                        text-align:center;
                    }
                    .vender-yesmom{
                        overflow:hidden; 
                    }
                    .vender-yesmom h4{
                        position:relative;
                        padding: 0 4rem;
                        margin : 1rem 0;
                    }
                    h5{
                        font-family:"mont-semibold"!important;
                        font-size:1.5rem;
                        text-align:center;
                        color:#5A5A5A;
                    }
                    .icon-start-1,.icon-start-2{
                        position:absolute;
                    }
                    .icon-start-1{
                        top:0.5rem;
                        left:4rem;
                    }
                    .icon-start-2{
                        top:0.5rem;
                        right:4rem;
                    }

                    /**STEPS */
                    .container-step{
                        max-width:100%;
                        margin: 3rem 0;
                    }
                    .container-step p{
                        text-align:center;
                        font-family:"mont-semibold"!important;
                        font-size:1.5rem;
                        padding:0 7rem;
                        color:#5A5A5A;
                    }
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

                    .empezar-a-vender{
                        padding:0 5rem;
                        margin-top:2rem;
                    }
                    /**COMO PODEMOS AYUDARTE */
                    .como-ayudarte{
                        position:relative;
                        background: rgba(75, 100, 164, 0.15);
                    }
                    .abs-1,.abs-2,.abs-3{
                        position:absolute;
                    }
                    .container-description-second{
                        margin:2rem 0;
                        padding:0 2rem;
                    }
                    .some-gray{
                        color:#878787;
                    }

                    .container-sociales{
                        display:flex;
                        flex-direction:column;
                        justify-content:center;
                    }
                    .item-sociales{
                        display:flex;

                    }
                    .item-sociales p{
                        font-family:"mont-regular"!important;
                        font-size:1.5rem;
                        color: #5A5A5A;
                    }

                    /**FORM */
                    .container-form{
                        background: #FFFFFF;
                        border: 10px solid #FFFFFF;
                        box-shadow: 0px 0px 33px rgba(0, 0, 0, 0.13);
                        border-radius: 20px;
                        margin:0 2rem;
                        padding : 1.5rem 1rem;
                    }
                `}
            </style>
        </>
    );
};

export default Home;
