import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
        return (
          <div className="header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQAhlwI7XKwKvfcBdrvMEw9r7MkHLjwcn8JQ&usqp=CAU" alt="logo" className="logo" />
            <input type="text" placeholder="Search..." className="search-bar" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUslyf2F_AtIVKWXioEpPn6ndKjGx3wWsNZg&usqp=CAU" alt="user-icon" className="user-icon" />
          </div>
        );
      }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
