import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../store/auth-context";

const NavBar = () => {
    const userState = useContext(AuthContext);

    return <>
        <h1>Navigation Bar</h1>
        <p>
            <Link to="/">Home</Link> | <Link to="/jokes">Jokes</Link>
        </p>
        <div>
            User: {userState[0]}
        </div>
        <button onClick={(event) => { userState[1]("Mac") }}>Set User</button>
        <Outlet />
    </>
}

export default NavBar;