
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children , logged }) => {
    return !logged ? children : <Navigate to="/p/info/registro" replace/>
}

export default PublicRoute
