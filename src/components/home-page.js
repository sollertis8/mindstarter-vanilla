import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Button, Icon} from 'react-materialize';
import './home-page.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="main">

                <nav className="top-nav">
                    <ul>
                        <li className="left">
                            <a href="/">
                                <div className="logo-home">Mindstarter</div>
                            </a>
                        </li>
                        <li className="right">
                            <a href="/login" className="login">Sign In</a>
                        </li>
                    </ul>
                </nav>

                <div className="top">
                    <h1>
                        <div className="tagline">Mindstarter,&nbsp;
                            <span className="jumpstart">
                                jumpstart&nbsp;
                            </span>
                            your mind.</div>
                    </h1>
                    <div className="centerpiece">
                        <div className="brain">
                            <img
                                src="/images/colorful-brain-map-vector-clipart.png"
                                width="25%"
                                height="25%"/>
                        </div>
                        <div className="dot">
                            <a href="/signup" className="get-started">Get Started</a>
                        </div>
                    </div>
                </div>

                <div className="cards col-12">
                    <div className="atom col-4">
                        <img
                            src="/images/Atom-1472657.png"
                            alt="atom with electrons in elliptical orbit"
                            width="27%"
                            height="27%"/>
                        <span className="card-text brainstorming">Learn to code like a pro
                        </span>
                    </div>
                    <div className="gears col-4">
                        <img
                            src="/images/mechanics-2170648_640.png"
                            alt="clolorful gears"
                            width="55%"
                            height="55%"/>
                        <span className="card-text life">Front End or Full Stack Development
                        </span>
                    </div>
                    <div className="ball-collage col-4">
                        <img
                            src="/images/Colorful-Circle-Fractal.png"
                            alt="colorful circle fractal"
                            width="30%"
                            height="30%"/>
                        <span className="card-text possibilities">Become a Software Engineer
                        </span>
                    </div>
                </div>

            </div>
        )
    }
}