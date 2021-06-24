import React from "react";

type PropsMatch = {
    itsAMatch: boolean,
};

export const OutcomeString: React.FC<PropsMatch> = ({ itsAMatch }) => {

    return (
        <>
            <p>{itsAMatch ? "It's a match!" : "It's not a match!"}</p>
        </>
    );
};


type PropCount = {
    guessCounter: number,
};

export const GuessesSoFar: React.FC<PropCount> = ({ guessCounter }) => {

    return (
        <>
            <p>You have guessed: {guessCounter}/10 times</p> 
        </>
    );
};

type PropResult = {
    guessCounter: number,
    spaceLetterArrayIncludes: boolean,
}

export const GameResult: React.FC<PropResult> = ({
    guessCounter,
    spaceLetterArrayIncludes
 }) => {

    return (
        <>
            <p>{
                guessCounter < 10 && spaceLetterArrayIncludes ? null 
                : 
                spaceLetterArrayIncludes ? "You didn't win 🙁 Try again!" : 
                "You've won the game 🎉!"}</p>        
        </>
    );
}