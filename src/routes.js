"use strict";

import React from "react";
import { Route, IndexRedirect } from "react-router";
import App from "./containers/App";
import Home from "./containers/Home/HomeContainer";
import About from "./containers/About/AboutContainer";
import Bids from "./containers/Bids/BidsContainer";
import Contact from "./containers/Contact/ContactContainer";
import Projects from "./containers/Projects/ProjectsContainer";
import Services from "./containers/Services/ServicesContainer";

export const generateRoutes = (store) => {

    return (
        <Route path="/" component={App}>
            <IndexRedirect to="/home"/>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/bids" component={Bids} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/services" component={Services} />
        </Route>
    );

};
