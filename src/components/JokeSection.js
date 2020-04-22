import React from 'react';

export default function JokeSection(props) {
    const { joke } = props;

    return (
        <p className="joke">{ joke }</p>
    );
}
