import ContentHeader from "./ContentHeader";
import styled from "styled-components";
import RecommendItem from "./RecommendItem";

const RecommendItemBoardContainer = styled.div`
    height: 460px;
    width: 100%;
    max-width: 390px;
`;
const RecommendItemListBox = styled.div`
    height: 360px;
    margin-top: 8px;
    margin-left: 16px;
    position: absolute;
    padding-top: 10px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 0fr);

    grid-column-gap: 15px;
`;

const RecommendItemBoard = () => {
    return (
        <>
            <RecommendItemBoardContainer>
                {" "}
                <ContentHeader />
                <RecommendItemListBox>
                    <RecommendItem />
                    <RecommendItem />
                    <RecommendItem />
                    <RecommendItem />
                    <RecommendItem />
                    <RecommendItem />
                </RecommendItemListBox>
            </RecommendItemBoardContainer>
        </>
    );
};
export default RecommendItemBoard;
