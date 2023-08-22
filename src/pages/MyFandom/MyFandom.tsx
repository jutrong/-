import styled from "styled-components";

import HomeHeader from "../../components/Home/HomeHeader";
import FandomMenu from "../../components/MyFandom/FandomMenu";
import ContentHeader from "../../components/MyFandom/ContentHeader";
import MyFandomList from "../../components/MyFandom/MyFandomList";

//  팬덤 컨테이너
const Container = styled.div`
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 390px;
`;

// 핫 팬덤 헤더박스
const MyFandomHeaderBox = styled.div`
    height: 280px;
    background-color: #d5f033;
`;

// 마이팬덤 리스트 박스
const MyFandomListBox = styled.div`
    width: 100%;
    max-width: 390px;
`;

const MyFandom = () => {
    return (
        <Container>
            <MyFandomHeaderBox>
                <HomeHeader />
                <FandomMenu />
            </MyFandomHeaderBox>
            <MyFandomListBox>
                <ContentHeader />

                <MyFandomList />
                <MyFandomList />
                <MyFandomList />
                <MyFandomList />
            </MyFandomListBox>
        </Container>
    );
};
export default MyFandom;
