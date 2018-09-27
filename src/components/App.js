import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './home-page';
import Nav from './nav';

export default function App(props) {
    return (
        <Router>
            <div className="app">
                <main>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/nav" component={Nav}/>
                </main>
            </div>
        </Router>
    );
}