import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav'
import Form from './empresa/Form';
import Edit from './empresa/Edit';
import List from './empresa/List';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

function Main() {
    return(
        <Router>
            <main>
                <Nav />
                <Switch>
                    <Route path="/empresa/index" exact component={List} />
                    <Route path="/empresa/form" component={Form} />
                    <Route path="/empresa/edit/:id" component={Edit} />
                </Switch>
            </main>
        </Router>
    )
}

export default Main
ReactDOM.render(<Main />, document.getElementById('main-empresa'));