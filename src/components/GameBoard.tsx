import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import AlphabetButtons from "./AlphabetButtons";
import { RootState } from "../App";
import { OutcomeString, GuessesSoFar, GameResult } from "./GameStrings";
import RestartButton from "./RestartButton";

const GameBoard: React.FC = () => {

    let [ enteredWordArray, setEnteredWordArray ] = useState<string[]>([]);

    const enteredWord = useSelector((state: RootState) => state.gamestate.enteredWord);
    const guessedLetters = useSelector((state: RootState) => state.gamestate.guessedLetter);

    useEffect(() => {
        setEnteredWordArray(enteredWord.split(""));
    }, [setEnteredWordArray, enteredWord]);
    
    const guessCounter = guessedLetters.length;
    
    let spaceLetterArray = [];
    // Check each element in the eneteredWordArray against the string elements in the guessLetters array from redux based on the length of the word.
    // If it's a match then the element is pushed into the spaceLetterArray i n index order
    for(let i = 0; i < enteredWordArray.length; i++){
        if(guessedLetters.includes(enteredWordArray[i])){
            spaceLetterArray.push(enteredWordArray[i]);
        } else {
            spaceLetterArray.push("");
        }
    }

    const itsAMatch = enteredWordArray.includes(guessedLetters[guessedLetters.length -1]);
        
    return (
        <>
            <WordContainer>
                <GameResult 
                    spaceLetterArray={spaceLetterArray}
                    guessCounter={guessCounter}
                />
                <GuessesSoFar 
                    guessCounter={guessCounter}                   
                />
                <OutcomeString 
                    itsAMatch={itsAMatch} 
                />
                {spaceLetterArray.map((space, index) => (
                    <LetterDiv key={index}>{space}</LetterDiv>
                ))}
            </WordContainer>
            <AlphabetButtons
                guessCounter={guessCounter}
                guessedLetters={guessedLetters}
            />
            {
                guessCounter === 10 && !spaceLetterArray.includes("") && (
                    <RestartButton />
                )
            }
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