import React from "react";
import { useDispatch } from "react-redux";

import Game from "../reducer/gameState";

type Props = {
    guessCounter: number,
    guessedLetters: string[],
};

const AlphabetButtons: React.FC<Props>= ({ guessCounter, guessedLetters }) => {
    const dispatch = useDispatch();

    const alphabetArray:string[] = [];
    let alphabetNumber:number = 96; 

    for(let i = 0; i < 26; i++) {
        alphabetNumber +=1;
        const letter:string = String.fromCharCode(alphabetNumber);
        alphabetArray.push(letter);
    };

    const handleLetterGuessed = (letter:string) => {
        dispatch(Game.actions.addGuessedLetter(letter));
    };

    return (
        <>
            {alphabetArray.map((letter, index) => (
                <button 
                    type="button" 
                    key={index}
                    onClick={() => handleLetterGuessed(letter)}
                    disabled={
                        guessCounter === 10 || guessedLetters.includes(letter) ? true : false                    
                    }
                >
                    {letter}
                </button>
            ))}
        </>
    );
};

export default AlphabetButtons;