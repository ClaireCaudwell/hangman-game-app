import styled from "styled-components";

const GameHeader = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>Guess the word</HeaderTitle>
            <TextP>Enter a word to challenge your apponent to a game of guess the word</TextP>
        </HeaderContainer>
    );
};

export default GameHeader;

const HeaderContainer = styled.header`
    margin: 20px 10px;
    text-align: center;
    border-bottom: 1px solid #404040;
`;

const HeaderTitle = styled.h1`
    letter-spacing: 2px;
`;

export const TextP = styled.p`
    font-size: 16px;
`;