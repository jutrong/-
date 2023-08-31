import styled from "styled-components";

import { ReactComponent as ImgIconwhite } from "../../../assets/images/svg/ic-imagewhite.svg";

import { ReactComponent as CheckIcon } from "../../../assets/images/svg/ic-check.svg";

import { ReactComponent as LfetArrow } from "../../../assets/images/svg/ic-arrow-left.svg";

// 팬덤 헤더 컨테이너
export const ContentHeaderContainer = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

// 헤더 마이 팬덤 텍스트 박스
export const MyFandomHeaderBox = styled.div`
    display: flex;
`;

// arrow Btn
export const LeftArrowBtn = styled(LfetArrow)`
    width: 24px;
    height: 24px;
    margin-left: 16px;
`;

// 헤더 마이 팬덤 텍스트
export const MyFandomHeaderText = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-top: 3px;
    margin-left: 10px;
`;

// ViewAllBtn 임포트
export const CheckIconBtn = styled(CheckIcon)`
    width: 24px;
    height: 24px;
    margin-right: 13px;
    float: right;
`;

//  팬덤 컨테이너

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - (50px + env(safe-area-inset-top)));
    background-color: white;
`;

export const FandomContainer = styled.div`
    justify-content: space-between;
    align-items: center;
    width: 100%;

    margin: 0 auto;
`;

export const ImgContainer = styled.div`
    text-align: center;
`;

export const UploadImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    position: relative;
`;

//이미지 박스
export const ImgBox = styled.div`
    width: 100%;

    height: 182px;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
`;
// 이미지 아이콘
export const Img = styled.img`
    position: absolute;
    width: 100%;
    max-width: 390px;
    height: 182px;
    z-index: -1;
`;

// 이미지 아이콘
export const ImgIconTextBox = styled.div`
    text-align: center;
`;

export const ImgIcon = styled(ImgIconwhite)`
    width: 60px;
    height: 60px;
`;
// 이미지 박스 텍스트
export const ImgBoxText = styled.div`
    color: white;

    font-size: 16px;

    font-weight: 700;
`;
//인풋
export const Input = styled.input.attrs({})`
    width: 340px;
    height: 50px;

    margin-top: 200px;
    border-radius: 8px;
    background-color: #f6f6f6;
    border: solid #e8e8e8 1px;
    padding-left: 16px;
`;
