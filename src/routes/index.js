import React from 'react'
import {Router, Switch, Route, Redirect} from 'react-router-dom'
import history from "../history";
import HomePage from "../pages/Home";
import EntendaMelhorPage from "../pages/EntendaMelhor";
import ResultadoPage from "../pages/ResultadoPage";

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <Route exact path={'/como-funciona'} component={EntendaMelhorPage}/>
                <Route exact path={'/resultado'} component={ResultadoPage}/>
            </Switch>
        </Router>
    )
}

export default Routes