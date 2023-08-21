import styled from "styled-components";

import FandomDetailHeader from "../../components/MyFandom/FandomDetailHeader";
import Notice from "../../components/MyFandom/Notice";

// 홈 컨테이너
const Container = styled.div`
    width: 100%;
    max-width: 390px;
    min-height: 844px;
    height: 100%;
    background-color: #f5f5f5;
`;

//헤더박스

const HeaderBox = styled.div`
    height: 368px;
    background-color: white;
`;

//이미지
const Img = styled.div`
    height: 182px;
    background-color: black;
`;

const FandomJoinBox = styled.div`
    margin-left: 16px;
`;

// 팬덤이름
const FandomName = styled.div`
    color: #1d1b20;
    margin-top: 16px;
    font-size: 20px;

    font-weight: 700;
`;
//팬덤이름 멤버수
const FandomMember = styled.div`
    color: #1d1b20;
    margin-top: 8px;
    font-size: 14px;

    font-weight: 500;
`;

// 팬덤 가입 버튼
const JoimBtn = styled.button`
    width: 358px;
    height: 44px;
    color: white;
    background-color: #208df1;
    border-radius: 8px;
    border: none;
    margin-top: 18px;
    font-size: 15px;

    font-weight: 700;
`;
// 공지사항 임포트

const FandomDetail = () => {
    return (
        <Container>
            <HeaderBox>
                <FandomDetailHeader />
                <Img />
                <FandomJoinBox>
                    <FandomName>A.R.M.Y</FandomName>
                    <FandomMember>멤버 22</FandomMember>
                    <JoimBtn>팬덤 가입</JoimBtn>
                </FandomJoinBox>
            </HeaderBox>

            <Notice />
        </Container>
    );
};
export default FandomDetail;
