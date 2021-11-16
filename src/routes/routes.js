import { lazy } from "react";
import Politicas from "../pages/politicasdeprivacidad/Politicas";
//Views
const Home = lazy(() => import("../pages/Home/Home"));
const Registro = lazy(() => import("../pages/registro/Registro"));
// const AddProduct = lazy(() =>
//   import("../pages/producto/AddProduct/AddProduct")
// );
const AddProductExcel = lazy(() =>
  import("../pages/producto/Excel/AddProductExcel")
);
const ShowProduct = lazy(() =>
  import("../pages/producto/ShowProducts/ShowProduct")
);
const ActiveProducts = lazy(() =>
  import("../pages/producto/ActiveProducts/ActiveProducts")
);
// const SeeProducts = lazy(() =>
//   import("../pages/producto/VisualizateProducts/SeeProducts")
// );
const Resumen = lazy(() => import("../pages/ordenes/resumen/Resumen"));
const ResumenVenta = lazy(() => import("../pages/ventas/ResumenVenta"));
const Profile = lazy(() => import("../pages/store/profile/Profile"));
const Login = lazy(() => import("../pages/login/Login"));
const RecoverPassword = lazy(() => import("../pages/login/RecoverPassword"));
const ResetPassword = lazy(() => import("../pages/login/ResetPassword"));
/* const InfoPerfil = lazy(() => import("../pages/perfil/InfoPerfil")); */
const InfoPerfilRegistro = lazy(() =>
  import("../pages/perfil/registro/Registro")
);
const ChangePassword = lazy(() =>
  import("../pages/perfil/cambiar-password/ChangePassword")
);
const ProfileStoreGeneral = lazy(() =>
  import("../pages/perfil/tienda/ProfileStoreGeneral")
);
const Previsualizacion = lazy(() =>
  import("../pages/perfil/previsualizacion/Previsualizacion")
);
// const Terminos = lazy(() => import("../pages/perfil/terminos/Terminos"));
// const DesactivarCuenta = lazy(() =>
//   import("../pages/perfil/desactivar-cuenta/DesactivarCuenta")
// );
const SignIn = lazy(() => import("../pages/auth/SignIn"));

const ComponentNotFound = lazy(() => import("../pages/404"));

//Rutas que se muestran autenticado o no
export const bothRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: SignIn,
  }, //No va
  {
    path: "/404",
    component: ComponentNotFound,
  },
  {
    path: "/politica-de-privacidad",
    component: Politicas,
  },
];

//Rutas que se muestran sin estar autenticado , si estas autenticado no se deben mostrar
export const publicRoutes = [
  {
    path: "/iniciar-sesion",
    component: Login,
  },
  {
    path: "/registro",
    component: Registro,
  },
  {
    path: "/recuperar-password",
    component: RecoverPassword,
  },
  {
    path: "/restablecer-password",
    component: ResetPassword,
  },
];

//Rutas que se muestran si estas autenticado
export const protectedRoutes = [
  {
    path: "/p/resumen-venta",
    component: ResumenVenta,
  },
  {
    path: "/p/perfil-tienda",
    component: Profile,
  },
  {
    path: "/p/product-excel",
    component: AddProductExcel,
  },
  /* { path: "/p/add-new-product", component: AddProduct }, */
  {
    path: "/p/show-product",
    component: ShowProduct,
  },
  // { path: "/p/visualizate-products", component: SeeProducts },
  {
    path: "/p/resumen",
    component: Resumen,
  },
  /*  { path: "/p/informacion-perfil", component: InfoPerfil }, */
  {
    path: "/p/informacion-perfil/registro",
    component: InfoPerfilRegistro,
  },
  {
    path: "/p/informacion-perfil/productos-activos",
    component: ActiveProducts,
  },
  {
    path: "/p/informacion-perfil/cambiar-password",
    component: ChangePassword,
  },
  {
    path: "/p/informacion-perfil/perfil-tienda",
    component: ProfileStoreGeneral,
  },
  {
    path: "/p/informacion-perfil/previsualizacion",
    component: Previsualizacion,
  },
  // { path: "/p/informacion-perfil/terminos", component: Terminos },
  // { path: "/p/informacion-perfil/desactivar-cuenta", component: DesactivarCuenta },
];
