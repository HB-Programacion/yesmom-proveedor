import React, {useEffect,useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import { routes } from "./routes";
import { Suspense } from "react";


const AppRouter = () => {

  const [tokenAutentificado, setTokenAutentificado] = useState(localStorage.getItem('TokenYesmonProveedor'));

  useEffect(() => {
    setTokenAutentificado(localStorage.getItem('TokenYesmonProveedor'))
  }, []);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
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