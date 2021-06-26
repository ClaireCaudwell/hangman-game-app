import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, {css} from "styled-components/macro";

import Game from "../reducer/gameState";
import { RootState } from "../App";

type Props = {
    guessCounter: number,
    guessedLetters: string[],
    gameStarted: boolean,
};

const AlphabetButtons: React.FC<Props>= ({ 
    guessCounter, 
    guessedLetters, 
    gameStarted,
}) => {
    const dispatch = useDispatch();

    // useSelector
    const enteredWordArray = useSelector((state: RootState) => state.gamestate.enteredWordArray);

    const alphabetArray:string[] = [];
    let alphabetNumber:number = 96; 

    for(let i = 0; i < 26; i++) {
        alphabetNumber +=1;
        const letter:string = String.fromCharCode(alphabetNumber);
        alphabetArray.push(letter);
    };

    const deleteButton = "Del";
    alphabetArray.push(deleteButton);

    const handleLetterGuessed = (letter:string) => {
        if(letter === "Del") {
            dispatch(Game.actions.removeWordLetter());
        } else {
            if(!gameStarted){
                // word inputted
                dispatch(Game.actions.addWordLetter(letter));
            } else {
                if(!enteredWordArray.includes(letter)){
                    dispatch(Game.actions.updateGuessCounter());
                }
                // letters guessed
                dispatch(Game.actions.addGuessedLetters(letter));
            }
        }
    };

    return (
        <AlphabetNumbersContainer>
            {alphabetArray.map((letter, index) => (
                <LetterButton 
                    type="button" 
                    key={index}
                    onClick={() => handleLetterGuessed(letter)}
                    disabled={
                        (guessCounter === 10 || guessedLetters.includes(letter)) || (letter === "Del" && gameStarted) ? true : false                    
                    }
                >
                    {letter}
                </LetterButton>
            ))}
        </AlphabetNumbersContainer>
    );
};
//127 del button
export default AlphabetButtons;

const AlphabetNumbersContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    align-items: center;
    justify-content: center; 
    padding: 0 10px;
`;

const LetterButton = styled.button`
    flex: 1 0 9.5%;
    height: 3rem;
    padding: 0.33rem;
    margin: 0.3%;
    border: none;
    background-color: #404040;
    ${props => props.disabled && css`
        background-color: #5a5a5a;
    `};
    color: #fffdfd;
    border-radius: 2px;
    cursor: pointer;    
    transition: 0.3s;
    &:focus, &:hover{
        background-color: #5a5a5a;
        transition: 0.3s;
    }
`;