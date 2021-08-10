import React, { useReducer, useEffect, useContext, useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useRouteMatch,
  useLocation,
  useParams,
} from "react-router-dom";
import SignIn from './../pages/auth/SignIn';
import AddProduct from "../pages/producto/AddProduct/AddProduct";
import RutaPrivada from "./PrivateRoute";
import RutaPublica from "./PublicRoute";
import AddProductExcel from "../pages/producto/Excel/AddProductExcel";
import ShowProduct from "../pages/producto/ShowProducts/ShowProduct";
import SeeProducts from "../pages/producto/VisualizateProducts/SeeProducts";
import Home from "../pages/Home/Home";
import Resumen from "../pages/ordenes/resumen/Resumen";
import Login from "../pages/login/Login";
import RecoverPassword from "../pages/login/RecoverPassword";
import ResetPassword from "../pages/login/ResetPassword";
import Registro from "../pages/registro/Registro";
import ResumenVenta from "../pages/ventas/ResumenVenta";
import InfoPerfil from "../pages/perfil/InfoPerfil";
import InfoPerfilRegistro from "../pages/perfil/registro/Registro";
import Profile from "../pages/store/profile/Profile";
import ChangePassword from "../pages/perfil/cambiar-password/ChangePassword";
import ProfileStoreGeneral from "../pages/perfil/tienda/ProfileStoreGeneral";
import ActiveProducts from "../pages/producto/ActiveProducts/ActiveProducts";
import Previsualizacion from "../pages/perfil/previsualizacion/Previsualizacion";
import Terminos from "../pages/perfil/terminos/Terminos";
import DesactivarCuenta from "../pages/perfil/desactivar-cuenta/DesactivarCuenta";


const AppRouter = () => {

  const [tokenAutentificado, setTokenAutentificado] = useState(localStorage.getItem('TokenYesmonProveedor'));

  useEffect(() => {
    setTokenAutentificado(localStorage.getItem('TokenYesmonProveedor'))
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} tokenAutentificado={tokenAutentificado} />
        <Route exact path="/add-new-product" component={AddProduct} tokenAutentificado={tokenAutentificado} />
        <Route exact path="/product-excel" component={AddProductExcel} tokenAutentificado={tokenAutentificado} />
        <Route exact path="/show-product" component={ShowProduct} tokenAutentificado={tokenAutentificado} />
        <Route exact path="/productos-activos" component={ActiveProducts} />
        <Route exact path="/visualizate-products" component={SeeProducts} tokenAutentificado={tokenAutentificado} />
        <Route exact path="/resumen" component={Resumen} tokenAutentificado={tokenAutentificado} />
        <Route exact path="/resumen-venta" component={ResumenVenta} tokenAutentificado={tokenAutentificado} />
        {/* LOGIN */}
        <Route exact path="/iniciar-sesion" component={Login} tokenAutentificado={tokenAutentificado}/>
        <Route exact path="/recuperar-password" component={RecoverPassword} tokenAutentificado={tokenAutentificado}/>
        <Route exact path="/restablecer-password" component={ResetPassword} tokenAutentificado={tokenAutentificado}/>
        <Route exact path="/informacion-perfil" component={InfoPerfil} tokenAutentificado={tokenAutentificado}/>
        <Route exact path="/informacion-perfil/registro" component={InfoPerfilRegistro} tokenAutentificado={tokenAutentificado}/>
        <Route exact path="/informacion-perfil/cambiar-password" component={ChangePassword} tokenAutentificado={tokenAutentificado}/>
        <Route exact path="/informacion-perfil/perfil-tienda" component={ProfileStoreGeneral} tokenAutentificado={tokenAutentificado}/>
        <Route exact path="/informacion-perfil/previsualizacion" component={Previsualizacion} tokenAutentificado={tokenAutentificado}/>
        <Route exact path="/informacion-perfil/terminos" component={Terminos} tokenAutentificado={tokenAutentificado}/>
        <Route exact path="/informacion-perfil/desactivar-cuenta" component={DesactivarCuenta} tokenAutentificado={tokenAutentificado}/>

        {/*******/}
        {/**REGISTRO */}
        <Route exact path="/registro" component={Registro} />
        {/**PROFILE - STORE */}
        <Route exact path="/perfil-tienda" component={Profile} />

        {/*******/}

        <Route exact path="/login" component={SignIn} tokenAutentificado={tokenAutentificado} />
        {/* <Route exact path="/caru" component={CarouselContainer} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;