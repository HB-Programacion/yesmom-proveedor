import axios from "axios";

export const getSupplierProducts = async ( token ) => {
    try {

        const { data }  = await axios.get(`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/supplier/getproductspage?skip=0&limit=6&state=A` , {
            headers : {
                'access-token' : token
            }
        });
        
        if(data?.productosGeneral){
            const cleanData = prepareDataProductSupplier( data.productosGeneral );
        
            return {
                products : cleanData,
                total : data.totalDeProductos,
            };
        }else{
            return {
                total : 0,
                products : []
            };
        }

    }catch(e){
        console.log(e.message);
        // window.location.reload();
        return [];
    }
}

export const getSupplierProductsDisabled = async ( token ) => {
    try {

        const { data }  = await axios.get(`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/supplier/getproductspage?skip=0&limit=6&state=D` , {
            headers : {
                'access-token' : token
            }
        });
        
        if(data?.productosGeneral){
            const cleanData = prepareDataProductSupplier( data.productosGeneral );
        
            return {
                productsDisabled : cleanData,
                total : data.totalDeProductos,
            };
        }else{
            return {
                total : 0,
                productsDisabled : []
            };
        }

    }catch(e){
        console.log(e.message);
        window.location.reload();
        return [];
    }
}



export const getSupplierProductsPaginate = async ( token , {
    skip,
    limit,
    state = 'A'
} ) => {
    try {

        const { data }  = await axios.get(`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/supplier/getproductspage?skip=${skip}&limit=6&state=${state}` , {
            headers : {
                'access-token' : token
            }
        });
        
        if(data?.productosGeneral){
            const cleanData = prepareDataProductSupplier( data.productosGeneral );
        
            return {
                products : cleanData,
                total : data.totalDeProductos,
            };
        }else{

            return {
                total : 0,
                products : []
            };
        }

    }catch(e){
        console.log(e.message);
        window.location.reload();
        return [];
    }
}
export const getSupplierProductsDisabledPaginate = async ( token , {
    skip,
    limit,
    state = 'D'
} ) => {
    try {
        const { data }  = await axios.get(`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/supplier/getproductspage?skip=${skip}&limit=6&state=${state}` , {
            headers : {
                'access-token' : token
            }
        });
        
        if(data?.productosGeneral){
            const cleanData = prepareDataProductSupplier( data.productosGeneral );
        
            return {
                productsDisabled : cleanData,
                total : data.totalDeProductos,
            };
        }else{

            return {
                total : 0,
                products : []
            };
        }

    }catch(e){
        console.log(e.message);
        window.location.reload();
        return [];
    }
}

export const prepareDataProductSupplier = ( data ) => {
    //schema
    const products = data.map((  { imagen , product} ) => ({
        id : product._id,
        image : imagen.url,
        title : product.nombre,
        description: product.descripcion,
        price : product.precio,
        discount : !!product.precioPromocional ? product.precio-product.precioPromocional : 0 ,
        sku : product.sku,
        precioPromocional : product.precioPromocional,
        accesorios : product.accesorios,
        color : product.color.map(col => col.name),
        talla : product.talla,
        dimensiones : product.dimensiones,
        createdAt : product.createdAt,
        visible : product.state==='A' ? true : false,
        categoria : product.categoria,
        categoriaAdicional : product.categoriaadicional,
        fechaInicioPromocion : product.fechaInicioPromocion,
        fechaFinPromocion : product.fechaFinPromocion,
        cantDisponible : product.cantDisponible

    }))

    return products;
}