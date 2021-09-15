import React, {useEffect,useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { bothRoutes, protectedRoutes, publicRoutes } from "./routes";
import { Suspense } from "react";
import Loading from "../components/Loading/Loading";

import PublicRoute from "./PublicRoutes/PublicRoute";
import PrivateRoute from "./ProtectedRoutes/PrivateRoute";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes";


export const SecureAppRouter = () => {

    const [isAuthenticated , setIsAuthenticated] = useState(false);
    return (
        <Router>
            <Suspense fallback= { <Loading />}>
                <div>
                    <Switch>
                       {
                           //Las rutas para ambos casos
                           bothRoutes.map((route,i) => (
                                <Route 
                                    key={i}
                                    path={route.path}
                                    exact
                                    component = { route.component}
                                />
                           ))
                       } 
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

                       <Redirect to="/" />
                    </Switch>
                </div>
            </Suspense>
        </Router>
    )
}
