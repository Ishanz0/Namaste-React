import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
    <a href="/">
    <img src="https://images-platform.99static.com/nMPDdzn3g5qcYI75Cm9U32Rt83s=/500x500/top/smart/99designs-contests-attachments/19/19919/attachment_19919182"
    alt="logo" className="w-12" />
    </a>
);

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();
    
    return (

    <div className="flex items-center justify-between p-4 h-20 bg-custom-bg-color text-white m-3">
        <Title />
        
        <div>
            <ul className="flex items-center list-none">
                <li className="inline-block p-2 cursor-pointer"><Link to="/" className="underline-none hover:text-indigo-700">Home</Link></li>
                <li className="inline-block p-2 cursor-pointer"><Link to="/about" className="underline-none hover:text-indigo-700">About</Link></li>
                <li className="inline-block p-2 cursor-pointer"><Link to="/contact" className="underline-none hover:text-indigo-700">Contact</Link></li>
                <li className="inline-block p-2 cursor-pointer"><Link to="/Instamart" className="underline-none hover:text-indigo-700">Instamart</Link></li>
                <li className="inline-block p-2 cursor-pointer">Cart</li>
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