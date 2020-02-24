import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/table-view">Table View</Link></li>
                            <li><Link to="/Chart-view">Chart view</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Header;

