import React from 'react';
import JokeForm from "./JokeForm";
import ChuckImg from '../images/chuck-norris.jpg';

export default function ChuckCard() {
    return (
        <section className="section">
            <img src={ ChuckImg } alt="Chuck Norris smiling" className="section__chuck-img"/>
            <h1 className="section__title">Chuck Norris</h1>
            <JokeForm />
        </section>
    )
}
