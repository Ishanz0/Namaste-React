import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () => {
  const { user } = useContext(userContext);

  return (
    <footer className="p-4 m-3 h-14 bg-custom-bg-color text-white">
      <div className="container mx-auto">
        <h4 className="text-center font-medium tracking-wide">
          {user.name} - {user.email}
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
