import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunction from "./Profile";
import React from "react";
import userContext from "../utils/userContext";

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
      <div className="p-2.5 m-2.5">
        <h1 className="font-bold text-2xl "> About Page </h1>
        <p> Finding the path 😍! </p>
        <userContext.Consumer>
          {({ user }) => <h4>{user.name}</h4>}
        </userContext.Consumer>
        {/* <Outlet /> */}
        {/* <ProfileFunction name={"Ishan"}/>    */}
        <Profile name={"Child 1"} />
      </div>
    );
  }
}

export default About;
