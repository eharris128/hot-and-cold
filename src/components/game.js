import React from 'react';
import NavigationBar from './navigation-bar';
import Feedback from './feedback';
import UserGuess from './user-guess'

export default function Game(props) {
    return (
        <div className="game">
            <h1>HOT or COLD</h1>
            <NavigationBar />
            <Feedback />
            <UserGuess />
        </div>
    )
}