import * as yup from 'yup';

export const schemaUpdate = yup.object().shape({
	nombre : yup.string(),
	descripcion : yup.string(),
	precio : yup.number().positive(),
	peso : yup.number().positive(),
	categoria : yup.string(),
	largo: yup.number().positive(),
	ancho: yup.number().positive(),
	alto: yup.number().positive(),
	fechaInicioPromocion: yup.date(),
	fechaFinPromocion: yup.date(),
  })