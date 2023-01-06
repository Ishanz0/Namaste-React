import React from "react"; 
import ReactDOM from "react-dom/client";

//React
const heading1 = React.createElement(
        "h1", 
        {id: "title", key: "1"}, 
        "Namaste EveryOne from React!");

const heading2 = <h1 id="title" key="2">Namaste EveryOne from JSX!</h1>; // JSX

const container = React.createElement(
        "div", 
        {id: "container"}, 
        [heading1, heading2]);        

const heading3 = () => {
        return (
        <div>
                {/* for using element inside func. component */}
                {heading2}
                {/* use {<heading2 />} or {heading2()} for using func. component inside another */}
                <h2 id="title" key="3">Namaste EveryOne from functional component!</h2>
                <h2> This is h2 tag! </h2>
        </div>
        );
};


const root1 = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside div root
// root1.render(container);
root1.render(heading3());  
// you can also use <heading3 /> inside render     