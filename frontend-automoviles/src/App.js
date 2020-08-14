import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Automoviles  from "./contenedores/automoviles";

function App() {
  return (
    <Router>
      <div className="contaniner">
        <Switch>
            <Route path="/automoviles/actualizar">
              
            </Route>
            <Route path="/automoviles/editar">

            </Route>
            <Route path="/automoviles/detalles">

            </Route>
            <Route path="/automoviles">
            <Automoviles></Automoviles>
            </Route>
            <Route path="/">
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
