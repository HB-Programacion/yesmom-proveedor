import React, { useState , useEffect, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { bothRoutes, protectedRoutes, publicRoutes } from "./routes";
import Loading from "../components/Loading/Loading";
import { login } from '../redux/actions/auth'

import PublicRoute from "./PublicRoutes/PublicRoute";
import PrivateRoute from "./ProtectedRoutes/PrivateRoute";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";
import Home from "../pages/Home/Home";


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

    /* let isAuthenticated ;
    if(localStorage.getItem('TokenYesmonProveedor')){
        isAuthenticated = true;
    }else{
        isAuthenticated = false;
    } */
    useEffect(()=>{
        const token = localStorage.getItem('TokenYesmonProveedor');
        if(token){//Existe token autenticado
          dispatch( login(token))
        }
      },[])


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
