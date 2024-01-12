import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../store/auth-context";

const NavBar = () => {
    const userState = useContext(AuthContext);
    const {user, setUser} = userState;
    console.log("userState", userState);
    console.log("type of userState", typeof userState);

    return <>
        <h1>Navigation Bar</h1>
        <p>
            <Link to="/">Home</Link> | <Link to="/jokes">Jokes</Link>
        </p>
        <div>
            User: {user}
        </div>
        <button onClick={(event) => { setUser("Mac") }}>Set User</button>
        <Outlet />
    </>
}

export default NavBar;