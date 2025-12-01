import { createContext, useState } from "react";
import useRequest from "../hooks/useRequest.js";

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
    logoutHandle() {},

})

export function UserProvider({
    children,
}) {
    const [user, setUser] = useState(null)
    const { request } = useRequest()

    const registerHandler = async(email, password) => {
        const newUser = { email, password };

        const result = await request('/users/register', 'POST', newUser);

        setUser(result)
    }

    const loginHandler = async(email, password) => {
        const result = await request('/users/login', 'POST', { email, password });

        setUser(result)
    }

    const logoutHandle = () => {
        return request('/users/logout')
        .finally(() => {
            setUser(null)
        })
    }

    const userContextValues = {
        user,
        isAuthenticated: !!user?.accessToken,
        registerHandler,
        loginHandler,
        logoutHandle
    }

    return (
        <UserContext.Provider value={userContextValues}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext