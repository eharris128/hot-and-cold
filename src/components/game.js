import React from 'react';
import NavigationBar from './navigation-bar';

export default function Game(props) {
// const navBar = <NavigationBar />
    return (
        <div className="game">
            <h1>HOT or COLD</h1>
            <NavigationBar />
        </div>
    )
}