import * as S from "./style/FandomDetail.style";
import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import FandomDetailHeader from "../../components/MyFandom/FandomDetailHeader";
import Notice from "../../components/MyFandom/Notice";

import { useParams } from "react-router-dom";

type Fandom = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    image: string;
};

type FandomData = Fandom;

const FandomDetail = () => {
    const { fandomId } = useParams();

    const [data, setData] = useState<Fandom>();

    useEffect(() => {
        initDataGet();
    }, []);

    const initDataGet = async () => {
        try {
            const res = await axios.get("fandoms/4");
            // `fandoms/${fandomId}`
            console.log("get:", res.data.data);
            setData(res.data.data);
        } catch (error) {
            console.error("Error", error);
        }
    };
    console.log("data:", data);

    return (
        <S.Container>
            <S.HeaderBox>
                <FandomDetailHeader />
                <S.Img src={data?.image} alt="API Img" />
                <S.FandomJoinBox>
                    <S.FandomName>{data?.fandomName}</S.FandomName>
                    <S.FandomMember>멤버 {data?.memberLength}</S.FandomMember>
                    <S.JoimBtn>팬덤 가입</S.JoimBtn>
                </S.FandomJoinBox>
            </S.HeaderBox>

            <Notice />
        </S.Container>
    );
};
export default FandomDetail;
