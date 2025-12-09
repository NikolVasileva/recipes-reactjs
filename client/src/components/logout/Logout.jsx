import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function Logout() {
    const { logoutHandler } = useContext(UserContext);
    const navigate = useNavigate();

    logoutHandler()
    .then(() => navigate("/"))
    .catch(() => {
        toast.error("You cannot logout")
        navigate("/")
    })

    return(null)
}