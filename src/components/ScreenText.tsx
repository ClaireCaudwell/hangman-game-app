import React from "react";
import styled from "styled-components/macro";

import WordGuesses from "../components/WordGuesses";

type PropsScreenText = {
    enteredWord: string,
    gameStarted: boolean,
    buttonPressed: boolean,
}

const ScreenText: React.FC<PropsScreenText> = ({
    enteredWord,
    gameStarted,
    buttonPressed
}) => {

    return (
        <>
            {!gameStarted ? (
                <>
                    <ScreenTextDiv>
                        <p>Enter a word to challenge your apponent to a game of guess the word!</p>
                        {buttonPressed && <WarningText>* Min length 3 letters & max length 10 letters</WarningText>}
                    </ ScreenTextDiv>
                    <WordInput 
                        type="text" 
                        value={enteredWord}
                        disabled={true}
                    />
                </>
            ) : (
                <WordGuesses />
            )}
        </>
    );
};

export default ScreenText;

const ScreenTextDiv = styled.div`
    height: 120px;
    margin-bottom: 10px;
`;

const WarningText = styled.p`
    font-size: 12px;
    color: #ff0000;
`;

const WordInput = styled.input`
    border: none;
    background-color: #dad8d8;
    padding: 10px;
    font-size: 16px;
    outline: none;
    width: 100%;
    height: 70px;
`;