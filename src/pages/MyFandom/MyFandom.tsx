import React, { useState, useEffect } from "react";

import * as S from "./style/MyFandom.style";
import axios from "../../api/axios";
import HomeHeader from "../../components/Home/HomeHeader";
import FandomMenu from "../../components/MyFandom/FandomMenu";
import ContentHeader from "../../components/MyFandom/ContentHeader";
import MyFandomList from "../../components/MyFandom/MyFandomList";

type Fandom = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    rank: number;
    thumbnailImgUrl: string;
};

type FandomData = Fandom[];

const MyFandom = () => {
    const [data, setData] = useState<FandomData>([]);

    useEffect(() => {
        initDataGet();
    }, []);

    const initDataGet = async () => {
        try {
            const res = await axios.get("url");
            console.log("get:", res.data.data);
            setData(res.data.data);
        } catch (error) {
            console.error("Error", error);
        }
    };

    return (
        <S.Container>
            <S.MyFandomHeaderBox>
                <HomeHeader />
                <FandomMenu />
            </S.MyFandomHeaderBox>
            <S.MyFandomListBox>
                <ContentHeader />
                {data.map((item) => (
                    <MyFandomList key={item.id} item={item} />
                ))}
            </S.MyFandomListBox>
        </S.Container>
    );
};
export default MyFandom;
