import React from "react";
import styled from "styled-components/macro";

type GameboardButtonProps = {
    onClickFunction: () => void,
    text: string
}

const GameboardButtons: React.FC<GameboardButtonProps> = ({
    onClickFunction,
    text
}) => {
    return (
        <GeneralButton
            type="button"
            onClick={onClickFunction}
        >
            {text}
        </GeneralButton>
    );
};

export default GameboardButtons;


const GeneralButton = styled.button`
    border: 2px solid white;
    padding: 10px;
    border-radius: 5px;
    width: 50%;
    height: 50px;
    margin-top: 30px;
    transition: 0.3s;
    cursor: pointer;
    background-color: #404040;
    color: #fffdfd;

    &:hover {
        background-color: #5a5a5a;
        transition: 0.3s;
    }
`;