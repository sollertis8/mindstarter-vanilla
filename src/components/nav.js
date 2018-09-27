import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {
    Button,
    Icon,
    Collapsible,
    CollapsibleItem,
    SideNav,
    SideNavItem
} from 'react-materialize';
import './nav.css';
import RecentActivity from './recent-activity';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="left-nav">
                <SideNav>
                    <div className="nav-logo"><img className="left-nav-logo" src="./images/brain-icon-png-15.png"/>
                        <div className="left-nav-mindstarter">MINDSTARTER</div>
                    </div>
                    <div className="user"><img className="user-image" src="./images/korre-photo-cropped.png"/></div>
                    <div className="user-name">Korre Mayweather</div>
                    <div className="mind-level">Genius</div>

                    <Collapsible accordion>
                        <CollapsibleItem header='Dashboard' icon='dashboard'>
                            <SideNavItem waves href='#!home' icon="home">Home
                            </SideNavItem>
                        </CollapsibleItem>

                        <CollapsibleItem header='Mindroom' icon='class'>HTML
                            <SideNavItem waves href='#!what_html'>1 What is HTML?
                            </SideNavItem>

                            <SideNavItem waves href='#!basics'>2 The Basics
                            </SideNavItem>

                            <SideNavItem waves href='#!elemets'>3 Elements
                            </SideNavItem>

                            <SideNavItem waves href='#!attributes'>4 Attributes
                            </SideNavItem>

                            <SideNavItem waves href='#!styles'>5 Styles
                            </SideNavItem>

                            <SideNavItem waves href='#!formatting_elements'>6 Formatting Elements
                            </SideNavItem>
                            CSS
                            <SideNavItem waves href='#!what_css'>1 What is CSS?
                            </SideNavItem>

                            <SideNavItem waves href='#!syntax'>2 Syntax
                            </SideNavItem>

                            <SideNavItem waves href='#!margins_padding'>3 Margins and Padding
                            </SideNavItem>

                            <SideNavItem waves href='#!box_model'>4 The Box Model
                            </SideNavItem>

                            <SideNavItem waves href='#!links'>5 Links
                            </SideNavItem>

                            <SideNavItem waves href='#!lists'>6 Lists
                            </SideNavItem>
                        </CollapsibleItem>

                        <CollapsibleItem header='Jobs' icon='next_week'></CollapsibleItem>
                        <CollapsibleItem header='Account' icon='account_circle'></CollapsibleItem>
                    </Collapsible>

                    <SideNavItem divider/>

                    <div className="recent-activity"><RecentActivity/></div>
                </SideNav>

            </div>
        )
    }
}