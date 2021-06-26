import React, { useState } from "react";
import styled from "styled-components/macro";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../App";
import Game from "../reducer/gameState";
import GameHeader from "../components/GameHeader";
import ScreenText from "../components/ScreenText";
import AlphabetButtons from "../components/AlphabetButtons";
import GameboardButtons from "../components/GameboardButtons"


const GameBoard: React.FC = () => {
    const dispatch = useDispatch();

    // useSelector
    const gameStarted = useSelector((state: RootState) => state.gamestate.gameStarted);
    const guessedLetters = useSelector((state: RootState) => state.gamestate.guessedLettersArray);
    const enteredWordArray = useSelector((state: RootState) => state.gamestate.enteredWordArray);
    const guessCounter = useSelector((state:RootState) => state.gamestate.guessCounter);

    // useState
    const [ buttonPressed, setButtonPressed ] = useState<boolean>(false);
   
    // other
    const enteredWord:string = enteredWordArray.join("");

    const handleSubmitWord = () => {
        setButtonPressed(true);
        if(enteredWordArray.length >= 3 && enteredWordArray.length <= 10){
            dispatch(Game.actions.updateGameStarted(true));
            setButtonPressed(false);
        }
    };

    const handleRestartGame = () => {
        dispatch(Game.actions.clearGameBoard());
    };

    return (
        <MainContainer>
            <GameBoardContainer>
                <GameHeader />
                <InnerGameboardDiv>
                    <ScreenContainer>
                        <ScreenText 
                            gameStarted={gameStarted}
                            enteredWord={enteredWord}
                            buttonPressed={buttonPressed}
                        />
                    </ScreenContainer>
                    <AlphabetButtons
                        guessCounter={guessCounter}
                        guessedLetters={guessedLetters}
                        gameStarted={gameStarted}
                    />
                    {!gameStarted ? (
                        <GameboardButtons 
                            onClickFunction={handleSubmitWord}
                            text="ENTER WORD"
                        />
                    ) : (
                        <GameboardButtons
                            onClickFunction={handleRestartGame}
                            text="REPLAY GAME"
                        />
                    )}
                </InnerGameboardDiv>
            </GameBoardContainer>
        </MainContainer>
    );
};

export default GameBoard;

const MainContainer = styled.main`
    margin: 30px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const GameBoardContainer = styled.div`
    background: linear-gradient(#c0bfbf, #5f5f61); 
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    width: 400px;
    box-shadow: 3px 3px #5f5f5f;
    @media(min-width: 640px){
        width: 500px
    }
`;

const InnerGameboardDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ScreenContainer = styled.div`
    height: 250px;
    background-color: #fffdfd;
    width: 95%;
    margin: 10px auto;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-shadow: 3px 3px 2px #888888;
`;