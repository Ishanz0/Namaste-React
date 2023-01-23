import { useState } from "react";

// const loggedInUser = () => {
//     // API call for authentication
//     return true;
// }

const Title = () => (
    <a href="/">
    <img src="https://images-platform.99static.com/nMPDdzn3g5qcYI75Cm9U32Rt83s=/500x500/top/smart/99designs-contests-attachments/19/19919/attachment_19919182"
    alt="logo" className="logo" />
    </a>
);

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    return (

    <div className="header">
        <Title />
        
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
    </div>
    );
};

export default Header;