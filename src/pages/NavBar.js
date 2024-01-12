import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../store/auth-context";

const NavBar = () => {
    const user = useContext(AuthContext);
    return <>
        <h1>Navigation Bar</h1>
        <p>
            <Link to="/">Home</Link> | <Link to="/jokes">Jokes</Link>
        </p>
        <p>
            User: {user}
        </p>
        <Outlet /> 
    </>
}

export default NavBar;