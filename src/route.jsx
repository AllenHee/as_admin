import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import * as containers from './container';

const BasicRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/index" component={containers.App}></Route>
            <Route exact path='/message' component={containers.Message}></Route>
            <Route exact path='/home' component={containers.Home}></Route>
        </Switch>
    </Router>
)

export default BasicRouter;