import React from "react";
import { useDispatch } from "react-redux";

import Game from "../reducer/gameState";

type Props = {
    enteredWordArray: string[],
    guessCounter: Number,
};

const AlphabetButtons: React.FC<Props>= ({ enteredWordArray, guessCounter }) => {
    const dispatch = useDispatch();

    const alphabetArray:string[] = [];
    let alphabetNumber:number = 96;

    for(let i = 0; i < 26; i++) {
        alphabetNumber +=1;
        const letter:string = String.fromCharCode(alphabetNumber);
        alphabetArray.push(letter);
    };

    const handleLetterGuessed = (letter:string) => {
        dispatch(Game.actions.addGuessesCount());
        dispatch(Game.actions.addGuessedLetter(letter));

        if(enteredWordArray.includes(letter)) {
            dispatch(Game.actions.updateLetterIsAMatch(true));
            dispatch(Game.actions.addOutcomeString("It's a match!"));   
        } else {
            dispatch(Game.actions.updateLetterIsAMatch(false));
            dispatch(Game.actions.addOutcomeString("It's not a match!"));
        }
    };

    return (
        <>
            {alphabetArray.map((letter, index) => (
                <button 
                    type="button" 
                    key={index}
                    onClick={() => handleLetterGuessed(letter)}
                    disabled={guessCounter === 10 ? true : false}
                >
                    {letter}
                </button>
            ))}
        </>
    );
};

export default AlphabetButtons;