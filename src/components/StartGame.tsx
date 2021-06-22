import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GameBoard from "./GameBoard";
import Game from "../reducer/gameState";
import { RootState } from "../App";

const StartGame: React.FC = () => {
    const dispatch = useDispatch();
    const wordIsSubmitted = useSelector((state: RootState) => state.gamestate.gameStarted);

    const [ enteredWord, setEnteredWord ] = useState<any>([]);

    const handleSubmitWord = (enteredWord:string) => {
        dispatch(Game.actions.addWord(enteredWord));
        dispatch(Game.actions.updateGameStarted(true));
    };

    return (
        <main>
            {!wordIsSubmitted ? (
                <>
                    <h4>Enter a word and press enter to start the game</h4>
                    <input 
                        type="text" 
                        value={enteredWord} 
                        onChange={event => setEnteredWord(event.target.value)} 
                    />
                    <button 
                        type="submit" 
                        onClick={() => handleSubmitWord(enteredWord)}>
                            SUBMIT
                    </button>
                </>
            ) : (
                <GameBoard />
            )}
        </main>
    );
};

export default StartGame;