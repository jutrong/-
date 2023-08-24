import * as S from "./style/RecommendItemBoard.style";

import ContentHeader from "./ContentHeader";

import RecommendItem from "./RecommendItem";

const RecommendItemBoard: React.FC = () => {
    return (
        <>
            <S.RecommendItemBoardContainer>
                <ContentHeader />
                <S.RecommendItemListBox>
                    <RecommendItem />
                    <RecommendItem />
                    <RecommendItem />
                    <RecommendItem />
                    <RecommendItem />
                    <RecommendItem />
                </S.RecommendItemListBox>
            </S.RecommendItemBoardContainer>
        </>
    );
};
export default RecommendItemBoard;
