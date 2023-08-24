import styled from "styled-components";

import { ReactComponent as LeftArrow } from "../../assets/images/svg/ic-arrow-left.svg";
import { ReactComponent as Search } from "../../assets/images/svg/ic-search.svg";
// 홈 컨테이너
export const Container = styled.div`
    width: 100%;
    max-width: 390px;
    min-height: 844px;
    background-color: #f5f5f5;
`;

export const HeaderBox = styled.div`
    height: 97px;
    background-color: white;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.1);
`;

// 인풋 헤더 박스
export const InputHeaderBox = styled.div`
    padding-top: 40px;
`;
// 인풋 아이콘 박스
export const InputIconBox = styled.div`
    height: 50px;
    padding-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;
`;
// 인풋
export const Input = styled.input`
    background-color: white;
    border: none;
    width: 70%;
`;

// 뒤로가기 아이콘
export const LeftArrowIcon = styled(LeftArrow)`
    width: 24px;
    height: 24px;
`;

//검색아이콘
export const SearchIcon = styled(Search)`
    width: 24px;
    height: 24px;
    padding-right: 16px;
`;
