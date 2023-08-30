import * as S from "./style/RecommendItem.style";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    const handleItemClick = () => {
        navigate("상품 상세 링크");
    };
    return (
        <>
            <S.RecommendItemContainer>
                <S.RecommendItemImg
                    src={item?.imgUrl}
                    key={item.id}
                    onClick={handleItemClick}
                />
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
