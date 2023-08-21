import styled from "styled-components";

// 공지 컨테이너
const NoticeContainer = styled.div`
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding-bottom: 30px;
    margin-top: 16px;
`;

// 헤더 마이 팬덤 텍스트 박스
const NoticeHeaderBox = styled.div`
    height: 96px;
    width: 100%;

    padding-left: 16px;
`;

// 공지 텍스트
const NoticeHeaderText = styled.div`
    color: #333;
    font-size: 20px;
    font-weight: 700;
    line-height: 100%;
    padding-top: 16px;
`;
// 프로필 박스

const ProfileBox = styled.div`
    height: 40px;

    margin-top: 20px;
    display: flex;
`;
// 프로필 이미지
const ProfileImg = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: black;
`;
// 프로필 텍스트 박스
const ProfileTextBox = styled.div`
    margin-left: 7px;
    padding-top: 5px;
`;
// 닉네임 텍스트
const NicknameText = styled.div`
    color: #1d1b20;
    font-family: Pretendard;
    font-size: 14px;

    font-weight: 700;
`;
// 팬덤이름 시간 박스
const FandomNameTimeBox = styled.div`
    display: flex;
    margin-top: 6px;
`;
// 팬덤이름시간텍스트
const NameTimeText = styled.div`
    color: #666;
    font-family: Pretendard;
    font-size: 13px;

    font-weight: 500;

    margin-right: 10px;
`;

// 프로필 아이콘
const ProfileIcon = styled.div``;

// arrow Btn
// const LeftArrowBtn = styled(LfetArrow)`
//     width: 24px;
//     height: 24px;
//     margin-left: 16px;
// `;

// 오른쪽 아이콘 박스

// ViewAllBtn 임포트
// const CheckIconBtn = styled(CheckIcon)`
//     width: 24px;
//     height: 24px;
//     margin-right: 13px;
//     float: right;
// `;

// 공지 텍스트박스
const NoticeTextBox = styled.div`
    width: 100%;
    max-width: 346px;
    margin-top: 21px;
    display: flex;
    justify-content: center;
`;

// 공지 텍스트
const NoticeText = styled.p`
    color: #1d1b20;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
`;

const Notice = () => {
    return (
        <NoticeContainer>
            <NoticeHeaderBox>
                <NoticeHeaderText>공지</NoticeHeaderText>
                <ProfileBox>
                    <ProfileImg />
                    <ProfileTextBox>
                        <NicknameText>정의로운 손민수</NicknameText>
                        <FandomNameTimeBox>
                            <NameTimeText>꾹이의 모든 것</NameTimeText>
                            <NameTimeText>10분전</NameTimeText>
                        </FandomNameTimeBox>
                    </ProfileTextBox>
                    <ProfileIcon />
                </ProfileBox>
            </NoticeHeaderBox>

            <NoticeTextBox>
                <NoticeText>
                    공지는 하나만 상위 고정할 수 있으며
                    <br />긴 내용은 3줄까지만 허용
                    <br />
                    3줄이 넘어가고 글이 너무 길어서 더이상 표시 되지
                </NoticeText>
            </NoticeTextBox>
        </NoticeContainer>
    );
};
export default Notice;
