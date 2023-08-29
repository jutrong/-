import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import detailDate from "../../utils/time";

import * as S from "./style/Notice.style";

const Notice = () => {
    type noticeDataType = {
        data: {
            id: 1;
            author: noticeAuthor;
            fandom: noticeFandom;
            content: string;
            createdAt: string;
        };
    };

    type noticeAuthor = {
        id: number;
        nickName: string;
        image: string;
    };

    type noticeFandom = {
        fandomName: string;
    };

    const [data, setData] = useState<noticeDataType | null>(null);

    useEffect(() => {
        initDataGet();
    }, []);

    const initDataGet = async () => {
        try {
            const res = await axios.get("fandom-announcements/5");

            setData(res.data.data);
        } catch (error) {
            console.error("Error", error);
        }
    };

    return (
        <>
            {data && data.data && (
                <S.NoticeContainer key={data.data.id}>
                    <S.NoticeHeaderBox>
                        <S.NoticeHeaderText>공지</S.NoticeHeaderText>
                        <S.ProfileBox>
                            <S.ProfileImg src={data.data.author.image} />
                            <S.ProfileTextBox>
                                <S.NicknameText>
                                    {data.data.author.nickName}
                                </S.NicknameText>
                                <S.FandomNameTimeBox>
                                    <S.NameTimeText>
                                        {data.data.fandom.fandomName}
                                    </S.NameTimeText>
                                    <S.NameTimeText>
                                        {data.data.createdAt
                                            ? detailDate(data.data.createdAt)
                                            : "시간 정보 없음"}
                                    </S.NameTimeText>
                                </S.FandomNameTimeBox>
                            </S.ProfileTextBox>
                            <S.ProfileIcon />
                        </S.ProfileBox>
                    </S.NoticeHeaderBox>

                    <S.NoticeTextBox>
                        <S.NoticeText>{data.data.content}</S.NoticeText>
                    </S.NoticeTextBox>
                </S.NoticeContainer>
            )}
        </>
    );
};
export default Notice;
