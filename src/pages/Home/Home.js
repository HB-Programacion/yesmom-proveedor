import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppLayout from "../../components/AppLayout/AppLayout";

import ButtonFilled from "../../components/Button/ButtonFilled";

import ondasAzules from "../../images/ondas-azules.svg";
import nubeBlanca from "../../images/nube-blanca.svg";
import blackStar from "../../images/black-star.svg";
import venderFirst from "../../images/home/vender-1.png";
import venderSecond from "../../images/home/vender-2.png";
import venderThird from "../../images/home/vender-3.png";
import venderFourth from "../../images/home/vender-4.png";
import arroba from "../../images/home/arroba.svg";
import telefono from "../../images/home/telefono.svg";
import pin from "../../images/home/pin.svg";

import circleYellow from "../../images/producto/excel/circle-yellow.svg";
import borderProveedor from "../../images/border-image-proveedor.svg";
import imageProveedor from "../../images/image-proveedor.png";
import CircleImage from "../../components/CircleImage/CircleImage";

import "./Home.css";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector } from "react-redux";

const schemaValidator = yup.object().shape({
  fullname: yup
    .string()
    .required("*Este campo es requerido")
    .matches(/^[a-z ,.'-]+$/i, "*Nombres incorrectos"),
  email: yup
    .string()
    .email("*Correo electrónico incorrecto")
    .required("*Este campo es requerido"),
  question: yup
    .string()
    .required("*Este campo es requerido")
    .max(200, "*Máximo 200 caracteres permitidos"),
});

const Home = () => {
  const { logged = false } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidator),
  });

  const steps = [
    {
      id: 1,
      img: venderFirst,
      description: "Crea una cuenta en el marketplace de Yes Mom",
    },
    {
      id: 2,
      img: venderSecond,
      description:
        "Crea el perfil de tu tienda, sube un logo y una foto bonita para que destaques",
    },
    {
      id: 3,
      img: venderThird,
      description: "Carga tus productos y esperar nuestra confirmación",
    },
    {
      id: 4,
      img: venderFourth,
      description: "¡Listo! Ya puedes vender y ganar más con Yes Mom",
    },
  ];

  const sections = {
    porqueVender: "porque-vender-yesmom",
    comoVender: "como-vender",
    contacto: "contacto",
  };

  const submitForm = (values) => {
    alert("Enviando datos" + JSON.stringify(values));
  };
  return (
    <div className="animated fade-in">
      <AppLayout>
        <div className="home--box-main-proveedor ">
          <div className="home--contenedor-centered">
            <div className="home--all-content">
              <section
                className="home--container-contenido"
                id={sections.porqueVender}
              >
                <div className="home--section-initial">
                  <h3 className="home--title-page">
                    ¿Por qué vender en Yes mom?
                  </h3>

                  <div className="home--container-onda">
                    <img src={ondasAzules} alt="ondas azules" />
                  </div>
                  <div className="home--container-paragraph">
                    <p className="home--paragraph-page">
                      Yes Mom es la marca aliada de papis y mamis, porque los
                      ayuda a disfrutar esta maravillosa etapa sin
                      preocupaciones. Nuestra plataforma digital reúne en un
                      solo lugar todo lo que necesitan para la llegada de su
                      bebé y acompañar su crecimiento.
                      <br />
                      <br /> ¡Forma parte de la experiencia de pertenecer a la
                      única web que ayuda a armar las mejores listas de
                      artículos y servicios para bebés en el mercado peruano!
                    </p>
                  </div>
                  <div className="home--container-buttons">
                    <div>
                      <Link
                        to={logged ? "/p/resumen-venta" : "/iniciar-sesion"}
                      >
                        <ButtonFilled color="yellow">
                          Iniciar sesión
                        </ButtonFilled>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={
                          logged
                            ? "/p/informacion-perfil/registro"
                            : "/registro"
                        }
                      >
                        <ButtonFilled color="pink">
                          Registrate aquí
                        </ButtonFilled>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className="home--container-section home--vender-yesmom"
                id={sections.comoVender}
              >
                <h4 className="home--star-text">
                  <div className="home--container-title-section">
                    <img className="home--icon-start-1" src={blackStar} />
                    <p className="home--title-section">
                      ¿Cómo vender en Yes mom?
                    </p>
                    <img className="home--icon-start-2" src={blackStar} />
                  </div>
                </h4>
                <div className="home--container-description">
                  <h5>
                    Unirte al marketplace de Yes Mom es simple, rápido y
                    ¡Completamente gratis!
                  </h5>
                </div>

                <div className="home--box-vender">
                  <Container fluid="true">
                    <Row>
                      {steps.map((step, i) => (
                        <Col key={i} xs={12} md={6} xl={3}>
                          <CircleImage {...step} circleYellow={circleYellow} />
                        </Col>
                      ))}
                    </Row>
                  </Container>
                </div>

                <div className="home--empezar-a-vender">
                  <div>
                    <Link to="/iniciar-sesion">
                      <ButtonFilled color="pink">Empezar a vender</ButtonFilled>
                    </Link>
                  </div>
                </div>
              </section>

              <section
                className="home--container-section home--como-ayudarte"
                id={sections.contacto}
              >
                <img className="home--abs-2" src={nubeBlanca} />
                <img className="home--abs-1" src={nubeBlanca} />
                <img className="home--abs-3" src={nubeBlanca} />
                <img className="home--abs-4" src={nubeBlanca} />
                <p className="home--title-section">¿Cómo podemos ayudarte?</p>
                <div className="home--container-description-second">
                  <h5>
                    <span className="home--some-gray">
                      Nuestro equipo estará encantado de contactarte y resolver
                      todas tu dudas.
                    </span>
                    <br />
                    Recuerda que también puedes escribirnos a través de nuestras
                    redes sociales.
                  </h5>
                </div>

                <div className="home--flex-ayuda">
                  <Row>
                    <Col xs={12} md={6}>
                      <div className="home--img-and-social">
                        <div className="home--container-image">
                          <img
                            className="home--border-image-1"
                            src={borderProveedor}
                          />
                          <img
                            className="home--img-proveedor"
                            src={imageProveedor}
                            alt="proveedor imagen"
                          />
                          <img
                            className="home--border-image-2"
                            src={borderProveedor}
                          />
                        </div>
                        <div className="home--center-sociales">
                          <div className="home--container-sociales">
                            <div className="home--item-sociales">
                              <img src={arroba} />
                              <p>mibebe@gmail.com</p>
                            </div>
                            <div className="home--item-sociales">
                              <img src={telefono} />
                              <p>+51 947 234 452</p>
                            </div>
                            <div className="home--item-sociales">
                              <img src={pin} />
                              <p>123 Los Robles , Miraflores</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={6}>
                      <div className="home--ayuda-form">
                        <div className="home--container-form">
                          <form>
                            <div className="home--box-input">
                              <label htmlFor="fullname">
                                Nombre y Apellido
                              </label>
                              <input
                                type="text"
                                id="fullname"
                                {...register("fullname")}
                              />
                              <p className="error-input-login">
                                {errors?.fullname?.message}
                              </p>
                            </div>
                            <div className="home--box-input">
                              <label htmlFor="email">
                                Dirección de correo electrónico
                              </label>
                              <input
                                type="email"
                                id="email"
                                {...register("email")}
                              />
                              <p className="error-input-login">
                                {errors?.email?.message}
                              </p>
                            </div>
                            <div className="home--box-input">
                              <label htmlFor="question">
                                Escribe aquí tu pregunta....
                              </label>
                              <textarea
                                id="question"
                                {...register("question", { max: 200 })}
                              />
                              <p className="error-input-login">
                                {errors?.question?.message}
                              </p>
                            </div>
                          </form>
                        </div>

                        <div className="home--container-send">
                          <ButtonFilled
                            color="yellow"
                            fxClick={handleSubmit(submitForm)}
                          >
                            Enviar
                          </ButtonFilled>
                        </div>
                        <p className="home--end-text">
                          Tus datos serán tratados por Yes Mom para la gestión
                          de tu consulta.{" "}
                          <span className="home--privacidad">
                            Revisa nuestra política de privacidad.
                          </span>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </section>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Home;
