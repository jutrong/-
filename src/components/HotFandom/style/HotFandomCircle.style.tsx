import { styled } from "styled-components";

import { ReactComponent as NumberOneIcon } from "../../../assets/images/svg/hotFandom/hotPandomNumberOneIcon.svg";

export const PandomCircleContainer = styled.div`
    height: 115px;

    margin-top: 30px;
`;

export const NumberOne = styled(NumberOneIcon)`
    width: 35px;
    height: 35px;
`;

export const imgContainer = styled.div`
    margin: auto;
`;

export const PandomShadowCircle = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: solid black;
    box-shadow: 5px 5px;
    box-sizing: border-box;
`;

export const PandomCircleName = styled.p`
    font-size: 20px;
    text-align: center;
    margin-top: 11px;
    color: white;
    font-weight: 700;
`;
