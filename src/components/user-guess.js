import React from 'react';
import GuessNumber from './guess-number'

export default function UserGuess(props) {
    return (
        <div className="user-guess">
            <form action="#">
                <fieldset>
                    <input aria-label="Enter your number guess" type="text" name="userGuess" id="uesrGuess" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required></input> 
                </fieldset>
                <button class="button" type="submit">Guess</button>
            </form>
            <GuessNumber />
        </div>
    )
}