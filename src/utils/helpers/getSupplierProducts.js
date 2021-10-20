import axios from "axios";

export const getSupplierProducts = async ( token ) => {
    try {

        const { data }  = await axios.get(`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/supplier/getproductspage?skip=0&limit=10&state=A` , {
            headers : {
                'access-token' : token
            }
        });
        
        if(data?.productosGeneral){
            const cleanData = prepareDataProductSupplier( data.productosGeneral );
        
            return cleanData;
        }else{
            return [];
        }

    }catch(e){
        console.log(e.message);
        console.log('Algo salio mal');
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
        discount : product.precio-product.precioPromocional
    }))

    return products;
}