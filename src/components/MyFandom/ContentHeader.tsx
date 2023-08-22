import styled from "styled-components";

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

const CreateBtn = styled.p`
    font-size: 14px;
    margin-right: 15px;
    float: right;
    color: #208df1;
`;

const ContentHeader = () => {
    return (
        <ContentHeaderContainer>
            <MyFandomHeaderText>마이 팬덤</MyFandomHeaderText>
            <CreateBtn>+ 새 팬덤 만들기</CreateBtn>
        </ContentHeaderContainer>
    );
};
export default ContentHeader;
