export function getJokes() {
    return [
        {jokeId: 1, name: "Zoo with one animal", joke: "I once went to a zoo that only had one animal.  It was a Shih Tzu."},
        {jokeId: 2, name: "Siri, why am I so bad with women", joke: "I asked my phone, \"Siri, why am I so bad with women?\"  She said, \"I'm Alexa you moron."}
    ]
}

export function getJoke(jokeId) {
    return getJokes().filter((joke) => {return joke.jokeId === jokeId});
}
