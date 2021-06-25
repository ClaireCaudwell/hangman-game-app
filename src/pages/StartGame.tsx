import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import PlayGame from "./PlayGame";
import Game from "../reducer/gameState";
import { RootState } from "../App";

import { TextP } from "../components/GameHeader";

const StartGame: React.FC = () => {
    const dispatch = useDispatch();

    const wordIsSubmitted = useSelector((state: RootState) => state.gamestate.gameStarted);
    const gameStarted = useSelector((state: RootState) => state.gamestate.gameStarted);

    const [ enteredWord, setEnteredWord ] = useState<string>("");
    const [ invalidWord, setInvalidWord ] = useState<boolean>(false);

    useEffect(() => {
        if(!gameStarted) {
            setEnteredWord("");
            dispatch(Game.actions.addWord(""));
            dispatch(Game.actions.clearGuessedLetters([]));
        }
    }, [gameStarted, setEnteredWord, dispatch]);

    const handleSubmitWord = (enteredWord:string) => {
        enteredWord = enteredWord.toLowerCase();
        if(enteredWord.length > 0) {
            const lengthResult = enteredWord.length >= 3 && enteredWord.length <= 12 ? false : true;
            setInvalidWord(lengthResult);

            if(!lengthResult) {
                dispatch(Game.actions.addWord(enteredWord));
                dispatch(Game.actions.updateGameStarted(true));
            }
        }
    };

    //when the user clicks the button do the following checks
    // 1. that the min and max length of the word are within the given parameters
    // 2. and the string doesn't include any words that aren't part of the alphabet ö, å, ä etc
    return (
        <MainContainer>
            {!wordIsSubmitted ? (
                <>
                    <TextP>
                        Enter a word and press enter to start the game
                    </TextP>
                    <InputWordDiv>
                        <WordInput 
                            type="text" 
                            value={enteredWord} 
                            onChange={event => setEnteredWord(event.target.value)} 
                            minLength={3}
                            maxLength={12}
                            required
                        />
                        <GeneralButton 
                            type="button" 
                            onClick={() => handleSubmitWord(enteredWord)}
                        >
                            ENTER
                        </GeneralButton>
                        {invalidWord && <p>Word must be 3 to 12 letters long</p>}
                    </InputWordDiv>
                </>
            ) : (
                <PlayGame />
            )}
        </MainContainer>
    );
};

export default StartGame;

const MainContainer = styled.main`
    margin: 20px;
`;

const InputWordDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100px;
`;

const WordInput = styled.input`
    border: none;
    background-color: rgba(255, 192, 203, 0.5);
    padding: 10px;
    font-size: 16px;
    outline: none;
    width: 100%;
    &:focus{
        background-color: rgba(255, 153, 170, 0.5);
    }
`;

const GeneralButton = styled.button`
    border: 2px solid #404040;
    background-color: transparent;
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    margin-top: 10px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        background-color: #404040;
        transition: 0.3s;
        color: #e5e2e2;
    }
`;