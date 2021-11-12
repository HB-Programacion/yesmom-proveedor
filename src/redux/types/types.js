

//Definir tipos de acctiones
export const types = {
    //Auth
    authLogin : "[AUTH] login",
    authLogout : "[AUTH] logout",
    
    //Supplier

    loadInfoSupplier  : "[SUPPLIER] load info",
    cleanSupplier : '[SUPPLIER] clean supplier',
    cleanSupplierProducts : '[SUPPLIER] clean supplier products',
    loadSupplierProducts : "[SUPPLIER] get products",
    loadSupplierProductsDisabled : "[SUPPLIER] get products disabled",
    loadSupplierProductsPaginate : "[SUPPLIER] get products paginate",
    loadSupplierImages : "[SUPPLIER] get images",
    updateActiveStore : "[SUPPLIER] update store",
    setActiveProduct : "[PRODUCT] set active",
    setActiveAllProducts : "[PRODUCT] set active all products",
    unsetActiveProduct : "[PRODUCT] remove active",
    unsetActiveAllProducts : "[PRODUCT] remove active all products",
    deleteProduct : "[PRODUCT] delete product",
}