import React, {useEffect,useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import { routes } from "./routes";
import { Suspense } from "react";
import Loading from "../components/Loading/Loading";


const AppRouter = () => {

  const [tokenAutentificado, setTokenAutentificado] = useState(localStorage.getItem('TokenYesmonProveedor'));

  useEffect(() => {
    setTokenAutentificado(localStorage.getItem('TokenYesmonProveedor'))
  }, []);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <div>
          <Switch>
            {
              routes.map(( route , i) => (
                <Route 
                  key={i} 
                  exact 
                  path={route.path} 
                  component={route.component} 
                />
              ))
            }
            </Switch>
        </div>
      </Suspense>
    </Router>
  );
};

export default AppRouter;