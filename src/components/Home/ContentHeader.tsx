import styled from "styled-components";
import { ReactComponent as ViewAllBtnIcon } from "../../assets/images/svg/home/viewAllBtnIcon.svg";

// 팬덤 헤더 컨테이너
const ContentHeaderContainer = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    //background-color: #f3f3b7;
`;

// 헤더 마이 팬덤 텍스트
const MyFandomHeaderText = styled.p`
    font-size: 20px;
    margin-left: 16px;
    font-weight: bold;
`;

// ViewAllBtn 임포트
const ViewAllBtn = styled(ViewAllBtnIcon)`
    width: 66px;
    height: 15px;
    margin-right: 15px;
    float: right;
`;

const ContentHeader = () => {
    return (
        <ContentHeaderContainer>
            <MyFandomHeaderText>마이 팬덤</MyFandomHeaderText>
            <ViewAllBtn />
        </ContentHeaderContainer>
    );
};
export default ContentHeader;
