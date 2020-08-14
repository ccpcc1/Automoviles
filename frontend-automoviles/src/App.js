import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Automoviles  from "./contenedores/automoviles";
import detalleAutomovil from "./components/detalleAutomovil";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="contaniner">
        <Switch>
            <Route exact  path="/automoviles/actualizar">
              
            </Route>
            <Route exact  path="/automoviles/editar">

            </Route>
            <Route exact  path="/automoviles/detalles:id" component={detalleAutomovil}>

            </Route>
            <Route exact  path="/automoviles" component={Automoviles}>
            </Route>
            <Route exact  path="/">
            </Route>
            <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
