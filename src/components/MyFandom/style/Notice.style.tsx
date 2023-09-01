import styled from "styled-components";

// 공지 컨테이너
export const NoticeContainer = styled.div`
    justify-content: space-between;
    //align-items: center;
    background-color: white;
    padding-bottom: 30px;
    margin-top: 16px;
`;

// 헤더 마이 팬덤 텍스트 박스
export const NoticeHeaderBox = styled.div`
    height: 96px;
    width: 100%;

    padding-left: 16px;
`;

// 공지 텍스트
export const NoticeHeaderText = styled.div`
    color: #333;
    font-size: 20px;
    font-weight: 700;
    line-height: 100%;
    padding-top: 16px;
`;
// 프로필 박스

export const ProfileBox = styled.div`
    height: 40px;

    margin-top: 20px;
    display: flex;
`;
// 프로필 이미지
export const ProfileImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: black;
`;
// 프로필 텍스트 박스
export const ProfileTextBox = styled.div`
    margin-left: 7px;
    padding-top: 5px;
`;
// 닉네임 텍스트
export const NicknameText = styled.div`
    color: #1d1b20;
    font-size: 14px;

    font-weight: 700;
`;
// 팬덤이름 시간 박스
export const FandomNameTimeBox = styled.div`
    display: flex;
    margin-top: 6px;
`;
// 팬덤이름시간텍스트
export const NameTimeText = styled.div`
    color: #666;
    font-size: 13px;

    font-weight: 500;

    margin-right: 10px;
`;

// 프로필 아이콘
export const ProfileIcon = styled.div``;

// arrow Btn
// export const LeftArrowBtn = styled(LfetArrow)`
//     width: 24px;
//     height: 24px;
//     margin-left: 16px;
// `;

// 오른쪽 아이콘 박스

// ViewAllBtn 임포트
// export const CheckIconBtn = styled(CheckIcon)`
//     width: 24px;
//     height: 24px;
//     margin-right: 13px;
//     float: right;
// `;

export const NoticeTextContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`;
// 공지 텍스트박스
export const NoticeTextBox = styled.div`
    width: 100%;
    padding-left: 22px;
    margin-top: 21px;
    display: flex;
    margin-left: auto;
`;

// 공지 텍스트
export const NoticeText = styled.p`
    color: #1d1b20;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    text-align: left;
`;
