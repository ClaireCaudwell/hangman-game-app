import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
      <GameHeader />
      <StartGame />
    </Provider>
  );
};

export default App;
