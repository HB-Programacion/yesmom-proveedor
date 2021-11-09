import * as yup from 'yup';

export const schemaUpdate = yup.object().shape({
	nombre : yup.string().required('*Campo requerido'),
	descripcion : yup.string().required('*Campo requerido'),
	precio : yup.number('*Campo incorrecto').positive('*Campo incorrecto').required('*Campo requerido'),
	peso : yup.number('*Campo incorrecto').positive('*Campo incorrecto').required('*Campo requerido'),
	categoria : yup.string().required('*Campo requerido'),
	largo: yup.number('*Campo incorrecto').positive('*Campo incorrecto').required('*Campo requerido'),
	ancho: yup.number('*Campo incorrecto').positive('*Campo incorrecto').required('*Campo requerido'),
	alto: yup.number('*Campo incorrecto').positive('*Campo incorrecto').required('*Campo requerido'),
	precioPromocional : yup.number('*Campo incorrecto').positive('*Campo incorrecto').required('*Campo requerido'),
	fechaInicioPromocion: yup.date(),
	fechaFinPromocion: yup.date(),
  })