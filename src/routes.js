"use strict";

import React from "react";
import { Route, IndexRedirect } from "react-router";
import App from "./components/App";
import Home from "./components/Home/HomeContainer";
import About from "./components/About/AboutContainer";
import Bids from "./components/Bids/BidsContainer";
import Contact from "./components/Contact/ContactContainer";
import Projects from "./components/Projects/ProjectsContainer";
import Services from "./components/Services/ServicesContainer";

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
