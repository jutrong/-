import styled from "styled-components";
import { ReactComponent as CheckIcon } from "../../assets/images/svg/ic-check.svg";

import { ReactComponent as LfetArrow } from "../../assets/images/svg/ic-arrow-left.svg";

// 팬덤 헤더 컨테이너
const ContentHeaderContainer = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //background-color: #f3f3b7;
`;

// 헤더 마이 팬덤 텍스트 박스
const MyFandomHeaderBox = styled.div`
    display: flex;
`;

// arrow Btn
const LeftArrowBtn = styled(LfetArrow)`
    width: 24px;
    height: 24px;
    margin-left: 16px;
`;

// 헤더 마이 팬덤 텍스트
const MyFandomHeaderText = styled.div`
    font-size: 20px;
    font-weight: 700;

    margin-left: 10px;
`;

// ViewAllBtn 임포트
const CheckIconBtn = styled(CheckIcon)`
    width: 24px;
    height: 24px;
    margin-right: 13px;
    float: right;
`;

const CreateNewFandomHeader = () => {
    return (
        <ContentHeaderContainer>
            <MyFandomHeaderBox>
                <LeftArrowBtn />
                <MyFandomHeaderText>새 팬덤 만들기</MyFandomHeaderText>
            </MyFandomHeaderBox>

            <CheckIconBtn />
        </ContentHeaderContainer>
    );
};
export default CreateNewFandomHeader;
