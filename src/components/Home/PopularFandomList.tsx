import * as S from "./style/PopularFandomList.style";
import axios from "../../api/axios";

import React, { useState, useEffect } from "react";

type Fandom = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    rank: number;
    image: string;
};

type FandomData = Fandom[];

const PopularFandomList: React.FC = () => {
    const [data, setData] = useState<FandomData>([]);

    useEffect(() => {
        initDataGet();
    }, []);

    const initDataGet = async () => {
        try {
            const res = await axios.get("fandoms/hot");

            setData(res.data.data);
            //  console.log("get:", res.data.data);
        } catch (error) {
            console.error("Error", error);
        }
    };

    const firstRank = data[0] || {};
    const restRank = data.slice(1);

    return (
        <S.PopularFandomListContainer>
            <S.PopularFandomImg>
                <S.Img src={firstRank?.image} />
                <S.NumberOneBox>
                    <S.NumberOneText>1</S.NumberOneText>
                    <S.NumberOneFandomNameText>
                        {firstRank.fandomName}
                    </S.NumberOneFandomNameText>
                </S.NumberOneBox>
            </S.PopularFandomImg>

            {restRank.map((item) => (
                <S.NextNumberFandomBox key={item.id}>
                    <S.RankingText>{item.rank}</S.RankingText>
                    <S.FandomNameText>{item?.fandomName}</S.FandomNameText>
                </S.NextNumberFandomBox>
            ))}
        </S.PopularFandomListContainer>
    );
};
export default PopularFandomList;
