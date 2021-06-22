import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import AlphabetButtons from "./AlphabetButtons";
import { RootState } from "../App";

const GameBoard: React.FC= () => {
    const enteredWord = useSelector((state: RootState) => state.gamestate.enteredWord);
    const guessCounter = useSelector((state: RootState) => state.gamestate.guessesCount);
    const outcomeString = useSelector((state: RootState) => state.gamestate.confirmOutcomeString);
    const letterIsAMatch = useSelector((state: RootState) => state.gamestate.letterIsAMatch);
    const guessedLetter = useSelector((state: RootState) => state.gamestate.guessedLetter);

    let [ enteredWordArray, setEnteredWordArray ] = useState<string[]>([]);

    useEffect(() => {
        setEnteredWordArray(enteredWord.split(""))
    }, [setEnteredWordArray, enteredWord]);

    console.log(typeof enteredWordArray);
    
    // Creates spaces to be will be replaced by the letter when the user guesses the correct letter
    let spaceArray = [];
    for(let i = 0; i < enteredWord.length; i++){
        spaceArray.push("");
    };

    return (
        <>
            <WordContainer>
                <p>{outcomeString}</p>
                <p>You have guessed: {guessCounter}/10 times</p>
                <p>{guessedLetter}</p>  
                {spaceArray.map((space, index) => (
                    <LetterDiv key={index}>{space}</LetterDiv>
                ))}
            </WordContainer>
            <AlphabetButtons
                enteredWordArray={enteredWordArray}
                guessCounter={guessCounter}
            />
        </>
    );
};

export default GameBoard;

const WordContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin: 20px 0;
`;

const LetterDiv = styled.div`
    padding: 10px;
    border-bottom: 2px solid #000;
    width: 15px;
`;
// Take the enteredWord and push each letter from the word into an array as an individual element
// Create an alfaphbet, where each button is a letter. This submits the letter choice and checks if it's a match
// Then check if the letter exists in the array (once or more than once) and show the letter if correct
// If the letter doesn't exist show the letter on the top right so the user knows it's already been entered
// Show a counter for each go the user takes (max 10 goes)
// If the user doesn't guess correctly then that letter is shown on the top right corner and a text is shown to say that the guess was incorrect and how many goes they have left. 
// If the user answers correctly then they get a confetti shower, if not then they get a rainfall of sad emoji faces.