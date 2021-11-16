import React, { useEffect, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { bothRoutes, publicRoutes } from "./routes";
import { validateLoginSupplier } from '../redux/actions/auth'

import PublicRoute from "./PublicRoutes/PublicRoute";
import PrivateRoute from "./ProtectedRoutes/PrivateRoute";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import Loading from "../components/Loading/Loading";

export const SecureAppRouter = () => {

    const dispatch = useDispatch();
/*     const [ isAuthenticated , setIsAuthenticated] = useState(
        localStorage.getItem('TokenYesmonProveedor') ? true : false
    ) */

    const { 
        logged:isAuthenticated = (
            localStorage.getItem('TokenYesmonProveedor') ? true : false
        )
    } = useSelector(state => state.auth);

    // const getValidation = async (token) => {
    //     const flag = await validateLoginSupplier(token);
    //     if(flag){
    //         dispatch( startLogin(token))
    //     }
    // }

    useEffect(()=>{
        const token = localStorage.getItem('TokenYesmonProveedor');
        if(token){//Existe token autenticado
            // getValidation(token);
            dispatch( validateLoginSupplier(token))
        }
    },[dispatch])

    return (
        <Router>
            <Suspense fallback= { <Loading />}>
                <div>
                    <Switch>
                       
                       {
                           //Rutas publicas solo sin estar autenticado
                           publicRoutes.map((route, i) => (
                                <PublicRoute
                                    key={i}
                                    exact
                                    path = {route.path}
                                    isAuthenticated={isAuthenticated}
                                    component={ route.component }
                                />   
                            ))
                       }
                       {/* Rutas protegidas para proveedor */}
                       <PrivateRoute
                            isAuthenticated= { isAuthenticated }
                            component = { ProtectedRoutes}
                            path="/p"
                       />



                        {
                            //Las rutas para ambos casos
                            bothRoutes.map((route,i) => (
                                <Route 
                                    key={i}
                                    exact
                                    path={route.path}
                                    component = { route.component}
                                    />
                                ))
                        } 

                       <Redirect to="/"/>
                    </Switch>
                </div>
            </Suspense>
        </Router>
    )
}
