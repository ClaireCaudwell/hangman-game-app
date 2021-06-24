import React from "react";

import { GameResult } from "../components/GameStrings";

type PropsStringContainer = {
    guessCounter: number,
    spaceLetterArrayIncludes: boolean,
};

const GameEnd: React.FC<PropsStringContainer> = ({ 
    guessCounter, 
    spaceLetterArrayIncludes 
}) => {

    return (
        <>
            <GameResult
                guessCounter={guessCounter}
                spaceLetterArrayIncludes={spaceLetterArrayIncludes}
            />
        </>
    );
};

export default GameEnd;