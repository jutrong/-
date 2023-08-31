import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import * as S from "./style/HotFandom.style";
import HotFandomCircle from "../../components/HotFandom/HotFandomCircle";

import FandomRanking from "../../components/HotFandom/FandomRanking";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
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

const HotFandom = () => {
    const [data, setData] = useState<FandomData>([]);

    useEffect(() => {
        initDataGet();
    }, []);

    const initDataGet = async () => {
        try {
            const res = await axios.get("fandoms");
            setData(res.data.data);
        } catch (error) {
            console.error("Error", error);
        }
    };

    const firstRank = data[0];
    const restRank = data.slice(1);

    return (
        <>
            <S.Container>
                <S.HotFandomContainer>
                    <S.HeaderBox>
                        <HeaderBar
                            BackButton={true}
                            title={"HOT 타오르는 팬덤"}
                            // color={}
                        />
                        <HotFandomCircle item={firstRank} />
                    </S.HeaderBox>
                    {restRank.map((item) => (
                        <FandomRanking key={item.id} item={item} />
                    ))}
                </S.HotFandomContainer>
            </S.Container>
            <FooterNavBar />
        </>
    );
};
export default HotFandom;
