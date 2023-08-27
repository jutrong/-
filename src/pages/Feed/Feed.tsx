import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import * as S from "./style/Feed.style";
import FeedHeaderBar from "../../components/Feed/FeedHeaderBar";
import FeedHeader from "../../components/Feed/FeedHeader";
import ItemBox from "../../components/Feed/Item";
import HashTag from "../../components/Feed/HashTag";
import LikeBtn from "../../components/Feed/LikeBtn";
import CommentBtn from "../../components/Feed/CommentBtn";
import FeedText from "../../components/Feed/FeedText";
import Comment from "../../components/Feed/Comment";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import CloseModal from "../../components/Feed/CloseModal";
import FeedDelete from "../../components/Feed/FeedDelete";
import AppAlertModal from "../../components/common/AlertModal/AppAlertModal";
import { Feed } from "../../types/feed";

const FeedIndex = () => {
  const [openComment, setOpenComment] = useState<number | undefined>();
  const [feedData, setFeedData] = useState<Feed[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isFeedDelete, setIsFeedDelete] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/feed");
      setFeedData(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const showModal = () => {
    setModalOpen(true);
  };

  const toggleComment = (id: number) => {
    if (openComment === id) {
      setOpenComment(undefined);
    } else {
      setOpenComment(id);
    }
  };
  return (
    <S.FeedContainer>
      <FeedHeaderBar />
      {feedData?.map((feed) => (
        <React.Fragment key={feed.id}>
          <FeedHeader feedData={feed} setIsFeedDelete={setIsFeedDelete} />
          <S.FeedImage src={feed.feedImg} />
          <ItemBox feedData={feed} />
          <FeedText feedData={feed} />
          <HashTag feedData={feed} />
          <S.BtnWrap>
            <LikeBtn />
            <CommentBtn
              commentOpen={() => toggleComment(feed.id)}
              commentClicked={openComment === feed.id}
              feedData={feed}
            />
          </S.BtnWrap>
          {openComment === feed.id && (
            <Comment feedData={feed} showModal={showModal} />
          )}
          <S.Line />
        </React.Fragment>
      ))}
      {openComment === undefined && <FooterNavBar />}
      {modalOpen && (
        <AppAlertModal
          setModalOpen={setModalOpen}
          title={"댓글 삭제"}
          content={"댓글을 삭제하시겠습니까?"}
          yesContent={"삭제"}
          warning={true}
          yesClickHandler={() => {
            alert("삭제요청, 그리고 alert창 끄기");
          }}
        />
      )}
      {isFeedDelete && <FeedDelete setIsFeedDelete={setIsFeedDelete} />}
    </S.FeedContainer>
  );
};

export default FeedIndex;
