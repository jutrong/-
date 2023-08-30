import { styled } from "styled-components";

import { ReactComponent as NumberOneIcon } from "../../../assets/images/svg/hotFandom/hotPandomNumberOneIcon.svg";
import { Item } from "../../Feed/style/Item.style";

export const PandomCircleContainer = styled.div`
    height: 115px;
    display: flex; /* Flex Container로 설정 */
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: center;
    margin-top: 30px;
`;

export const NumberOne = styled(NumberOneIcon)`
    width: 35px;
    height: 35px;
    position: absolute; /* 절대 위치 설정 */
`;

export const ImgContainer = styled.div`
    margin: auto;
    text-align: center;
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
