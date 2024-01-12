import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return <><h1>Home Page</h1>
    <p>
      Hyperlink using HTML "a" tag <a href="/jokes">jokes</a>
    </p>
    <p>
      Hyperlink using Link component <Link to="/jokes">jokes</Link>
    </p>
    Hyperlink using useNavigate <button onClick={ () => {navigate("/jokes")}}>jokes</button>
  </>;
}

export default HomePage;
