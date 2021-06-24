import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PlayGame from "./PlayGame";
import Game from "../reducer/gameState";
import { RootState } from "../App";

const StartGame: React.FC = () => {
    const dispatch = useDispatch();

    const wordIsSubmitted = useSelector((state: RootState) => state.gamestate.gameStarted);
    const gameStarted = useSelector((state: RootState) => state.gamestate.gameStarted);

    const [ enteredWord, setEnteredWord ] = useState<string>("");

    useEffect(() => {
        if(!gameStarted) {
            setEnteredWord("");
            dispatch(Game.actions.addWord(""));
            dispatch(Game.actions.clearGuessedLetters([]));
        }
    }, [gameStarted, setEnteredWord, dispatch]);

    const handleSubmitWord = (enteredWord:string) => {
        enteredWord = enteredWord.toLowerCase();
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
                        onClick={() => handleSubmitWord(enteredWord)}
                    >
                        SUBMIT
                    </button>
                </>
            ) : (
                <PlayGame />
            )}
        </main>
    );
};

export default StartGame;