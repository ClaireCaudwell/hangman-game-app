import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IState {
    enteredWordArray: string[],
    gameStarted: boolean,
    guessedLettersArray: string[],
    guessCounter: number,
};

const initialState: IState = {
    enteredWordArray: [],
    gameStarted: false,
    guessedLettersArray: [],
    guessCounter: 0,
};

export const Game = createSlice({
    name: "game",
    initialState,
    reducers: {
        addWordLetter: (state, action: PayloadAction<string>) => {
            const letter = action.payload;
            state.enteredWordArray.push(letter);
        },
        removeWordLetter: (state) => {
            state.enteredWordArray.pop();
        },
        updateGameStarted: (state, action: PayloadAction<boolean>) => {
            const gameStarted = action.payload;
            state.gameStarted = gameStarted;
        },
        addGuessedLetters: (state, action: PayloadAction<string>) => {
            const letterGuessed = action.payload;
            state.guessedLettersArray.push(letterGuessed);
        },
        updateGuessCounter: (state) => {
            state.guessCounter = state.guessCounter +1;
        },
        clearGameBoard: (state) => {
            state.enteredWordArray = [];
            state.gameStarted = false;
            state.guessedLettersArray = [];
            state.guessCounter = 0;
        }
    }
});

export default Game;