import React, { useState } from "react";

import GameBoard from "./GameBoard";

const StartGame: React.FC = () => {

    const [ enteredWord, setEnteredWord ] = useState<any>([]);
    const [ isWordSubmitted, setIsWordSubmitted ] = useState<Boolean>(false);

    const handleSubmitWord = () => {
        setIsWordSubmitted(true);
    };

    return (
        <main>
            {!isWordSubmitted ? (
                <>
                    <h4>Enter a word and press enter to start the game</h4>
                    <input 
                        type="text" 
                        value={enteredWord} 
                        onChange={event => setEnteredWord(event.target.value)} 
                    />
                    <button type="submit" onClick={handleSubmitWord}>SUBMIT</button>
                </>
            ) : (
                <GameBoard 
                    enteredWord={enteredWord}
                />
            )}
        </main>
    );
};

export default StartGame;