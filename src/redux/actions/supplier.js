import { types } from "../types/types";


export const startLoadingInfoSupplier = (token) => {
    return async (dispatch) => {
        //Traer data del usuario
        //Llamar a endpoint con el token
        console.log('loading data');

        dispatch( loadingDataSupplier());

    }
}

export const loadingDataSupplier = () => ({
    type : types.loadInfoSupplier,
    payload : {
        "ruc": 11111111111,
        "autorizado": false,
        "cciCuenta": "11111111111111111111",
        "ciudad": "Lima",
        "correoElectronico": "mwly@gmail.com",
        "createdAt": "2021-09-27T22:07:12.212Z",
        "direccion": "Av. Metropolitana 1173",
        "distrito": "Comas",
        "dniRucTitular": "74231653",
        "documentoRepresentante": "74231653",
        "entidadBancaria": "Bcp",
        "nombreCompletoEncargado": "Melany Nicolle Tirado Mendieta",
        "nombreCompletoRepresentante": "Melany Nicolle Tirado Mendieta",
        "nombreTienda": "Cat Store",
        "numeroCuentaSoles": "11111111111111111",
        "paginaWeb": "www.abcde.com",
        "pais": "Perú",
        "razonSocial": "Comercio",
        "telefono": "933475707",
        "telefonoEmpresa": "933475707",
        "titularCuenta": "Melany Tirado"
    }
})

//Perfil
export const getInfoProfile = () => {}