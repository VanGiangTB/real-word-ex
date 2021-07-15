import React from 'react';
import {
    BrowserRouter, 
    Switch,
    Route,

} from 'react-router-dom';
import NavBar from '../common';
import { routes } from '../routes';
import SignUp from './Register';

export default function Wrapper(){
    return(
        <BrowserRouter>
            <NavBar />
                <Switch>
                    {
                        routes.map((route, index) =>(
                            <Route key={index} path={route.path} exact={route.exact}>
                                <route.component/>
                            </Route>
                        ))
                    }
                    {/* <SignUp/> */}
                </Switch>
        </BrowserRouter>
        
    )
}