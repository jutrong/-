import { styled } from "styled-components";

import { ReactComponent as LeftArrow } from "../../../assets/images/svg/hotFandom/hotPandomarrowLeftIcon.svg";

// 팬덤 헤더 컨테이너
export const ContentHeaderContainer = styled.div`
    height: 50px;
    display: flex;
    display: flex;
    align-items: center;
`;

// 헤더 마이 팬덤 텍스트
export const MyPandomHeaderText = styled.p`
    font-size: 20px;
    margin-left: 10px;

    font-weight: 700;
    color: white;
`;

// ViewAllBtn 임포트
export const ArrowBtn = styled(LeftArrow)`
    width: 24px;
    height: 24px;
    margin-left: 16px;
`;
