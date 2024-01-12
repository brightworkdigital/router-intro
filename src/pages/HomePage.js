import { Link } from "react-router-dom";

function HomePage() {
  return <><h1>Home Page</h1>
    <p>
      Hyperlink using HTML "a" tag <a href="/jokes">jokes</a>
    </p>
    <p>
      Hyperlink using React Link component <Link to="/jokes">jokes</Link>
    </p>
  </>;
}

export default HomePage;
