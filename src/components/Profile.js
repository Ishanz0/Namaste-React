import { useEffect, useState } from "react";

const Profile = (props) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        // API Calls
        const timer = setInterval(() => {
            console.log("Namaste React functional OP");
        }, 1000)

        return()=>{
            clearInterval(timer);
        }
    }, [])

    return (
        <div>
            <h2> Profile Functional Component </h2>
            <h3> {props.name} </h3>
            <h3> {count} </h3>
            <h3> {count2} </h3>
            <button onClick={
                () => {
                    setCount(count+1);
                    setCount2(count2+2);
                }
            }> Count </button>
        </div>
    )
}

export default Profile;