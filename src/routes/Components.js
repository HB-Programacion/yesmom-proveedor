import { lazy } from "react";
import Construccion from "../pages/construccion/Construccion";
import Politicas from "../pages/politicasdeprivacidad/Politicas";

//Views
export const Home = lazy(() => import("../pages/Home/Home"));
export const Registro = lazy(() => import("../pages/registro/Registro"));
export const AddProductExcel = lazy(() => import("../pages/producto/Excel/AddProductExcel"));
export const ShowProduct = lazy(() =>import("../pages/producto/ShowProducts/ShowProduct"));
export const SeeProducts = lazy(() => import("../pages/producto/VisualizateProducts/SeeProducts"));
export const Resumen = lazy(() => import("../pages/ordenes/resumen/Resumen"));
export const ResumenVenta = lazy(() => import("../pages/ventas/ResumenVenta"));
export const Login = lazy(() => import("../pages/login/Login"));
export const RecoverPassword = lazy(() => import("../pages/login/RecoverPassword"));
export const ResetPassword = lazy(() => import("../pages/login/ResetPassword"));
export const InfoPerfilRegistro = lazy(() =>import("../pages/perfil/registro/Registro"));
export const ChangePassword = lazy(() => import("../pages/perfil/cambiar-password/ChangePassword"));
export const ProfileStoreGeneral = lazy(() => import("../pages/perfil/tienda/ProfileStoreGeneral"));
export const Previsualizacion = lazy(() => import("../pages/perfil/previsualizacion/Previsualizacion"));

export const ComponentNotFound = lazy(() => import("../pages/404"));
export const NewStore = lazy (() => import("../pages/store/profile/NewStore"))
export const LoadProducts = lazy(()=>import("../pages/store/profile/LoadProducts"));
export const ActiveProducts = lazy(() => import("../pages/producto/ActiveProducts/ActiveProducts"));
export const EliminarTienda = lazy(() => import("../pages/perfil/eliminar-tienda/EliminarTienda"));