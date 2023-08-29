import { styled } from "styled-components";

//인기팬덤리스트 컨네이너
export const PopularFandomListContainer = styled.div`
    height: 209px;
    width: 358px;
    border: solid black;
    border-radius: 8px;
    margin: 0 auto;
    background-color: white;
    position: relative;
`;
// 팬덤 이미지 box
export const PopularFandomImg = styled.div`
    height: 95px;
    width: 100%;
`;

export const Img = styled.img`
    height: 95px;
    width: 100%;
    position: absolute;
`;

export const NumberOneBox = styled.div`
    display: flex;
    padding: 35px 0 35px;
    position: relative;
`;
// 1위 팬덤 텍스트
export const NumberOneText = styled.div`
    color: #d5f033;
    font-size: 15px;
    font-weight: 700;
    margin-left: 26px;
`;
// 팬덤 이름 텍스트
export const NumberOneFandomNameText = styled.div`
    color: white;
    margin-left: 12px;
    font-size: 15px;
    font-weight: 700;
`;

// 2, 3, 4 팬덤 텍스트 박스
export const NextNumberFandomBox = styled.div`
    display: flex;
    height: 30px;
    padding-top: 15px;
`;

// 순위 텍스트
export const RankingText = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: #6138f8;
    margin-left: 22px;
`;

// 팬덤이름 텍스트
export const FandomNameText = styled.p`
    font-size: 15px;
    font-weight: 500;
    color: #000000;
    margin-left: 15px;
`;
