import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
import UserView from "./views/userView";
import NotFound from "./views/NotFound";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/Register">
          <Register />
        </Route>
        <Route exact path="/Trade" component={UserView} />


        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
