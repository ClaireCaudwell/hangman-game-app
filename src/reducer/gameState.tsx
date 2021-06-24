import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IState {
    enteredWord: string,
    gameStarted: boolean,
    guessedLetters: string[],
};

const initialState: IState = {
    enteredWord: "",
    gameStarted: false,
    guessedLetters: [],
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
        addGuessedLetters: (state, action: PayloadAction<string>) => {
            const letterGuessed = action.payload;
            state.guessedLetters.push(letterGuessed);
        },
        clearGuessedLetters: (state, action: PayloadAction<string[]>) => {
            const emptyArray = action.payload;
            state.guessedLetters  = emptyArray;
        }
    }
});

export default Game;