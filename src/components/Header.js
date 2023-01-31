import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
    <a href="/">
    <img src="https://images-platform.99static.com/nMPDdzn3g5qcYI75Cm9U32Rt83s=/500x500/top/smart/99designs-contests-attachments/19/19919/attachment_19919182"
    alt="logo" className="logo" />
    </a>
);

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    
    return (

    <div className="header">
        <Title />
        
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/Instamart">Instamart</Link></li>
                <li>Cart</li>
            </ul>
        </div>
        <h1>{isOnline? '🟢':'🔴' }</h1>
        {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
    </div>
    );
};

export default Header;