import React, { useState, useEffect } from "react";
import * as S from "./style/MyFandom.style";
import HomeHeader from "../../components/Home/HomeHeader";
import FandomMenu from "../../components/MyFandom/FandomMenu";
import ContentHeader from "../../components/MyFandom/ContentHeader";
import MyFandomList from "../../components/MyFandom/MyFandomList";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";

type Fandom = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    rank: number;
    image: string;
};

type FandomData = Fandom[];

const MyFandom = () => {
    const axiosPrivate = useAxiosPrivate();
    const [data, setData] = useState<FandomData>([]);

    useEffect(() => {
        initDataGet();
    }, []);

    const initDataGet = async () => {
        try {
            const res = await axiosPrivate.get("/fandoms");
            setData(res.data.data);
        } catch (error) {
            console.error("Error", error);
        }
    };

    return (
        <>
            <S.Container>
                <S.MyFandomHeaderBox>
                    {/* <S.FandomImg /> */}
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
            <FooterNavBar />
        </>
    );
};
export default MyFandom;
