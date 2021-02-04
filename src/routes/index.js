import React from 'react'
import {Router, Switch, Route, Redirect} from 'react-router-dom'
import history from "../history";

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path={'/route'} component={PageComponent}/>
            </Switch>
        </Router>
    )
}

export default Routes