import * as S from "./style/SominsooNewsContents.style";

import React, { useState } from "react";
import detailDate from "../../utils/time";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";

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
    comments: number;
};

type NewsProps = {
    item: NewsType;
};

const SonminsooNewsContents: React.FC<NewsProps> = ({ item }) => {
    const axiosPrivate = useAxiosPrivate();
    // let { feedId } = useParams();
    const [like, setLike] = useState(false);

    const handleLikeClick = () => {
        setLike(!like);
        console.log("like state : ", like);

        likePut();
    };

    // 하트 클릭하면 바로 통신해서 좋아요 수 수정
    const likePut = async () => {
        try {
            const res = await axiosPrivate.put(`/feeds/${item.id}/like`);
            console.log(res);
        } catch (error) {
            console.error("Error", error);
        }
    };

    return (
        <S.SonminsooNewsContentsContainer>
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
                    <S.SonminsooNewsArticleViewAllBtn>
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
                    <S.LikeQuantity>23 확인필요함</S.LikeQuantity>
                    <S.CommentIconSvg />
                    <S.CommentQuantity>{item.comments}</S.CommentQuantity>
                </S.SonminsooNewsArticleIconBox>
            </S.SonminsooNewsArticleBox>
        </S.SonminsooNewsContentsContainer>
    );
};
export default SonminsooNewsContents;
