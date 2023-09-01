import * as S from "./style/SominsooNewsContents.style";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import detailDate from "../../utils/time";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useParams, useNavigate } from "react-router-dom";
import heart from "../../assets/images/svg/ic-heart.svg";
import fillheart from "../../assets/images/svg/fillheart.svg";
import { Item } from "../Feed/style/Item.style";

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

type NewsProps = {
  item: NewsType;
};

const SonminsooNewsContents: React.FC<NewsProps> = ({ item }) => {
  const axiosPrivate = useAxiosPrivate();

  const [likeCount, setLikeCount] = useState<number>(0);
  const [liked, setLiked] = useState(false);

  const toggleLike = async (feedId: number) => {
    setLiked(!liked);
    setLikeCount((prev) => (!liked ? prev + 1 : prev - 1));
    try {
      const response = await axiosPrivate.put(`/feeds/${feedId}/like`);
      setLiked(response.data.isLike);
      setLikeCount(response.data.likes);
    } catch (error) {
      
    } finally {
      fetchLike();
    }
  };
  const fetchLike = async () => {
    try {
      const response = await axiosPrivate.get(`/feeds/${item.id}`);
      setLikeCount(response.data.data.likes);
      setLiked(response.data.data.isLike);
    } catch (error) {
      
    }
  };

  const navigate = useNavigate();
  const handleItemClick = () => {
    navigate(`/feed/${item.id}`);
  };

  useEffect(() => {
    fetchLike();
  });
  //TODO: 유저 정보 새로고침 시 다시 받아와야 하는지 체크
  const clickProfile = () => {
    navigate(`/mypage/${item.author.id}`);
  };

  return (
    <S.SonminsooNewsContentsContainer key={item.id}>
      <S.SonminsooNewsContentsHeader>
        <S.SonminsooNewsProfileImg
          src={item?.author.image}
          onClick={clickProfile}
        />
        <S.SonminsooNewsTextBox>
          <S.SonminsooNewsNickNameText>
            {item.author.nickName}
          </S.SonminsooNewsNickNameText>
          <S.TextBox>
            <S.SonminsooNewsFandomNameText>
              {item.fandom.fandomName}
            </S.SonminsooNewsFandomNameText>
            <S.SonminsooNewsTimeText>
              {item?.createdAt ? detailDate(item?.createdAt) : "시간 정보 없음"}
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
          <S.LikeIconSvg
            src={liked ? fillheart : heart}
            onClick={() => toggleLike(item.id)}
          />
          <S.LikeQuantity>{likeCount}</S.LikeQuantity>
          <S.CommentIconSvg />
          <S.CommentQuantity>{item.comments}</S.CommentQuantity>
        </S.SonminsooNewsArticleIconBox>
      </S.SonminsooNewsArticleBox>
    </S.SonminsooNewsContentsContainer>
  );
};
export default SonminsooNewsContents;
