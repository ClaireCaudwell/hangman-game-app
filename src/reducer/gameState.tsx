import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IState {
    enteredWord: string,
    gameStarted: boolean,
    guessedLetter: string,
    letterIsAMatch: boolean,
    confirmOutcomeString: string,
    guessesCount: Number,
};

const initialState: IState = {
    enteredWord: "",
    gameStarted: false,
    guessedLetter: "",
    letterIsAMatch: false,
    confirmOutcomeString: "",
    guessesCount: 0,
};

export const Game = createSlice({
    name: "game",
    initialState,
    reducers: {
        addWord: (state, action: PayloadAction<string>) => {
            const enteredWord = action.payload;
            state.enteredWord = enteredWord;
        },
        updateGameStarted: (state, action: PayloadAction<boolean>) => {
            const gameStarted = action.payload;
            state.gameStarted = gameStarted;
        },
        addGuessesCount: (state) => {            
            state.guessesCount = +1;
        },
        addGuessedLetter: (state, action: PayloadAction<string>) => {
            const letterGuessed = action.payload;
            state.guessedLetter = letterGuessed;
        },
        updateLetterIsAMatch: (state, action: PayloadAction<boolean>) => {
            const letterIsTrue = action.payload;
            state.letterIsAMatch = letterIsTrue;
        },
        addOutcomeString:  (state, action: PayloadAction<string>) => {
            const outcomeString = action.payload;
            state.confirmOutcomeString = outcomeString;
        }
    }
});

export default Game;