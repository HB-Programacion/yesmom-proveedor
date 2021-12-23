import React from 'react'
import AppLayout from '../../components/AppLayout/AppLayout'
import imgUser from '../../images/login/img-user.svg';
import ButtonFilled from '../../components/Button/ButtonFilled';
import { Link } from 'react-router-dom';


import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';
import clienteAxiosAuth from '../../config/axiosAuth';

const schemaValidator = yup.object().shape({
    email : yup.string().email('*Correo electrónico inválido').required('*Este campo es requerido'),
})


const Recover = () => {

    const { register  , handleSubmit , formState : { errors }} = useForm({
        resolver : yupResolver(schemaValidator)
    })

    
    const submitForm = async ( values ) => {
        
        try{

            const { email } = values;
            const { data } = await clienteAxiosAuth.post('/users/reset', { principalEmail : email });

            console.log(data);
            
            if(data?.CodigoRespuesta === '34'){
                return Swal.fire('Correo no encontrado', 'El correo no se encuentra registrado' , 'info');
            }

            if(data?.status === 'success'){
                Swal.fire('Email enviado', 'Se ha enviado un email con instrucciones para restablecer la contraseña' , 'success');
            }else{
                Swal.fire('Error','Hubo un error' ,'error');
            }


        }catch(err){
            console.log(err);
            Swal.fire('Error','Hubo un error' ,'error');
        }
    }

    return (
        <AppLayout>
            <div className="contenedor-login animated fade-in">
                <div className="container-contenido">
                    <div className="all-content all-content-reset">
                        <div className="center">
                            <img src={imgUser} alt="iniciar-sesion" />  
                            <p className="title-rosa title-recover">¿Olvidaste tu contraseña?</p>
                            <p className="bienvenido reset-password">Te enviaremos un correo electrónico con los pasos a <br />seguir para que puedas restablecer tu contraseña</p>
                        </div>
                        <div className="container-center">
                            <div className="container-form-login container-form-reset">
                                <form
                                    onSubmit = { handleSubmit( submitForm )}
                                >
                                    <div className="separate-inputs">
                                        <div className="wrapper-input">
                                            <label htmlFor="email" >Por favor ingresa tu correo electrónico:</label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                {...register('email')}
                                            />
                                            <p className="error-input-login">{errors?.email?.message}</p>
                                        </div>
                                    </div>

                                    <div className="btn-only btn-only-reset" onClick= { handleSubmit( submitForm ) }>
                                        {/* <Link to="/restablecer-password"> */}
                                            <ButtonFilled color="pink">
                                                Continuar
                                            </ButtonFilled>
                                        {/* </Link> */}
                                    </div>
                                    <div className="btn-only btn-only-reset">
                                        <Link to="/iniciar-sesion">
                                            <ButtonFilled color="yellow">
                                                Cancelar
                                            </ButtonFilled>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Recover
