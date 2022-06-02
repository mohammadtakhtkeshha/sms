import React from "react";
import { Route, Routes } from "react-router-dom";
import { tokenKey } from "../../../config.json";

function retrieveItem(key) {
    return localStorage.getItem(key);
  }

const ProtectedRoute = ({component:Component , render, ...rest}) =>{
return(
        <Route 
            {...rest}
            render = {props=>{
                if (!retrieveItem(tokenKey)) {
                    return <Routes to="/" />;
                } else {
                    return Component ? <Component {...props} /> : render(props);
                }
            }}
        />
    );
};

export default ProtectedRoute;