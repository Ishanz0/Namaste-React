import React from "react"; 
import ReactDOM from "react-dom/client";

const Title = () => (
        <h1 id="title" key="1">Namaste React!</h1>
);

// Composing Components
const HeaderComponent = () => {
        return (
        <div>
                <Title />
                <h2>Namaste EveryOne from functional component!</h2>
                <h2> This is h2 tag! </h2>
        </div>
        );
};

const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(<HeaderComponent />);     