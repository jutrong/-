import * as S from "./style/RecommendItem.style";

const RecommendItem: React.FC = () => {
    return (
        <>
            <S.RecommendItemContainer>
                <S.RecommendItemImg />
                <S.RecommendItemLabelBox>
                    <S.RecommendItemLabel>전정국</S.RecommendItemLabel>
                </S.RecommendItemLabelBox>{" "}
                <S.RecommendItemTextIconBox>
                    <S.RecommendItemNameText>
                        비행사 우주...
                    </S.RecommendItemNameText>
                    <S.BookMarkIconSvg />
                </S.RecommendItemTextIconBox>
                <S.RecommendItemPriceText>12,000원</S.RecommendItemPriceText>
            </S.RecommendItemContainer>
        </>
    );
};
export default RecommendItem;
