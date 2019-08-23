import React from 'react';
import Search from './Search';
import LanguageContext from './contexts/LanguageContext';
const NavBar = () => {
    console.log(window.history)
    return ( 
        <div className="ui secondary menu">
        <a className="item">
            Home
        </a>
        <a className="item">
            About Us 
        </a>
        <a className="item">
            Contact Us
        </a>
        <div className="right menu">
            <div className="item">
            <div className="ui icon input">
                <input type="text" placeholder="Search..."/>
                <i className="search link icon"></i>
            </div>
            </div>
            <a className="ui item">
                {NavBar.contexType._currentValue==='english'?'english':'hebrews'}
            </a>
        </div>
        </div>
    );
}

NavBar.contexType = LanguageContext;
console.log(NavBar.contexType.
    _currentValue)
export default NavBar;