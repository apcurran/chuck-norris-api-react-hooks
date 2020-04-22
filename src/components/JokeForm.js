import React, { useState, useEffect } from 'react';
import JokeSection from './JokeSection';

export default function JokeForm() {
    const [joke, setJoke] = useState([]);
    const jokeCategories = ["animal","career","celebrity","dev", "fashion","food","history","money","music","political", "science","sport","travel"];

    useEffect(() => {
        fetchJoke();
    }, []);

    function randomJokeCategory(jokeCategories) {
        return jokeCategories[Math.floor(Math.random() * jokeCategories.length)];
    }

    async function fetchJoke(event) {
        if (event) {
            event.preventDefault();
        }

        const category = randomJokeCategory(jokeCategories);
        const API_URL = `https://api.chucknorris.io/jokes/random?category=${category}`;

        try {
            const response = await fetch(API_URL);
            const jokeData = await response.json();
    
            setJoke(jokeData.value);
    
            return jokeData;
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form onSubmit={ (event) => fetchJoke(event) } className="form">
            <div className="form__group">
                <input type="submit" value="Brace Yourself" className="form__group__submit"/>
                <JokeSection joke={ joke } />
            </div>
        </form>
    )
}
