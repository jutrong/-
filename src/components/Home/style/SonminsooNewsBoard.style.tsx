import { styled } from "styled-components";

export const SonminsooNewsBoardContainer = styled.div`
  height: 415px;
  padding-top: 8px;
`;
export const SonminsooNewsListBox = styled.div`
  height: 360px;
  margin-top: 8px;
  width: 100%;
  padding-left: 16px;
  display: inline-flex;
  gap: 15px;
  white-space: nowrap;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
