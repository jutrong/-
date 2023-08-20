import styled from "styled-components";

const FandomCircleContainer = styled.div`
    width: 84px;
    height: 110px;
    margin-left: 16px;
`;

const FandomShadowCircle = styled.div`
    width: 84px;
    height: 84px;
    border-radius: 50%;
    border: solid black;
    box-shadow: 5px 5px;
    background-color: white;
    box-sizing: border-box;
`;

const FandomCircleName = styled.p`
    font-size: 15px;
    text-align: center;
    opacity: 0.5;
`;

const FandomCircle = () => {
    return (
        <>
            <FandomCircleContainer>
                <FandomShadowCircle />
                <FandomCircleName>A.R.M.Y</FandomCircleName>
            </FandomCircleContainer>
        </>
    );
};
export default FandomCircle;
