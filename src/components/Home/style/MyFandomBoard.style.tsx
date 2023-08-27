import { styled } from "styled-components";

// 팬덤 서클 리스트 컨테이너
export const MyFandomBoardContainer = styled.div`
    height: 193px;
`;

// 서클 리스트 박스
export const FandomCircleListBox = styled.div`
    height: 144px;

    display: flex;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
