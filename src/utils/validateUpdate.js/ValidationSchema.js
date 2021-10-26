import * as yup from 'yup';

export const schemaUpdate = yup.object().shape({
	nombre : yup.string(),
	descripcion : yup.string(),
	precio : yup.number('*Campo incorrecto').positive('*Campo incorrecto'),
	peso : yup.number('*Campo incorrecto').positive('*Campo incorrecto'),
	categoria : yup.string(),
	largo: yup.number('*Campo incorrecto').positive('*Campo incorrecto'),
	ancho: yup.number('*Campo incorrecto').positive('*Campo incorrecto'),
	alto: yup.number('*Campo incorrecto').positive('*Campo incorrecto'),
	fechaInicioPromocion: yup.date(),
	fechaFinPromocion: yup.date(),
  })