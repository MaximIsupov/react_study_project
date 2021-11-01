import React from 'react'
import App from './app'
import Landing from './landing'
import NotFound from './NotFound'
import {Switch, BrowserRouter, Route} from 'react-router-dom';


const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Landing}></Route>
                <Route path='/restaurant/:restaurant_id' component={App}></Route>
                <Route component = {NotFound}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;