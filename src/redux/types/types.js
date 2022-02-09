

//Definir tipos de acctiones
export const types = {
    //ui 
    uiStartLoading : "[UI] start loading",
    uiFinishLoading : "[UI] finish loading",

    //Auth
    authLogin : "[AUTH] login",
    authStartChecking : "[AUTH] start checking",
    authFinishChecking : "[AUTH] finish checking",
    authLogout : "[AUTH] logout",
    
    //Supplier

    loadInfoSupplier  : "[SUPPLIER] load info",
    cleanSupplier : '[SUPPLIER] clean supplier',
    updateActiveStore : "[SUPPLIER] update store",

    setActiveProduct : "[PRODUCT] set active",
    setActiveAllProducts : "[PRODUCT] set active all products",
    unsetActiveProduct : "[PRODUCT] remove active",
    unsetActiveAllProducts : "[PRODUCT] remove active all products",
    deleteProduct : "[PRODUCT] delete product",

    setActiveStore  : "[STORE] set active",
    setInfoActiveStore : "[STORE] set info active store",
    setStores : "[STORE] set stores",
    setProductsByStore : "[STORE] set products by store",
    setProductsDisabledByStore : "[STORE] set products disabled by store",
    cleanStore : "[STORE] clean store",

		//Orders
		setOrdersByStore  : "[ORDERS] set orders by store",
    setOrdersBySupplier : '[ORDERS] set orders by supplier',

    uiClean : "[UI] clean",
}