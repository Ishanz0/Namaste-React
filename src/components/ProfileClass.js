import React from "react";

class Profile extends React.Component {

    constructor(props) {
        // always call super(props) here
        super(props);

        // create state variables over here
        this.state = {
            count: 0,
            count2: 0,
        }

        console.log("Constructor " + this.props.name);
    }

    componentDidMount() {
        // API Calls
        console.log("ComponentDIdMount " + this.props.name);
    }

    render() {
        console.log("Rendering " + this.props.name);
        return (
            <div>
                <h2> Profile Class Based Component </h2>
                <h3> {this.props.name} </h3>
                <h3> {this.state.count} </h3>
                <h3> {this.state.count2} </h3>
                <button onClick={
                    // we do not mutate state directly
                    // never do this.state = something
                    () => this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 2
                    })
                }> setCount </button>
            </div>
        )
    }
}

export default Profile;