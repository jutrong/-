import styled from "styled-components";
import { ReactComponent as NumberOneIcon } from "../../assets/images/svg/hotFandom/hotPandomNumberOneIcon.svg";

const PandomCircleContainer = styled.div`
    height: 115px;

    margin-top: 30px;
`;

const NumberOne = styled(NumberOneIcon)`
    width: 35px;
    height: 35px;
`;

const PandomShadowCircle = styled.div`
    width: 80px;
    height: 80px;
    margin: auto;
    border-radius: 50%;
    border: solid black;
    box-shadow: 5px 5px;
    background-color: white;
    box-sizing: border-box;
`;

const PandomCircleName = styled.p`
    font-size: 20px;
    text-align: center;
    margin-top: 11px;
    color: white;
    font-weight: 700;
`;

const HotFandomCircle = () => {
    return (
        <PandomCircleContainer>
            <PandomShadowCircle>
                <NumberOne />
            </PandomShadowCircle>
            <PandomCircleName>A.R.dfdfdfM.Y</PandomCircleName>
        </PandomCircleContainer>
    );
};
export default HotFandomCircle;
