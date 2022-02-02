import axios, { AxiosResponse } from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../pages/Context";

const Navbar = () => {
    const ctx = useContext(myContext)

    const logOut = () => {
        axios.get("http://localhost:8000/logout", { withCredentials: true }).then((res: AxiosResponse) => {
            if (res.data === 'Success') {
                window.location.href = "/"
            }
        })
    }

    return (
        <div className="NavContainer">
            <Link to="/">Home</Link>
            {ctx ? (
                <>
                    {ctx.isAdmin && (<Link to="/admin">Admin</Link>)}
                    <Link to="/profile">Profile</Link>
                    <Link to="/" onClick={logOut}>Logout</Link>
                </>
            ) : (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            )}


        </div>
    )
};

export default Navbar;
