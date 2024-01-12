import { useParams } from "react-router-dom";
import { getJokes } from "../data/JokeData";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

const JokeDetailPage = (props) => {
    const params = useParams();
    const {user, setUser} = useContext(AuthContext);

    const jokes = getJokes();
    const joke = jokes.filter((j) => {
        return j.jokeId == params.jokeId;
    });

    return <>
        <h1>Joke Details</h1>
        <p>
            Details of joke {params.jokeId}
        </p>
        <p>
        Name: {joke[0].name}
        </p>
        <p>
        {joke[0].joke}
        </p>
        <div>User: {user}</div>
    </>
}

export default JokeDetailPage;