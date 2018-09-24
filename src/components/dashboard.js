import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Button, Icon} from 'react-materialize';
import './dashboard.css';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="main"></div>
        )
    }
}