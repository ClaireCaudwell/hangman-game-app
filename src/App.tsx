import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createGlobalStyle } from "styled-components";

import gameState from "./reducer/gameState";
import GameHeader from "./components/GameHeader";
import StartGame from "./pages/StartGame";

const reducer = combineReducers({
  gamestate: gameState.reducer
});

const store = configureStore({ reducer });
 
export type RootState = ReturnType<typeof store.getState>;

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <GameHeader />
      <StartGame />
    </Provider>
  );
};

export default App;

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: #404040;
    font-family: sans-serif;
  }

  body {
    margin: 0;
    background-color: #fffdfd;
  }
`;
