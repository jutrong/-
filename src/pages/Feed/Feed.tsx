import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import FeedHeader from "../../components/Feed/FeedHeader";
import ItemBox from "../../components/Feed/Item";
import HashTag from "../../components/Feed/HashTag";
import LikeBtn from "../../components/Feed/LikeBtn";
import CommentBtn from "../../components/Feed/CommentBtn";
import FeedText from "../../components/Feed/FeedText";
import Comment from "../../components/Feed/Comment";
import FooterNavBar from "../../components/FooterNavBar";
import CloseModal from "../../components/Feed/CloseModal";

const FeedImage = styled.div<FeedImgProps>`
  width: 100%;
  height: 390px;
  cursor: pointer;
  background-image: url(${(props) => props.$feedUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const BtnWrap = styled.div`
  display: flex;
  margin-top: 31px;
  margin-bottom: 16px;
`;
const Line = styled.div`
  background-color: #e2e2e2;
  width: 100%;
  height: 6px;
`;

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

type FeedImgProps = {
  $feedUrl: string;
};
const Feed: React.FC = () => {
  const [openCommentId, setOpenCommentId] = useState<number | undefined>();
  const [feedData, setFeedData] = useState<FeedData>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const showModal = () => {
    setModalOpen(true);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/feed");
      setFeedData(response.data);
    } catch (error) {
      console.error("Error", error);
    }
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
          <FeedImage $feedUrl={feed.feedImg} />
          <ItemBox feedData={feed} />
          <FeedText feedData={feed} />
          <HashTag feedData={feed} />
          <BtnWrap>
            <LikeBtn />
            <CommentBtn
              commentOpen={() => toggleComment(feed.id)}
              commentClicked={openCommentId === feed.id}
              feedData={feed}
            />
          </BtnWrap>
          {openCommentId === feed.id && (
            <Comment feedData={feed} showModal={showModal} />
          )}
          <Line />
        </React.Fragment>
      ))}
      {openCommentId === undefined && <FooterNavBar />}
      {modalOpen && <CloseModal setModalOpen={setModalOpen} />}
    </>
  );
};
export default Feed;
