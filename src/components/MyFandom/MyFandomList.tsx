import styled from "styled-components";

import { ReactComponent as UserIcon } from "../../assets/images/svg/MyFandom/FandomUserIcon.svg";

const MyFandomListContainer = styled.div`
    height: 70px;

    display: flex;
    flex-direction: row;
    justify-content: left;
    margin-left: 16px;
    align-items: center;
`;

// 이미지 서클
const CircleImg = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: black;
    margin-left: 14px;
`;
//텍스트박스
const RnakingTextBox = styled.div`
    margin-left: 15px;
`;
//팬덤이름, 인원 박스
const FandomNameMemberBox = styled.div`
    display: flex;
`;
// 팬덤 이름 텍스트
const FandomNameText = styled.div`
    font-size: 16px;
    color: #1d1b20;

    font-weight: 700;
`;
//멤버아이콘
const MamberIcon = styled(UserIcon)`
    width: 16px;
    height: 16px;
    margin-left: 10px;
`;

//팬덤 명수
const MemberQuantity = styled.div`
    font-size: 13px;
    color: #1d1b20;

    font-weight: 500;
`;

//활동 시간
const ActivityTime = styled.div`
    margin-top: 9px;
    color: #1d1b20;

    font-size: 13px;

    font-weight: 500;
`;
const MyFandomList = () => {
    return (
        <MyFandomListContainer>
            <CircleImg />
            <RnakingTextBox>
                <FandomNameMemberBox>
                    <FandomNameText>꾹이의 모든것</FandomNameText>
                    <MamberIcon />
                    <MemberQuantity>22k</MemberQuantity>
                </FandomNameMemberBox>
                <ActivityTime>채팅활동 10분전</ActivityTime>
            </RnakingTextBox>
        </MyFandomListContainer>
    );
};
export default MyFandomList;
