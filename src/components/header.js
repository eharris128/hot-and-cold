import React from 'react';
import NavigationBar from './navigation-bar';
import './header.css';

export default function Header(props) {
    return (
        <header className="header">
            <NavigationBar />
            <h1> HOT or COLD </h1>
        </header>
    )
}