import React from "react";
import { Route, BrowserRouter, Switch, Redirect} from "react-router-dom";

import Home from '../screens/home/Home'
import Login from '../screens/login/Login'
import CreateUser from "../screens/createUser/CreateUser";
import CreateClient from "../screens/createClient/CreateClient";
import UpdateClient from "../screens/updateClient/UpdateClient";
import DeleteClient from "../screens/deleteClient/DeleteClient";
import ViewClient from "../screens/viewClient/ViewClient";
import CreateProperty from "../screens/createProperty/CreateProperty";
import UpdateProperty from "../screens/updateProperty/UpdateProperty";
import DeleteProperty from "../screens/deleteProperty/DeleteProperty";
import ViewProperty from "../screens/viewProperty/ViewProperty";
import CreateContract from "../screens/createContract/CreateContract";
import UpdateContract from "../screens/updateContract/UpdateContract";
import DeleteContract from "../screens/deleteContract/DeleteContract";
import ViewContract from "../screens/viewContract/ViewContract";

import {AuthConsumer} from "../main/SessionProvider";
import UpdateUser from "../screens/updateUser/UpdateUser";
import ViewUser from "../screens/viewUsers/ViewUser";

function RestrictedRoute( { component: Component, show, ...props } ){
    return (
        <Route exact {...props} render={ (componentProps) => {
            if(show){
                return (
                    <Component {...componentProps} />
                )
            }else{
                return(
                    <Redirect to={ {pathname : '/login', state : { from: componentProps.location } } } />
                )
            }
        }}  />
    )
 }


function AppRoutes(props){
    return(
        <BrowserRouter>
            <Switch>
                <Route component={Home} path = "/" exact/>
                <Route component={Login} path = "/login"/>
                <Route component={CreateUser} path = "/createUser"/>
                
                <RestrictedRoute show={props.isAuthenticated}  component={ViewUser} path = "/viewUser"/>
                <RestrictedRoute show={props.isAuthenticated}  component={UpdateUser} path = "/updateUser/:id"/>
                <RestrictedRoute show={props.isAuthenticated}  component={CreateClient} path = "/createClient"/>
                <RestrictedRoute show={props.isAuthenticated}  component={UpdateClient} path = "/updateClient/:id"/>
                <RestrictedRoute show={props.isAuthenticated}  component={DeleteClient} path = "/deleteClient"/>
                <RestrictedRoute show={props.isAuthenticated}  component={ViewClient} path = "/viewClient"/>
                <RestrictedRoute show={props.isAuthenticated} component={CreateProperty} path = "/createProperty"/>
                <RestrictedRoute show={props.isAuthenticated} component={UpdateProperty} path = "/updateProperty/:id"/>
                <RestrictedRoute show={props.isAuthenticated} component={DeleteProperty} path = "/deleteProperty"/>
                <RestrictedRoute show={props.isAuthenticated} component={ViewProperty} path = "/viewProperty"/>
                <RestrictedRoute show={props.isAuthenticated} component={CreateContract} path = "/createContract"/>
                <RestrictedRoute show={props.isAuthenticated} component={UpdateContract} path = "/updateContract"/>
                <RestrictedRoute show={props.isAuthenticated} component={DeleteContract} path = "/deleteContract"/>
                <RestrictedRoute show={props.isAuthenticated} component={ViewContract} path = "/viewContract"/>             
            </Switch>            
        </BrowserRouter>

    );
}

export default () => (
    <AuthConsumer>
        {(context) => (<AppRoutes isAuthenticated={context.isAuthenticated}/>)}
    </AuthConsumer>
) 
