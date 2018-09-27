import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Button, Icon} from 'react-materialize';
import './recent-activity.css';

export default class RecentActivity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="main">
                <div className="recent-title">Recent Activity</div>
                <div className="activity">
                    <div className="activity-1-image">{this.props.activity_1_image}</div>
                    <div className="activity-1"></div>{this.props.activity_1}</div>
                <div className="activity">
                    <div className="activity-2-image">{this.props.activity_2_image}</div>
                    <div className="activity-2"></div>{this.props.activity_2}</div>
                <div className="activity">
                    <div className="activity-3-image">{this.props.activity_3_image}</div>
                    <div className="activity-3"></div>{this.props.activity_3}</div>
            </div>
        )
    }
}