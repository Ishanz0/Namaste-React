const Title = () => (
    <a href="/">
    <img src="https://images-platform.99static.com/nMPDdzn3g5qcYI75Cm9U32Rt83s=/500x500/top/smart/99designs-contests-attachments/19/19919/attachment_19919182"
    alt="logo" className="logo" />
    </a>
);

const Header = () => {
    
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
    </div>
    );
};

export default Header;