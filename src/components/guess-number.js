import React from 'react';
import './guess-number.css';

export default function GuessNumber(props) {
    return (
        <div className="guess-number">
            <p>Guess #<span id="count">0</span>!</p>
        </div>
    )
}