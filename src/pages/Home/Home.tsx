import React, { useState, useEffect, createContext } from "react";

import * as S from "./style/Home.style";
import axios from "../../api/axios";

import MyFandomBoard from "../../components/Home/MyFandomBoard";
import SonminsooNewsBoard from "../../components/Home/SonminsooNewsBoard";
import RecommendItemBoard from "../../components/Home/RecommendItemBoard";
import PopularFandomBoard from "../../components/Home/PopularFandomBoard";
import HomeHeader from "../../components/Home/HomeHeader";

import { HomeDataType, HomeContextProviderProps } from "../../types/homeType";

///// 임시 초기 데이터 //////
let initData: HomeDataType = {
    myFandomData: {
        fandomImg: "이미지 주소",
        fandomName: "팬덤 이름이올시다",
    },
    sonminnsooNewsData: {
        profileImg: "프로필 사진",
        nickname: "닉네임",
        fandomName: "팬덤이름",
        createTime: "게시시간",
        postImg: "게시 이미지",
        postText: "게시글",
        hashtag: "해쉬태그",
        likeQuantity: 1,
        commentQuantity: 1,
    },
    sonminsooItemData: {
        productImg: "제품사진",
        artistName: "아티스트 이름",
        productName: "제품 이름",
        price: 1,
        bookmark: true,
    },
    hotFandomData: {
        ranking: 1,
        numberOneFandomImg: "1위 팬덤 이미지",
        fandomName: "팬덤이름",
    },
};

export const HomeContext = createContext<HomeDataType | null>(null);
export const HomeContextProvider = ({ children }: HomeContextProviderProps) => {
    return (
        <HomeContext.Provider value={initData}>{children}</HomeContext.Provider>
    );
};

const Home: React.FC = () => {
    // 전체 데이터 겟
    const [data, setData] = useState<HomeDataType | null>(initData);

    // Home data get Effect
    useEffect(() => {
        initDataGet();
    }, []);

    const initDataGet = async () => {
        try {
            const res = await axios.get("url");
            setData(null);
        } catch (error) {
            console.error("Error", error);
        }
    };

    return (
        <HomeContextProvider>
            <S.Container>
                <S.HomeContainer>
                    <HomeHeader />
                    <MyFandomBoard />
                    <SonminsooNewsBoard />
                    <RecommendItemBoard />
                    <PopularFandomBoard />
                </S.HomeContainer>
            </S.Container>
        </HomeContextProvider>
    );
};
export default Home;
