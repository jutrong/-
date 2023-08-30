import styled from "styled-components";

// 팬덤메뉴 컨테이너
export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

// 팬덤 메뉴박스
export const MenuBox = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 10px;
    border: solid black;
    box-shadow: 3px 3px;
    background-color: rgba(255, 255, 255, 0.6);
`;

//팬덤 메뉴 텍스트
export const MenuText = styled.div`
    color: #1d1b20;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin-top: 12px;
`;

//팬덤 메뉴 아이콘 텍스트
export const MenuIconText = styled.div`
    font-size: 31px;
    text-align: center;
    margin-top: 32px;
`;
