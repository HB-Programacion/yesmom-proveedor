
import { getDateParsed } from "./getDateParsed"


export const getModalProduct = ( product = {} ) => {

    const fechaInicioPromocion = getDateParsed(product.fechaInicioPromocion);
    const fechaFinPromocion = getDateParsed(product.fechaFinPromocion);

    
    return {
        ...product,
        nombre : product.title,
        descripcion : product.description,
        precio : product.price,
        peso : 50,
        largo : product.dimensiones.largo,
        ancho : product.dimensiones.ancho,
        alto : product.dimensiones.alto,
        fechaInicioPromocion,
        fechaFinPromocion 
    }
}