import styled from "styled-components";

// 홈 컨테이너
export const Container = styled.div`
    justify-content: space-between;

    align-items: center;
    margin: 0 auto;

    width: 100%;
    max-width: 390px;
    min-height: 844px;
    height: 100%;
    background-color: #f5f5f5;
`;

//헤더박스

export const HeaderBox = styled.div`
    height: 368px;
    background-color: white;
`;

//이미지
export const Img = styled.img`
    height: 182px;
    width: 100%;
`;

export const FandomJoinBox = styled.div`
    margin-left: 16px;
`;

// 팬덤이름
export const FandomName = styled.div`
    color: #1d1b20;
    margin-top: 16px;
    font-size: 20px;

    font-weight: 700;
`;
//팬덤이름 멤버수
export const FandomMember = styled.div`
    color: #1d1b20;
    margin-top: 8px;
    font-size: 14px;

    font-weight: 500;
`;

// 팬덤 가입 버튼
export const JoimBtn = styled.button`
    width: 358px;
    height: 44px;
    color: white;
    background-color: #208df1;
    border-radius: 8px;
    border: none;
    margin-top: 18px;
    font-size: 15px;
    text-align: center;
    font-weight: 700;
`;
// 공지사항 임포트
