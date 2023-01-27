import React from "react";

class Profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummmy name",
                location: "Dummy location"
            },
        };

        console.log("Constructor " + this.props.name);
    }

    async componentDidMount() {
        // API Calls
        console.log("ComponentDIdMount " + this.props.name);
        const data = await fetch("https://api.github.com/users/ishanz0")
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate() {
        console.log("ComponentDIdUpdate " + this.props.name);
    }

    componentWillUnmount() {
        console.log("ComponentWillUnmount " + this.props.name);
    }

    render() {
        console.log("Rendering " + this.props.name);
        return (
            <div>
                <img src={this.state.userInfo.avatar_url} />
                <h3> {this.state.userInfo.name} </h3>
                <h3> {this.state.userInfo.location} </h3>
            </div>
        )
    }
}

export default Profile;