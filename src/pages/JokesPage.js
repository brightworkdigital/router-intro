import { Link } from "react-router-dom";
import { getJokes } from "../data/JokeData.js";
import { useContext } from "react";
import AuthContext from "../store/auth-context.js";

function JokesPage() {
  const jokes = getJokes();

  return <>
    <h1>Jokes Page</h1>
    <ul>
      {jokes.map((joke) => {
        return <li key={joke.jokeId}><Link to={`/jokes/${joke.jokeId}`}>{joke.name}</Link> </li>
      })}
    </ul>
  </>;
}

export default JokesPage;
