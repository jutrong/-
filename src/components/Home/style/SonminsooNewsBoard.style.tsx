import { styled } from "styled-components";

export const SonminsooNewsBoardContainer = styled.div`
    height: 415px;
    padding-top: 8px;
`;
export const SonminsooNewsListBox = styled.div`
    height: 360px;
    margin-top: 8px;
    width: 100%;

    display: inline-flex;
    white-space: nowrap;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
