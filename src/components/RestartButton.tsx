import { useDispatch } from "react-redux";

import Game from "../reducer/gameState";

const RestartButton = () => {

    const dispatch = useDispatch();

    return (
        <>
            <button
                type="button" 
                onClick={() => dispatch(Game.actions.updateGameStarted(false))}
            >
                RESTART GAME
            </button>
        </>
    );
};

export default RestartButton;