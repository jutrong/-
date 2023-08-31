import { styled } from "styled-components";

export const RecommendItemBoardContainer = styled.div`
    height: 460px;
    margin: auto;
    margin-left: 5px;
    align-items: center;
`;
export const RecommendItemListBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 0fr);

    grid-column-gap: 8px;
`;
