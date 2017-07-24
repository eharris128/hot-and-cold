import React from 'react';
import Header from './header';
import Feedback from './feedback';
import UserGuess from './user-guess';
import GuessesMade from './guesses-made';
import './game.css';

export default function Game(props) {
    return (
        <div className="game">
            <Header />
            <section className="game-area">
                <Feedback />
                <UserGuess />
                <GuessesMade />
            </section>
        </div>
    )
}
