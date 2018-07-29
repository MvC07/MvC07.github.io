import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import AboutMe from './aboutme';
import Contact from './contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
    </Switch>
)

export default Main;