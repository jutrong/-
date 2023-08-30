import { styled } from "styled-components";

import { ReactComponent as BookMarkIcon } from "../../../assets/images/svg/home/bookmarkIcon.svg";

// 추천 아이템 컨테이너
export const RecommendItemContainer = styled.div`
    height: 178px;
    width: 109px;

    margin-bottom: 20px;
`;

// 추천 아이템 이미지
export const RecommendItemImg = styled.img`
    width: 109px;
    height: 109px;
    border-radius: 8px;
`;

// 추천 아이템 라벨 박스
export const RecommendItemLabelBox = styled.div`
    margin-top: 11px;
    height: 16px;
    background-color: #dee9ff;
    display: inline-block;
    border-radius: 4px;
`;
// 추천 아이템 라벨
export const RecommendItemLabel = styled.div`
    color: #208df1;
    font-size: 12px;
    font-weight: bold;
    padding: 2px 4px;
`;

// 추천 아이템 텍스트 아이콘 박스
export const RecommendItemTextIconBox = styled.div`
    height: 16px;
    margin-top: 8px;
    display: flex;
`;
// 추천 아이템 이름 텍스트
export const RecommendItemNameText = styled.div`
    font-size: 15px;
    color: #555;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 109px;
`;
// 추천 아이템 아이콘
export const BookMarkIconSvg = styled(BookMarkIcon)`
    margin-left: 10px;
`;

// 추천 아이템 가격
export const RecommendItemPriceText = styled.div`
    height: 16px;
    margin-top: 6px;
    font-size: 15.391px;
    color: #6138f8;
    font-weight: 700;
    font-style: normal;
`;
