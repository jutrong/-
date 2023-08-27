import { styled } from "styled-components";
import { ReactComponent as ViewAllBtnIcon } from "../../../assets/images/svg/home/viewAllBtnIcon.svg";

export const ContentHeaderContainer = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f3f3b7;
`;

// 헤더 마이 팬덤 텍스트
export const MyFandomHeaderText = styled.p`
    font-size: 20px;
    margin-left: 16px;
    font-weight: bold;
`;

// ViewAllBtn 임포트
export const ViewAllBtn = styled(ViewAllBtnIcon)`
    width: 66px;
    height: 15px;
    margin-right: 15px;
    float: right;
`;
