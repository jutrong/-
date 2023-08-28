import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import detailDate from "../../utils/time";

import * as S from "./style/Notice.style";
const Notice = () => {
    type noticeType = {
        author: noticeAuthor;
        content: string;
        createdAt: string;
        id: number;
    };

    type noticeAuthor = {
        id: number;
        nickName: string;
        image: string;
    };

    const [data, setData] = useState<noticeType>();
    const [author, setAuthor] = useState<noticeAuthor>();

    console.log("작성사:", author);
    useEffect(() => {
        initDataGet();
    }, []);

    const initDataGet = async () => {
        try {
            const res = await axios.get("fandom-announcements/4");
            console.log("공지get:", res.data.data);
            setData(res.data.data);
            setAuthor(res.data.data.author);
        } catch (error) {
            console.error("Error", error);
        }
    };

    return (
        <S.NoticeContainer>
            <S.NoticeHeaderBox key={author?.id}>
                <S.NoticeHeaderText>공지</S.NoticeHeaderText>
                <S.ProfileBox>
                    <S.ProfileImg src={author?.image} />
                    <S.ProfileTextBox>
                        <S.NicknameText>{author?.nickName}</S.NicknameText>
                        <S.FandomNameTimeBox>
                            <S.NameTimeText>팬덤 이름</S.NameTimeText>
                            <S.NameTimeText>
                                {data?.createdAt
                                    ? detailDate(data?.createdAt)
                                    : "시간 정보 없음"}
                            </S.NameTimeText>
                        </S.FandomNameTimeBox>
                    </S.ProfileTextBox>
                    <S.ProfileIcon />
                </S.ProfileBox>
            </S.NoticeHeaderBox>

            <S.NoticeTextBox>
                <S.NoticeText>{data?.content}</S.NoticeText>
            </S.NoticeTextBox>
        </S.NoticeContainer>
    );
};
export default Notice;
