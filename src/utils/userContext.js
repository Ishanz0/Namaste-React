import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Ishan",
    email: "ish90k@gmail.com",
  },
});

userContext.displayName = "userContext";

export default userContext;
