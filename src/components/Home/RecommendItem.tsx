import styled from "styled-components";

import { ReactComponent as BookMarkIcon } from "../../assets/images/svg/home/bookmarkIcon.svg";

// 추천 아이템 컨테이너
const RecommendItemContainer = styled.div`
    height: 178px;
    width: 109px;

    margin-bottom: 20px;
`;

// 추천 아이템 이미지
const RecommendItemImg = styled.div`
    background-color: black;
    width: 109px;
    height: 109px;
    border-radius: 8px;
`;

// 추천 아이템 라벨 박스
const RecommendItemLabelBox = styled.div`
    margin-top: 11px;
    height: 16px;
    background-color: #dee9ff;
    display: inline-block;
    border-radius: 4px;
`;
// 추천 아이템 라벨
const RecommendItemLabel = styled.div`
    color: #208df1;
    font-size: 12px;
    font-weight: bold;
    padding: 2px 4px;
`;

// 추천 아이템 텍스트 아이콘 박스
const RecommendItemTextIconBox = styled.div`
    height: 16px;
    margin-top: 8px;
    display: flex;
`;
// 추천 아이템 이름 텍스트
const RecommendItemNameText = styled.div`
    font-size: 15px;
    color: #555;
`;
// 추천 아이템 아이콘
const BookMarkIconSvg = styled(BookMarkIcon)`
    margin-left: 10px;
`;

// 추천 아이템 가격
const RecommendItemPriceText = styled.div`
    height: 16px;
    margin-top: 6px;
    font-size: 15.391px;
    color: #6138f8;
    font-weight: 700;
    font-style: normal;
`;
const RecommendItem = () => {
    return (
        <>
            <RecommendItemContainer>
                <RecommendItemImg />
                <RecommendItemLabelBox>
                    <RecommendItemLabel>전정국</RecommendItemLabel>
                </RecommendItemLabelBox>{" "}
                <RecommendItemTextIconBox>
                    <RecommendItemNameText>
                        비행사 우주...
                    </RecommendItemNameText>
                    <BookMarkIconSvg />
                </RecommendItemTextIconBox>
                <RecommendItemPriceText>12,000원</RecommendItemPriceText>
            </RecommendItemContainer>
        </>
    );
};
export default RecommendItem;
