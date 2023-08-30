import * as S from "./style/SominsooNewsContents.style";

import React, { useState, useEffect } from "react";
import detailDate from "../../utils/time";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useParams, useNavigate } from "react-router-dom";
import constructWithOptions from "styled-components/dist/constructors/constructWithOptions";
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
    // likes:number
    // isLike:boolean
    comments: number;
};
type NewsTypeData = NewsType[];

type NewsProps = {
    item: NewsType;
};

const SonminsooNewsContents: React.FC<NewsProps> = ({ item }) => {
    const axiosPrivate = useAxiosPrivate();
    let { feedId } = useParams();
    const [isLike, setIsLike] = useState(false);
    const [likes, setLikes] = useState();

    const handleLikeClick = () => {
        setIsLike(!isLike);
        console.log("like state : ", isLike);

        likePut();
    };

    useEffect(() => {
        initDataGet();
    }, [isLike]);

    const initDataGet = async () => {
        try {
            const res = await axiosPrivate.get(`/feeds/${item.id}`);

            setLikes(res.data.data.likes);
        } catch (error) {
            console.error("Error", error);
        }
    };

    // 하트 클릭하면 바로 통신해서 좋아요 수 수정
    const likePut = async () => {
        try {
            const res = await axiosPrivate.put(`/feeds/${item.id}/like`);
        } catch (error) {
            console.error("Error", error);
        }
    };
    const navigate = useNavigate();
    const handleItemClick = () => {
        navigate(`/feed/${item.id}`);
    };
    return (
        <S.SonminsooNewsContentsContainer key={item.id}>
            <S.SonminsooNewsContentsHeader>
                <S.SonminsooNewsProfileImg src={item?.author.image} />
                <S.SonminsooNewsTextBox>
                    <S.SonminsooNewsNickNameText>
                        {item.author.nickName}
                    </S.SonminsooNewsNickNameText>
                    <S.TextBox>
                        <S.SonminsooNewsFandomNameText>
                            {item.fandom.fandomName}
                        </S.SonminsooNewsFandomNameText>
                        <S.SonminsooNewsTimeText>
                            {item?.createdAt
                                ? detailDate(item?.createdAt)
                                : "시간 정보 없음"}
                        </S.SonminsooNewsTimeText>
                    </S.TextBox>
                </S.SonminsooNewsTextBox>
            </S.SonminsooNewsContentsHeader>
            <S.SonminsooNewsImg src={item?.image} />
            <S.SonminsooNewsArticleBox>
                <S.SonminsooNewsArticleTextBox>
                    <S.SonminsooNewsArticleText>
                        {item.content}
                    </S.SonminsooNewsArticleText>
                    <S.SonminsooNewsArticleViewAllBtn onClick={handleItemClick}>
                        더보기
                    </S.SonminsooNewsArticleViewAllBtn>
                </S.SonminsooNewsArticleTextBox>

                <S.SonminsooNewsArticleHashtagBox>
                    <S.SonminsooNewsArticleHashtagText>
                        {item.tags}
                    </S.SonminsooNewsArticleHashtagText>
                </S.SonminsooNewsArticleHashtagBox>
                <S.SonminsooNewsArticleIconBox>
                    <S.LikeIconSvg onClick={handleLikeClick} />
                    <S.LikeQuantity>{likes}</S.LikeQuantity>
                    <S.CommentIconSvg />
                    <S.CommentQuantity>{item.comments}</S.CommentQuantity>
                </S.SonminsooNewsArticleIconBox>
            </S.SonminsooNewsArticleBox>
        </S.SonminsooNewsContentsContainer>
    );
};
export default SonminsooNewsContents;
