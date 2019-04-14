import React from "react";
import { Link } from 'react-router-dom'
  
const Gnb = () => {
    return (
        <nav>
            <ul className="list-menu">
                <li><Link to="/" className="link-menu">Home</Link></li>
                <li><Link to="/about" className="link-menu">About</Link></li>
            </ul>
        </nav>
    );
};

export default Gnb;
