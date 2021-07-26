import React from 'react';
import {
    BrowserRouter, 
    Switch,
    Route,

} from 'react-router-dom';
import NavBar from '../common';
import { routes } from '../routes';


export default function Wrapper(){


    return(
        <BrowserRouter>
            <NavBar />
                <Switch>

                    {/* <Route path= '/' exact ><Home /></Route>
                    {
                        !checkLogin() ? (
                            <>
                                <Route path= '/signin' exact ><SignIn /></Route>
                                <Route path= '/signup' exact ><SignUp /></Route>
                            </>
                        ) : (
                            <>
                                <Route path= '/user' exact ><User /></Route>
                                <Route path= '/setting' exact ><Setting /></Route>
                                <Route path= '/newpost' exact ><NewPost /></Route>
                            </>
                        )
                    } */}



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