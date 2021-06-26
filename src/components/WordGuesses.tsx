import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

import { RootState } from "../App";
import GameCounterOutcome from "./GameCounterOutcome";
import GameEnd from "./GameEnd";

const WordGuesses: React.FC = () => {
    // useSelector
    const enteredWordArray = useSelector((state: RootState) => state.gamestate.enteredWordArray);
    const guessedLettersArray = useSelector((state: RootState) => state.gamestate.guessedLettersArray);
    const guessCounter = useSelector((state:RootState) => state.gamestate.guessCounter);
        
    let spaceLetterArray:string[] = [];
    for(let i = 0; i < enteredWordArray.length; i++){
        if(guessedLettersArray.includes(enteredWordArray[i])){
            spaceLetterArray.push(enteredWordArray[i]);
        } else {
            spaceLetterArray.push("");
        }
    }

    const spaceLetterArrayIncludes = spaceLetterArray.includes("");
        
    return (
        <GuessesContainer>
            {guessCounter >=0 && guessCounter <10 && spaceLetterArrayIncludes && (
                <GameCounterOutcome
                    guessCounter={guessCounter}
                    enteredWordArray={enteredWordArray}
                    guessedLettersArray={guessedLettersArray}
                />
            )}
            {(guessCounter >= 10 || !spaceLetterArrayIncludes) && (
                <GameEnd 
                    guessCounter={guessCounter}
                    spaceLetterArrayIncludes={spaceLetterArrayIncludes}
                />
            )}
            <WordContainer> 
                {spaceLetterArray.map((space, index) => (
                    <LetterDiv key={index}>{space}</LetterDiv>
                ))}
            </WordContainer>                           
        </GuessesContainer>
    );
};

export default WordGuesses;

const GuessesContainer = styled.div`
    border: 1px solid black;
    box-shadow: 3px 3px 2px #888888;
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const WordContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
`;

const LetterDiv = styled.div`
    padding: 7px;
    border-bottom: 2px solid #404040;
    width: 30px;
    height: 35px;
    text-align: center;
    font-size: 18px;
`;