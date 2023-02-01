import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () => {

    const {user} = useContext(userContext);

    return (
        <footer class="p-4 m-3 h-14 bg-custom-bg-color text-white">
            <div class="container mx-auto">
                <h4 class="text-center font-medium tracking-wide">{user.name} - {user.email}</h4>
            </div>
        </footer>
    );
};

export default Footer;