import React, { useState, useEffect } from "react";

type Props = {
    enteredWord: string
};

const GameBoard: React.FC<Props> = ({ enteredWord }) => {   

    let [ enteredWordArray, setEnteredWordArray ] = useState<String[]>([]);

    useEffect(() => {
        setEnteredWordArray(enteredWord.split(""))
    }, [setEnteredWordArray, enteredWord]);

    const alphabetArray:string[] = [];
    let alphabetNumber:number = 96;

    for(let i = 0; i < 26; i++) {
        alphabetNumber +=1;
        const letter:string = String.fromCharCode(alphabetNumber);
        alphabetArray.push(letter);
    };

    const handleLetterGuessed = () => {

    };

    return (
        <div>
            {enteredWordArray.map((letterspace, index) => (
                <div key={index}>{letterspace}</div>
            ))}

            {alphabetArray.map((letter, index) => (
                <button 
                    type="button" 
                    key={index}
                    onClick={handleLetterGuessed}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
};

export default GameBoard;

// Take the enteredWord and push each letter from the word into an array as an individual element
// Create an alfaphbet, where each button is a letter. This submits the letter choice and checks if it's a match
// Then check if the letter exists in the array (once or more than once) and show the letter if correct
// If the letter doesn't exist show the letter on the top right so the user knows it's already been entered
// Show a counter for each go the user takes (max 10 goes)
// If the user doesn't guess correctly then that letter is shown on the top right corner and a text is shown to say that the guess was incorrect and how many goes they have left. 
// If the user answers correctly then they get a confetti shower, if not then they get a rainfall of sad emoji faces.