import React, { useState } from 'react'
import "./SignIn.css"
import { useHistory } from 'react-router-dom'
import logoYesmom from '../../images/header/logo-yesmom.svg';
// import { toast } from 'react-toastify';
import clienteAxiosAuth from './../../config/axiosAuth';

const SignIn = ({ fechaAutentificado }) => {
  let history = useHistory();
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    username: "",
    password: ""
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_BACKEND_URL_AUTH, "hola")
    console.log(clienteAxiosAuth, "holita")
    console.log(state, "valores")
    console.log(process.env.REACT_APP_BACKEND_URL_AUTH, "hola2")
    await clienteAxiosAuth.post(`/autenticar?email=0`, state)
      // await fetch(request)
      .then(res => {
        console.log(res.data, "mensaje")
        if (res.data.MensajeRespuesta === "REQUEST INVÁLIDO") {
          // toast.error("Datos inválidos, vuelva a intentarlo");
          setTimeout(function () {
            window.location.reload();
          }, 18000);
          return;
        }
        if (res.data.mensaje === "Autenticación Correcta") {
          localStorage.setItem("TokenYesmonProveedor", res.data.token);
          history.push('/');
          window.location.reload();
          // fechaAutentificado(Date.now())
          return;
        };
      }
      )
      .catch(e => {
        console.log(e, "error:");
      });
  };

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12">
          <div className="box-signIn">
            <div className="p-3 text-center">
              <img src={logoYesmom} alt="Logo de Yes Mom" />
            </div>
            <div className="card">
              <div className="card-body">
                <form action="/" method="POST" onSubmit={handleSubmit}>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="form-group">
                    <label htmlFor="inputEmail">Correo electrónico</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control form-control-sm"
                      onChange={handleInputChange}
                      id="inputEmail"
                      value={state.username}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPassword">Contraseña</label>
                    {/* <a href="#" style={{float: 'rigth', fontSize: '12px'}}>¿Olvidaste tu contraseña?</a> */}
                    <input
                      type="password"
                      name="password"
                      className="form-control form-control-sm"
                      onChange={handleInputChange}
                      id="inputPassword"
                      value={state.password}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                  {/* <div className="sign-up">
                                    ¿No tienes una cuenta? <a href="#">Create uno</a>
                                </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
