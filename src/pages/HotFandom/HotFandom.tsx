import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import * as S from "./style/HotFandom.style";
import HotFandomCircle from "../../components/HotFandom/HotFandomCircle";
import HotFandomHeader from "../../components/HotFandom/HotFandomHeader";
import FandomRanking from "../../components/HotFandom/FandomRanking";

type Fandom = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    rank: number;
    thumbnailImgUrl: string;
};

type FandomData = Fandom[];

const HotFandom = () => {
    const [data, setData] = useState<FandomData>([]);

    useEffect(() => {
        initDataGet();
    }, []);

    const initDataGet = async () => {
        try {
            const res = await axios.get(
                "http://146.56.143.108/api/v1/fandoms/hot"
            );
            console.log("get:", res.data.data);
            setData(res.data.data);
        } catch (error) {
            console.error("Error", error);
        }
    };

    const firstRank = data[0];
    const restRank = data.slice(1);

    return (
        <S.Container>
            <S.HotFandomContainer>
                <S.HeaderBox>
                    <HotFandomHeader />

                    <HotFandomCircle item={firstRank} />
                </S.HeaderBox>
                {restRank.map((item) => (
                    <FandomRanking key={item.id} item={item} />
                ))}
            </S.HotFandomContainer>
        </S.Container>
    );
};
export default HotFandom;
