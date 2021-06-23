import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IState {
    enteredWord: string,
    gameStarted: boolean,
    guessedLetter: string[],
};

const initialState: IState = {
    enteredWord: "",
    gameStarted: false,
    guessedLetter: [],
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
        addGuessedLetter: (state, action: PayloadAction<string>) => {
            const letterGuessed = action.payload;
            state.guessedLetter.push(letterGuessed);
        },
    }
});

export default Game;