import React from "react";

import { CounterOutcomeText, CounterOutcomeContainer } from "./GameCounterOutcome";

type PropsStringContainer = {
    guessCounter: number,
    spaceLetterArrayIncludes: boolean,
};

const GameEnd: React.FC<PropsStringContainer> = ({ 
guessCounter, 
spaceLetterArrayIncludes 
}) => {
    return (
        <CounterOutcomeContainer className="final-result-div">
            <CounterOutcomeText>
                {
                    guessCounter < 10 && spaceLetterArrayIncludes ? null 
                    : 
                    spaceLetterArrayIncludes ? "You didn't win 🙁 Try again!" : 
                    "Congrats! You guessed the correct word 🥳🎉!"
                }
            </CounterOutcomeText> 
        </CounterOutcomeContainer>
    );
};

export default GameEnd;