import styled from "styled-components";

import MyFandomBoard from "../../components/Home/MyFandomBoard";
import SonminsooNewsBoard from "../../components/Home/SonminsooNewsBoard";
import RecommendItemBoard from "../../components/Home/RecommendItemBoard";
import PopularFandomBoard from "../../components/Home/PopularFandomBoard";

import { ReactComponent as Logo } from "../../assets/images/svg/home/homeLogo.svg";
import { ReactComponent as SettingIcon } from "../../assets/images/svg/home/settingIcon.svg";
// 홈 컨테이너
const Container = styled.div`
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 390px;
`;
// 홈 헤더 박스
const HomeHeader = styled.div`
    height: 50px;
    margin-top: 40px;

    //background-color: beige;
`;

// 홈 헤더 로고
const HomeLogo = styled(Logo)`
    width: 100px;
    height: 18px;
    margin-left: 16px;
`;

// 홈 헤더 설정 아이콘
const HomeSettingIcon = styled(SettingIcon)`
    width: 24px;
    height: 24px;
    margin-right: 16px;
    float: right;
`;

const Home = () => {
    return (
        <Container>
            <HomeHeader>
                <HomeLogo />
                <HomeSettingIcon />
            </HomeHeader>
            <MyFandomBoard />
            <SonminsooNewsBoard />
            <RecommendItemBoard />
            <PopularFandomBoard />
        </Container>
    );
};
export default Home;
