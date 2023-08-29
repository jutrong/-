import * as S from "./style/RecommendItem.style";

type RecommendItem = {
    id: number;
    originUrl: string;
    title: string;
    price: string;
    imgUrl: string;
    groupName: string;
    artistName: string;
};

type RecommendItemProps = {
    item: RecommendItem;
};
const RecommendItem: React.FC<RecommendItemProps> = ({ item }) => {
    return (
        <>
            <S.RecommendItemContainer>
                <S.RecommendItemImg src={item?.imgUrl} />
                <S.RecommendItemLabelBox>
                    <S.RecommendItemLabel>
                        {item.artistName}
                    </S.RecommendItemLabel>
                </S.RecommendItemLabelBox>
                <S.RecommendItemTextIconBox>
                    <S.RecommendItemNameText>
                        {item.title}
                    </S.RecommendItemNameText>
                    <S.BookMarkIconSvg />
                </S.RecommendItemTextIconBox>
                <S.RecommendItemPriceText>
                    {item.price}
                </S.RecommendItemPriceText>
            </S.RecommendItemContainer>
        </>
    );
};
export default RecommendItem;
