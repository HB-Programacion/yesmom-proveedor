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
import ShowProduct from "../pages/producto/ShowProduct";
import AddProductExcel from "../pages/producto/AddProductExcel";
import SeeProducts from "../pages/producto/SeeProducts";


const AppRouter = () => {

  const [tokenAutentificado, setTokenAutentificado] = useState(localStorage.getItem('TokenYesmonProveedor'));

  useEffect(() => {
    setTokenAutentificado(localStorage.getItem('TokenYesmonProveedor'))
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AddProduct} tokenAutentificado={tokenAutentificado}/>
        <Route exact path="/product-excel" component={AddProductExcel} tokenAutentificado={tokenAutentificado}/>
        <Route exact path="/show-product" component={ShowProduct} tokenAutentificado={tokenAutentificado}/>
        <Route exact path="/see-products" component={SeeProducts} tokenAutentificado={tokenAutentificado}/>
        <Route exact path="/login" component={SignIn} tokenAutentificado={tokenAutentificado} />
        {/* <Route exact path="/caru" component={CarouselContainer} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;