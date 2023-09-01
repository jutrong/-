import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import * as S from "./style/LikeBtn.style";
import heart from "../../assets/images/svg/ic-heart.svg";
import fillheart from "../../assets/images/svg/fillheart.svg";
type LikeBtnProps = {
  feedId: number;
};

const LikeBtn: React.FC<LikeBtnProps> = ({ feedId }) => {
  const token = useSelector(({ auth }) => auth.accessToken);
  const [likeCount, setLikeCount] = useState<number>(0);
  const [liked, setLiked] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    fetchLike();
  }, []);
  //TODO: 유저 정보 새로고침 시 다시 받아와야 하는지 체크
  const fetchLike = async () => {
    try {
      const response = await axiosPrivate.get(`/feeds/${feedId}`);
      setLikeCount(response.data.data.likes);
      setLiked(response.data.data.isLike);
    } catch (error) {
      
    }
  };
  const toggleLike = async (feedId: number) => {
    if (token) {
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
    }
  };
  return (
    <S.LikeWrap>
      <S.LikeIcon
        src={liked ? fillheart : heart}
        onClick={() => toggleLike(feedId)}
      ></S.LikeIcon>
      <S.LikeNumber>{likeCount}</S.LikeNumber>
    </S.LikeWrap>
  );
};

export default LikeBtn;
