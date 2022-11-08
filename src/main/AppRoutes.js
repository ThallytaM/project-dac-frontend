import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

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


function AppRoutes(props){
    return(
        <BrowserRouter>
            <Route component={Home} path = "/" exact/>
            <Route component={Login} path = "/login"/>
            <Route component={CreateUser} path = "/createUser"/>
            <Route component={CreateClient} path = "/createClient"/>
            <Route component={UpdateClient} path = "/updateClient/"/>
            <Route component={DeleteClient} path = "/deleteClient"/>
            <Route component={ViewClient} path = "/viewClient"/>
            <Route component={CreateProperty} path = "/createProperty"/>
            <Route component={UpdateProperty} path = "/updateProperty"/>
            <Route component={DeleteProperty} path = "/deleteProperty"/>
            <Route component={ViewProperty} path = "/viewProperty"/>
            <Route component={CreateContract} path = "/createContract"/>
            <Route component={UpdateContract} path = "/updateContract"/>
            <Route component={DeleteContract} path = "/deleteContract"/>
            <Route component={ViewContract} path = "/viewContract"/>             
        </BrowserRouter>

    );
}

export default AppRoutes;