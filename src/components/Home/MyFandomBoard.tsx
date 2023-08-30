import * as S from "./style/MyFandomBoard.style";
import React, { useState, useEffect } from "react";
import ContentHeader from "./ContentHeader";
import FandomCircle from "./FandomCircle";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

type Fandom = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    rank: number;
    image: string;
};

type FandomData = Fandom[];
const MyFandomBoard: React.FC = () => {
    const axiosPrivate = useAxiosPrivate();

    const [data, setData] = useState<FandomData>([]);

    useEffect(() => {
        initDataGet();
    }, []);

    const initDataGet = async () => {
        try {
            const res = await axiosPrivate.get("/fandoms");

            setData(res.data.data);
            // console.log("get:", res.data.data);
        } catch (error) {
            console.error("Error", error);
        }
    };

    return (
        <S.MyFandomBoardContainer>
            <ContentHeader nav={"/myfandom"} name={"마이팬덤"} />
            <S.FandomCircleListBox>
                {data.map((item) => (
                    <FandomCircle key={item.id} item={item} />
                ))}
            </S.FandomCircleListBox>
        </S.MyFandomBoardContainer>
    );
};
export default MyFandomBoard;
