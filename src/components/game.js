import React from 'react';
import Header from './header';
import Feedback from './feedback';
import UserGuess from './user-guess';
import GuessesMade from './guesses-made';

export default function Game(props) {
    return (
        <div className="game">
            <Header />
            <Feedback />
            <UserGuess />
            <GuessesMade />
        </div>
    )
}
