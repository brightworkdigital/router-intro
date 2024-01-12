import { Link } from "react-router-dom";
import { getJokes } from "../data/JokeData.js";
import { useContext } from "react";
import AuthContext from "../store/auth-context.js";

function JokesPage() {
  const jokes = getJokes();
  const user = useContext(AuthContext);

  return <>
    <h1>Jokes Page</h1>
    <ul>
      {jokes.map((joke) => {
       return <li id={joke.jokeId}> <Link joke={joke} to={`/jokes/${joke.jokeId}`}>{joke.name}</Link> </li>
      })}
    </ul>
      <div>
        user: {user}
      </div>
  </>;
}

export default JokesPage;
