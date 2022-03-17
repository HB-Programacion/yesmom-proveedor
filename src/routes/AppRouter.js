import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    BrowserRouter , 
    Routes , 
    Route
} from "react-router-dom"

import Loading from "../components/Loading/Loading";
import { finishChecking, validateLoginSupplier } from "../redux/actions/auth";

import { 
    ComponentNotFound,
    Home, 
    Login, 
    Politicas, 
    RecoverPassword, 
    Registro, 
    ResetPassword 
} from "./Components";


import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AuthRoutes from "./AuthRoutes";
import { loadOrdersByStore } from "../redux/actions/store";



const AppRouter = () => {

    const dispatch = useDispatch();

    const { checking } = useSelector( state => state.auth); 
    const { idActiveStore, stores } = useSelector(state => state.store);
    const { 
        logged = (
            localStorage.getItem('TokenYesmonProveedor') ? true : false
        )
    } = useSelector(state => state.auth);

    useEffect(()=>{
        const token = localStorage.getItem('TokenYesmonProveedor') || null;
        if(token){//Existe token autenticado
            dispatch( validateLoginSupplier(token))
        }else{
            dispatch(finishChecking())
        }
    },[dispatch])

    useEffect(()=>{
        if(stores){
            dispatch(loadOrdersByStore({id : '0', state: "P", limit: 4}))
        }
    },[stores, dispatch])

    if ( checking ) return <Loading />
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    {/* Rutas sin auth */}
                    <Route path="/iniciar-sesion" element={
                        <PublicRoute logged={ logged }>
                            <Login />
                        </PublicRoute>
                    } />
                    <Route path="/registro" element={
                        <PublicRoute logged={ logged }>
                            <Registro />
                        </PublicRoute>
                    } />
                    
                    <Route path="/restablecer-password/:token/:id" element={
                        <PublicRoute logged={ logged }>
                            <ResetPassword />
                        </PublicRoute>
                    } />


                    <Route path="/*" element = {
                        <PrivateRoute logged={ logged }>
                            <AuthRoutes />
                        </PrivateRoute>
                    } />

                    <Route path="/" element={ <Home /> } />
                    <Route path="/recuperar-password" element={ <RecoverPassword /> } />
                    <Route path="/politicas" element={ <Politicas /> } />
                    {/* <Route path="/restablecer-password/:token/:id" element={ <ResetPassword /> } /> */}
                    <Route path="/404" element={ <ComponentNotFound /> } />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRouter
