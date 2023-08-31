import * as S from "./style/SonminsooNewsBoard.style";
import React, { useState, useEffect } from "react";
import ContentHeader from "./ContentHeader";
import SonminsooNewsContents from "./SonminsooNewsContents";
import axios from "../../api/axios";

type NewsType = {
    id: number;
    content: string;
    createdAt: string;
    author: {
        id: number;
        image: string;
        nickName: string;
    };
    fandom: {
        id: 5;
        fandomName: string;
    };
    sonminsuItems: [];
    image: string;
    tags: [];
    likes: number;
    isLike: boolean;
    comments: number;
};

type NewsTypeData = NewsType[];

const SonminsooNewsBoard: React.FC = () => {
    const [data, setData] = useState<NewsTypeData>([]);

    useEffect(() => {
        initDataGet();
    }, []);

    const initDataGet = async () => {
        try {
            const res = await axios.get("/feeds");

            setData(res.data.data);
        } catch (error) {
            console.error("Error", error);
        }
    };
    return (
        <>
            <S.SonminsooNewsBoardContainer>
                <ContentHeader nav={"/feed"} name={"📰 손민수 NEWS"} />
                <S.SonminsooNewsListBox>
                    {data.map((item) => (
                        <SonminsooNewsContents key={item.id} item={item} />
                    ))}
                </S.SonminsooNewsListBox>
            </S.SonminsooNewsBoardContainer>
        </>
    );
};
export default SonminsooNewsBoard;
