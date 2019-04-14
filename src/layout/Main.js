import React from "react";
import { Route } from 'react-router-dom';
import { Home, About } from '../pages';
  
const Main = () => {
    return (
        <main id="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
        </main>
    );
};

export default Main;
