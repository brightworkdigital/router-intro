import { Link } from "react-router-dom";
import { getJokes } from "../data/JokeData.js";
import { useContext } from "react";
import AuthContext from "../store/auth-context.js";

function JokesPage() {
  const jokes = getJokes();

  return <>
    <h1>Jokes Page</h1>
    <ul>
      <li>A joke</li>
    </ul>
  </>;
}

export default JokesPage;
