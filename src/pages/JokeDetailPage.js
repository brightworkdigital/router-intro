import { useParams } from "react-router-dom";

const JokeDetailPage = (props) => {
    const params = useParams();

    return <>
        <h1>Joke Details</h1>
        <p>
            Details on joke with jokeId: {params.jokeId}
        </p>
    </>
}

export default JokeDetailPage;