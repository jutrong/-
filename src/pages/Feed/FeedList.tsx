import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./style";
import FeedHeader from "../../components/Feed/FeedHeader";
import ItemBox from "../../components/Feed/Item";
import HashTag from "../../components/Feed/HashTag";
import LikeBtn from "../../components/Feed/LikeBtn";
import CommentBtn from "../../components/Feed/CommentBtn";
import FeedText from "../../components/Feed/FeedText";
import Comment from "../../components/Feed/Comment";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import CloseModal from "../../components/Feed/CloseModal";

//  data type
type Feed = {
  id: number;
  user: User;
  feedImg: string;
  content: string;
  hashTag: string[];
  created_at: string;
  sonminsuItems: SonminsuItem[];
  comments: CommentType[];
};

type User = {
  id: number;
  user_id: number;
  profileImg: string;
  user_name: string;
  fandom_name: string;
};

type SonminsuItem = {
  id: number;
  itemImg: string;
  title: string;
  price: number;
  url: string;
};
type CommentType = {
  id: number;
  feed_id: number;
  user_id: number;
  profileImg: string;
  user_name: string;
  content: string;
  created_at: string;
};
type FeedData = Feed[];

const FeedList: React.FC = () => {
  const [openCommentId, setOpenCommentId] = useState<number | undefined>();
  const [feedData, setFeedData] = useState<FeedData>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/feed");
      console.log(response);
      setFeedData(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const showModal = () => {
    setModalOpen(true);
  };

  const toggleComment = (id: number) => {
    if (openCommentId === id) {
      setOpenCommentId(undefined);
    } else {
      setOpenCommentId(id);
    }
  };
  return (
    <>
      {feedData?.map((feed) => (
        <React.Fragment key={feed.id}>
          <FeedHeader feedData={feed} />
          <S.FeedImage src={feed.feedImg} />
          <ItemBox feedData={feed} />
          <FeedText feedData={feed} />
          <HashTag feedData={feed} />
          <S.BtnWrap>
            <LikeBtn />
            <CommentBtn
              commentOpen={() => toggleComment(feed.id)}
              commentClicked={openCommentId === feed.id}
              feedData={feed}
            />
          </S.BtnWrap>
          {openCommentId === feed.id && (
            <Comment feedData={feed} showModal={showModal} />
          )}
          <S.Line />
        </React.Fragment>
      ))}
      {openCommentId === undefined && <FooterNavBar />}
      {modalOpen && <CloseModal setModalOpen={setModalOpen} />}
    </>
  );
};
export default FeedList;
