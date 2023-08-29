import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
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
import { Data } from "../../types/feed";

type CommentType = {
  id: number;
  feedId: number;
  createdAt: string;
  content: string;
  parent: number;
  author: {
    id: number;
    image: string;
    nickName: string;
  };
  replies?: {};
};

const FeedIndex = () => {
  const [openComment, setOpenComment] = useState<number | undefined>();
  const [feedData, setFeedData] = useState<Data[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isFeedDelete, setIsFeedDelete] = useState<boolean>(false);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [feedId, setFeedId] = useState<number | undefined>();
  const [sonminsuItem, setSonminsuItem] = useState([]);
  const [selectedCommentId, setSelectedCommentId] = useState<
    number | undefined
  >();

  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    fetchFeedData();
    fetchItem();
  }, []);

  const fetchFeedData = async () => {
    try {
      const response = await axios.get("/feeds");
      setFeedData(response.data.data);
    } catch (error) {
      console.error("Error", error);
    }
  };
  const fetchComments = async (id?: number) => {
    setIsLoadingComments(true);
    try {
      const response = await axios.get(`/comments/${id}`);
      setComments(response.data.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoadingComments(false);
    }
  };
  const fetchItem = async () => {
    try {
      const response = await axiosPrivate.get(`/sonminsu-items`);
      setSonminsuItem(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const toggleComment = (id: number) => {
    console.log(feedData[0].sonminsuItems);
    if (openComment === id) {
      setOpenComment(undefined);
    } else {
      setOpenComment(id);
      fetchComments(id);
    }
  };
  const handleDelete = async (id: number) => {
    try {
      await axiosPrivate.delete(`/comments/${id}`);
    } catch (error) {
      console.log("error", error);
      alert("댓글 삭제 못함");
    }
  };
  const showModal = (commentId: number) => {
    setSelectedCommentId(commentId);
    setModalOpen(true);
  };

  return (
    <S.FeedContainer>
      <FeedHeaderBar />
      {feedData?.map((feed) => (
        <React.Fragment key={feed.id}>
          <FeedHeader
            feedData={feed}
            setIsFeedDelete={setIsFeedDelete}
            setFeedId={setFeedId}
          />
          <S.FeedImage src={feed.image} />
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
          {!isLoadingComments && openComment === feed.id && (
            <Comment
              showModal={showModal}
              comments={comments}
              feedId={feed.id}
            />
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
            if (selectedCommentId) {
              handleDelete(selectedCommentId);
              setSelectedCommentId(undefined);
              setModalOpen(false);
            }
          }}
        />
      )}
      {isFeedDelete && (
        <FeedDelete
          setIsFeedDelete={setIsFeedDelete}
          feedId={feedId}
          onFeedDeleted={fetchFeedData}
        />
      )}
    </S.FeedContainer>
  );
};

export default FeedIndex;
