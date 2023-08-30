import React from "react";

import * as S from "./style/Home.style";

import MyFandomBoard from "../../components/Home/MyFandomBoard";
import SonminsooNewsBoard from "../../components/Home/SonminsooNewsBoard";
import RecommendItemBoard from "../../components/Home/RecommendItemBoard";
import PopularFandomBoard from "../../components/Home/PopularFandomBoard";
import HomeHeader from "../../components/Home/HomeHeader";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";

const Home: React.FC = () => {
  return (
    <S.Container>
      <FooterNavBar />
      <S.HomeContainer>
        <S.HomeBgContainer>
          <HomeHeader />
          <MyFandomBoard />
        </S.HomeBgContainer>
        <S.HomeBgFlowerContainer>
          <SonminsooNewsBoard />
          <RecommendItemBoard />
          <PopularFandomBoard />
        </S.HomeBgFlowerContainer>
      </S.HomeContainer>
    </S.Container>
  );
};
export default Home;
