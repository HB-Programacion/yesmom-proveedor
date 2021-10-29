
import { getDateParsed } from "./getDateParsed"


export const getModalProduct = ( product = {} ) => {
    
    return {
        ...product,
        nombre : product.title,
        descripcion : product.description,
        precio : product.price,
        peso : 50,
        largo : product.dimensiones.largo,
        ancho : product.dimensiones.ancho,
        alto : product.dimensiones.alto,
        fechaInicioPromocion : getDateParsed(product.fechaInicioPromocion),
        fechaInicioPromocion : getDateParsed(product.fechaFinPromocion),
    }
}