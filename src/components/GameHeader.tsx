import styled from "styled-components/macro";

const GameHeader = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>
                Guess the word
            </HeaderTitle>
        </HeaderContainer>
    );
};

export default GameHeader;

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeaderTitle = styled.h2`
    letter-spacing: 2px;
    padding: 10px;
    border: 2px solid white;
    border-radius: 3px;
    text-align: center;
    width: 250px;
`;

export const TextP = styled.p`
    font-size: 12px;
    font-weight: 400;
`;