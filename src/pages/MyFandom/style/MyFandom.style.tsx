import styled from "styled-components";
import Bg from "../../../assets/images/png/backgroundGreen.png";

//  팬덤 컨테이너
export const Container = styled.div`
    justify-content: space-between;

    align-items: center;
    margin: 0 auto;
    max-width: 390px;
    width: 100%;
    width: 100%;
    max-width: 390px;
`;

export const FandomImg = styled.img``;

// 핫 팬덤 헤더박스
export const MyFandomHeaderBox = styled.div`
    height: 280px;
    background-image: url(${Bg});
`;

// 마이팬덤 리스트 박스
export const MyFandomListBox = styled.div`
    width: 100%;
    max-width: 390px;
`;
