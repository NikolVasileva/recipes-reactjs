import { createContext } from "react";

const UserContext = createContext({
    isAuthenticated: false,
    users: {
        email: "",
        password: "",
        _createdOn: 0,
        _id: "",
        accessToken: ""
    },
    registerHandler() {},
    loginHandler() {},
    
})

export default UserContext