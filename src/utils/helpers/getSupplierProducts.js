import axios from "axios";

export const getSupplierProducts = async ( token ) => {
    try {
        const userType = "admin";
        const idSupplier = "614cdeb4686d50c2139605be";

        const { data }  = await axios.get(`${process.env.REACT_APP_BACKEND_URL_BUSINESS}/get-product-pagination/${userType}?skip=0&limit=10&state=A&supplier=${idSupplier}`);
        
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
        image : imagen.url,
        title : product.nombre,
        description: product.descripcion,
        price : product.precio,
        discount : product.precio-product.precioPromocional
    }))

    return products;
}