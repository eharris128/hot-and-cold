import React from 'react';
import GuessNumber from './guess-number'
import './user-guess.css';

export default function UserGuess(props) {
    return (
        <div className="user-guess">
            <form action="#">
                <fieldset>
                    <input aria-label="Enter your number guess" type="text" name="userGuess" id="userGuess" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required></input> 
                </fieldset>
                <button className="button" type="submit">Guess</button>
            </form>
            <GuessNumber />
        </div>
    )
}