import React from "react";

import { OutcomeString, GuessesSoFar } from "./GameStrings";

type PropsOutcome = {
    guessCounter: number,
    enteredWordArray: string[],
    guessedLetters: string[],
};

const GameCounterOutcome: React.FC<PropsOutcome> = ({
    guessCounter,
    enteredWordArray,
    guessedLetters
}) => {

    const itsAMatch = enteredWordArray.includes(guessedLetters[guessedLetters.length -1]);

    return (
        <>
            <GuessesSoFar 
                guessCounter={guessCounter}                   
            />
            <OutcomeString 
                itsAMatch={itsAMatch} 
            />
        </>
    );
};

export default GameCounterOutcome;