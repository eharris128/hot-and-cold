import React from 'react';

export default function NavigationBar(props) {
    return (
        <div className="navigation-bar">
            <nav className="navigation-bar-nav">
                <ul>
                    <li> 
                        <a href="https://www.google.com/" target="_BLANK" rel="noopener noreferrer">What ?</a>
                    </li>
                    <li> 
                        <a href="https://www.google.com/" target="_BLANK" rel="noopener noreferrer">+ New Game</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}