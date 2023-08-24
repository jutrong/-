import { styled } from "styled-components";

import { ReactComponent as UserIcon } from "../../assets/images/svg/hotFandom/hotPandomUserIcon.svg";

export const FandomRankingContainer = styled.div`
    height: 70px;

    display: flex;
    flex-direction: row;
    justify-content: left;
    margin-left: 16px;
    align-items: center;
`;

// 넘버 텍스트
export const RankingNumberText = styled.div`
    font-size: 16px;

    font-weight: 700;
    color: #6138f8;
`;
// 이미지 서클
export const CircleImg = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: black;
    margin-left: 14px;
`;
//텍스트박스
export const RnakingTextBox = styled.div`
    margin-left: 15px;
`;
//팬덤이름, 인원 박스
export const FandomNameMemberBox = styled.div`
    display: flex;
`;
// 팬덤 이름 텍스트
export const FandomNameText = styled.div`
    font-size: 16px;
    color: #1d1b20;

    font-weight: 700;
`;
//멤버아이콘
export const MamberIcon = styled(UserIcon)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;

//팬덤 명수
export const MemberQuantity = styled.div`
    font-size: 13px;
    color: #1d1b20;

    font-weight: 500;
`;

//활동 시간
export const ActivityTime = styled.div`
    margin-top: 9px;
    color: #1d1b20;

    font-size: 13px;

    font-weight: 500;
`;
