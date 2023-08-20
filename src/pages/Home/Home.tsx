import styled from "styled-components";

import MyFandomBoard from "../../components/Home/MyFandomBoard";
import SonminsooNewsBoard from "../../components/Home/SonminsooNewsBoard";
import RecommendItemBoard from "../../components/Home/RecommendItemBoard";
import PopularFandomBoard from "../../components/Home/PopularFandomBoard";
import HomeHeader from "../../components/Home/HomeHeader";

// 홈 컨테이너
const Container = styled.div`
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 390px;
`;

const Home = () => {
    return (
        <Container>
            <HomeHeader />

            <MyFandomBoard />
            <SonminsooNewsBoard />
            <RecommendItemBoard />
            <PopularFandomBoard />
        </Container>
    );
};
export default Home;
