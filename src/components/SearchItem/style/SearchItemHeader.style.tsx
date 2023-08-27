import styled from "styled-components";
export const SearchItemHeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 13px 16px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: #ffffff;
`;
export const LeftArrow = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  cursor: pointer;
`;
export const SearchItemInput = styled.input`
  width: 100%;
  &::placeholder {
    font-size: 15px;
    color: #1d1b20;
    opacity: 0.5;
    font-family: "Pretendard-Medium";
  }
`;
export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
