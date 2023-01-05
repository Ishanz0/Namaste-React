import React from "react"; 
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", {id: "title", key: "1"}, "Namaste EveryOne from React!");
        const heading2 = React.createElement("h1", {id: "title", key: "2"}, "Namaste EveryOne from React twice!");

        const container = React.createElement("div", {id: "container"}, [heading1, heading2]);

        const root1 = ReactDOM.createRoot(document.getElementById("root"));
        console.log(heading1);  
        // passing react element inside div root
        root1.render(container);