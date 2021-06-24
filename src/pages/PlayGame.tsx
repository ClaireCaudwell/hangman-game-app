import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { RootState } from "../App";
import AlphabetButtons from "../components/AlphabetButtons";
import RestartButton from "../components/RestartButton";
import GameCounterOutcome from "../components/GameCounterOutcome";
import GameEnd from "./GameEnd";

const PlayGame: React.FC = () => {

    let [ enteredWordArray, setEnteredWordArray ] = useState<string[]>([]);

    const enteredWord = useSelector((state: RootState) => state.gamestate.enteredWord);
    const guessedLetters = useSelector((state: RootState) => state.gamestate.guessedLetters);

    useEffect(() => {
        setEnteredWordArray(enteredWord.split(""));
    }, [setEnteredWordArray, enteredWord]);
    
    const guessCounter = guessedLetters.length;
    
    let spaceLetterArray = [];
    for(let i = 0; i < enteredWordArray.length; i++){
        if(guessedLetters.includes(enteredWordArray[i])){
            spaceLetterArray.push(enteredWordArray[i]);
        } else {
            spaceLetterArray.push("");
        }
    }

    const spaceLetterArrayIncludes = spaceLetterArray.includes("");
        
    return (
        <>
            {
                (guessCounter === 10 || !spaceLetterArrayIncludes) ? (
                    <>
                        <GameEnd 
                            guessCounter={guessCounter}
                            spaceLetterArrayIncludes={spaceLetterArrayIncludes}
                        />
                        <RestartButton />
                    </>
                ) : (
                    <>
                        <GameCounterOutcome
                            guessCounter={guessCounter}
                            enteredWordArray={enteredWordArray}
                            guessedLetters={guessedLetters}
                        />
                        <WordContainer>
                            {spaceLetterArray.map((space, index) => (
                                <LetterDiv key={index}>{space}</LetterDiv>
                            ))}
                        </WordContainer>
                        <AlphabetButtons
                            guessCounter={guessCounter}
                            guessedLetters={guessedLetters}
                        />
                    </>
                )
            }
        </>
    );
};

export default PlayGame;

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