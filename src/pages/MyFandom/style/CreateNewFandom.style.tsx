import styled from "styled-components";

import { ReactComponent as ImgIconBlue } from "../../../assets/images/svg/ic-image-blue.svg";
//  팬덤 컨테이너
export const Container = styled.div`
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 390px;
`;

//이미지 박스
export const ImgBox = styled.div`
    width: 100%;
    max-width: 390px;
    height: 182px;
    background: #b8ddff;
    display: flex;
    justify-content: center;
    align-items: center;
`;
// 이미지 아이콘

export const ImgIcon = styled(ImgIconBlue)`
    width: 60px;
    height: 60px;
`;
// 이미지 박스 텍스트
export const ImgBoxText = styled.div`
    color: #68b7ff;

    font-size: 16px;

    font-weight: 700;
`;
//인풋
export const Input = styled.input.attrs({
    placeholder: "팬덤명을 입력해 주세요.",
})`
    width: 340px;
    height: 50px;
    margin-top: 16px;
    border-radius: 8px;
    background-color: #f6f6f6;
    border: solid #e8e8e8 1px;
    padding-left: 16px;
    margin-left: 16px;
`;
