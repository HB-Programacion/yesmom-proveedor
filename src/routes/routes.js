
import { lazy } from 'react'


//Views

const Home = lazy( () => import('../pages/Home/Home'));
const Registro = lazy( () => import('../pages/registro/Registro'));
const AddProduct = lazy( () => import('../pages/producto/AddProduct/AddProduct'));
const AddProductExcel = lazy( () => import('../pages/producto/Excel/AddProductExcel'));
const ShowProduct = lazy( () => import('../pages/producto/ShowProducts/ShowProduct'));
const ActiveProducts = lazy( () => import('../pages/producto/ActiveProducts/ActiveProducts'));
const SeeProducts = lazy( () => import('../pages/producto/VisualizateProducts/SeeProducts'));
const Resumen = lazy( () => import('../pages/ordenes/resumen/Resumen'));
const ResumenVenta = lazy( () => import('../pages/ventas/ResumenVenta'));
const Profile = lazy( () => import('../pages/store/profile/Profile'));


const Login = lazy(() => import('../pages/login/Login'));
const RecoverPassword = lazy(() => import('../pages/login/RecoverPassword'));
const ResetPassword = lazy(() => import('../pages/login/ResetPassword'));


const InfoPerfil = lazy(() => import('../pages/perfil/InfoPerfil'));
const InfoPerfilRegistro = lazy(() => import('../pages/perfil/registro/Registro'));
const ChangePassword = lazy(() => import('../pages/perfil/cambiar-password/ChangePassword'));
const ProfileStoreGeneral = lazy(() => import('../pages/perfil/tienda/ProfileStoreGeneral'));
const Previsualizacion = lazy(() => import('../pages/perfil/previsualizacion/Previsualizacion'));
const Terminos = lazy(() => import('../pages/perfil/terminos/Terminos'));
const DesactivarCuenta = lazy(() => import('../pages/perfil/desactivar-cuenta/DesactivarCuenta'));

const SignIn = lazy(() => import('../pages/auth/SignIn'))

//without token
export const routes = [
    { path : "/" , component : Home },
    { path : "/registro" , component : Registro },
    { path : "/add-new-product" , component : AddProduct },
    { path : "/product-excel" , component : AddProductExcel},
    { path : "/show-product" , component : ShowProduct },
    { path : "/visualizate-products" , component : SeeProducts },
    { path : "/resumen" , component : Resumen },
    { path : "/resumen-venta" , component : ResumenVenta },
    { path : "/perfil-tienda" , component : Profile }, //////////////////////////////////////////////
    
    //Auth

    { path : "/iniciar-sesion" , component : Login },
    { path : "/recuperar-password" , component : RecoverPassword },
    { path : "/restablecer-password" , component : ResetPassword },

    //Perfil
    { path : "/informacion-perfil" , component : InfoPerfil },
    { path : "/informacion-perfil/registro" , component : InfoPerfilRegistro },
    { path : "/informacion-perfil/productos-activos" , component : ActiveProducts },
    { path : "/informacion-perfil/cambiar-password" , component : ChangePassword },
    { path : "/informacion-perfil/perfil-tienda" , component : ProfileStoreGeneral },
    { path : "/informacion-perfil/previsualizacion" , component : Previsualizacion },
    { path : "/informacion-perfil/terminos" , component : Terminos },
    { path : "/informacion-perfil/desactivar-cuenta" , component : DesactivarCuenta },

    //
    //Admin - todo : reemplazar
    { path : "/login" , component : SignIn },

]
