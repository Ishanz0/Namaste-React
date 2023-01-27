import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunction from "./Profile";
import React from "react";

class About extends React.Component {

    constructor(props) {
        super(props);
        console.log("Parent - constructing");
    }

    componentDidMount() {
        console.log("Parent - componentDidMount");
    }

    render() {
        console.log("Parent - rendering");
        return (
            <div>
                <h1> About Page </h1>
                <p> Finding the path 😍! </p>
                {/* <Outlet /> */}
                <ProfileFunction name={"Ishan"}/>   
                {/* <Profile name={"Child 1"}/> */}
            </div>
        )
    }
}

export default About;