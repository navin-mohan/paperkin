import React, { Component } from 'react';

import './header.css';
import logo from '../img/logo.png';

export default class Header extends Component{
    render(){
        return(
            <div className="header-container">
                <div className="header-logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="header-logo-text">
                    <h1>PaperKin</h1>
                </div>
            </div>
        );
    }
}