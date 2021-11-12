import * as yup from "yup";
import { getUrlName } from "../helpers/getUlrName";
import { verifyStoreName } from "../helpers/verifyStoreName";

//Some regex
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const dniRegExp = /^\d{8}(?:[-\s]\d{4})?$/;
const urlRegExp = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/

//Custom validation

const validateStore = async ( )=> {

}

yup.addMethod(yup.string, "verifyName", function (errorMessage) {
    return this.test(`test-available-name`, errorMessage, async function (value) {
      const { path, createError } = this;
    
      const flag = await verifyStoreName(getUrlName(value) ,  'asdas');
      return (
        flag ||
        createError({ path, message: errorMessage })
      );
    });
  });

//Schema global
export const schemaValidator = yup.object().shape({
    //Registro 1
    nombreCompletoEncargado : yup.string().required('*Este campo es requerido').matches(/^[a-z ,.'-]+$/i,'*Nombres incorrectos'),
    telefono: yup.string().required('*Este campo es requerido').matches(phoneRegExp, '*Teléfono incorrecto'),
    nombreTienda : yup.string()
                    .verifyName('*No disponible')
                    .required('*Este campo es requerido'),
    correoElectronico : yup.string().email('*Correo electrónico inválido').required('*Este campo es requerido'),
    contrasenia : yup.string().min(5,'*Mínimo 5 caracteres').required('*Este campo es requerido')
})


export const schemaValidatorWithoutPassword = yup.object().shape({
    //Registro 1
    nombreCompletoEncargado : yup.string().required('*Este campo es requerido').matches(/^[a-z ,.'-]+$/i,'*Nombres incorrectos'),
    telefono: yup.string().required('*Este campo es requerido').matches(phoneRegExp, '*Teléfono incorrecto'),
    nombreTienda : yup.string().required('*Este campo es requerido'),
    correoElectronico : yup.string().email('*Correo electrónico inválido').required('*Este campo es requerido'),

})

export const schemaValidatorStep2 = yup.object().shape({
    //Registro 2
    nombreCompletoRepresentante: yup.string().required('*Este campo es requerido').matches(/^[a-z ,.'-]+$/i,'*Nombres incorrectos'),
    documentoRepresentante: yup.string().required('*Este campo es requerido').matches(dniRegExp,' *DNI incorrecto'),
    razonSocial : yup.string().required('*Este campo es requerido'),
    ruc : yup.string().required('Este campo es requerido').matches(/^[0-9]+$/,'*RUC incorrecto')
            .min(11, '*Deben ser exactamente 11 digitos')
            .max(11, 'Deben ser exactamente 11 digitos'),
    telefonoEmpresa: yup.string().required('*Este campo es requerido').matches(phoneRegExp, '*Teléfono incorrecto'),
    pais: yup.string().required('*Este campo es requerido'),
    ciudad: yup.string().required('*Este campo es requerido'),
    distrito: yup.string().required('*Este campo es requerido'),
    direccion: yup.string().required('*Este campo es requerido'),
    paginaWeb: yup.string().required('*Este campo es requerido').matches(urlRegExp,'*Pagina web incorrecta'),
})

export const schemaValidatorStep3 = yup.object().shape({
    //Registro 3
    titularCuenta : yup.string().required('*Este campo es requerido').matches(/^[a-z ,.'-]+$/i,'*Nombres incorrectos'),
    entidadBancaria: yup.string().required('*Este campo es requerido'),
    numeroCuentaSoles: yup.string().required('*Este campo es requerido')
            .matches(/^[0-9]+$/, "*Solo ingresa digitos"),
    dniRucTitular: yup.string().required('*Este campo es requerido').matches(dniRegExp,' *DNI incorrecto'),
    cciCuenta: yup.string().required('*Este campo es requerido')
                .matches(/^[0-9]+$/, "*Solo ingresa digitos")
                .min(20, '*Deben ser exactamente 20 digitos')
                .max(20, 'Deben ser exactamente 20 digitos'),
})

export const schemaValidatorStep4 = yup.object().shape({
    //Registro 4
    nombreEncargadoAlmacen : yup.string().required('*Este campo es requerido').matches(/^[a-z ,.'-]+$/i,'*Nombres incorrectos'),
    correoEncargadoAlmacen : yup.string().email('*Correo electrónico inválido').required('*Este campo es requerido'),
    telefonoAlmacen : yup.string().required('*Este campo es requerido').matches(phoneRegExp, '*Teléfono incorrecto'),
    direccionAlmacen : yup.string().required('*Este campo es requerido'),
    referenciaAlmacen : yup.string().required('*Este campo es requerido'),
    ciudadAlmacen : yup.string().required('*Este campo es requerido'),
})


export const mergedSchema = schemaValidator
                .concat(schemaValidatorStep2)
                .concat(schemaValidatorStep3)
                .concat(schemaValidatorStep4);

export const mergedSchemaWithoutPassword = schemaValidatorWithoutPassword
                .concat(schemaValidatorStep2)
                .concat(schemaValidatorStep3)
                .concat(schemaValidatorStep4);
                    