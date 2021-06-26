import React from "react";
import styled from "styled-components/macro";

type PropsOutcome = {
    guessCounter: number,
    enteredWordArray: string[],
    guessedLettersArray: string[],
};

const GameCounterOutcome: React.FC<PropsOutcome> = ({
    guessCounter,
    enteredWordArray,
    guessedLettersArray,
}) => {

    const itsAMatch = enteredWordArray.includes(guessedLettersArray[guessedLettersArray.length -1]);

    const userHasMadeAGuess = guessedLettersArray.length;

    return (
        <CounterOutcomeContainer>
            <CounterOutcomeDiv className="guesses-div">
                <CounterOutcomeText>
                    Guesses left: {guessCounter}/10
                </CounterOutcomeText> 
            </CounterOutcomeDiv>

            {userHasMadeAGuess >= 1 && (
                <CounterOutcomeDiv className={itsAMatch ? "correct" : "incorrect"}>
                    <CounterOutcomeText>
                        {itsAMatch ? "It's a match!" : "It's not a match!"}
                    </CounterOutcomeText>
                </CounterOutcomeDiv>
            )}
        </CounterOutcomeContainer>         
    );
};

export default GameCounterOutcome;

export const CounterOutcomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 30px;
`;

const CounterOutcomeDiv = styled.div`
    padding: 5px;
    border-radius: 3px;
    width: 150px;
    text-align: center;
    margin: 0 10px;
    &.correct {
        background-color: #ccff99;
    }
    &.incorrect {
        background-color: #ffb3b3;
    }
    &.guesses-div {
        background-color: transparent;
        margin-right: 10px;
        font-weight: bold;
    }
    &.final-result-div {
        background-color: #e9fd8d;
    }
`;

export const CounterOutcomeText = styled.p``;