import styled from "styled-components";
import { ReactComponent as LeftArrow } from "../../assets/images/svg/hotFandom/hotPandomarrowLeftIcon.svg";

// 팬덤 헤더 컨테이너
const ContentHeaderContainer = styled.div`
    height: 50px;
    display: flex;
    display: flex;
    align-items: center;
    //background-color: #f3f3b7;
`;

// 헤더 마이 팬덤 텍스트
const MyPandomHeaderText = styled.p`
    font-size: 20px;
    margin-left: 10px;

    font-weight: 700;
    color: white;
`;

// ViewAllBtn 임포트
const ArrowBtn = styled(LeftArrow)`
    width: 24px;
    height: 24px;
    margin-left: 16px;
`;

const HotFandomHeader = () => {
    return (
        <ContentHeaderContainer>
            <ArrowBtn />
            <MyPandomHeaderText>HOT 타오르는 팬덤</MyPandomHeaderText>
        </ContentHeaderContainer>
    );
};
export default HotFandomHeader;
