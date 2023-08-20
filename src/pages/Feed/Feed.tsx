import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import FeedHeader from "./FeedHeader";
import ItemBox from "./Item";
import HashTag from "./HashTag";
import LikeBtn from "./LikeBtn";
import CommentBtn from "./CommentBtn";
import FeedText from "./FeedText";
import Comment from "./Comment";

const FeedImage = styled.div<FeedImgProps>`
  width: 100%;
  height: 390px;
  cursor: pointer;
  background-image: url(${(props) => props.feedUrl});
  background-repaet: no-repeat;
  background-size: cover;
  background-position: center;
`;

const BtnWrap = styled.div`
  display: flex;
  margin-top: 31px;
`;
const Line = styled.div`
  background-color: #e2e2e2;
  width: 100%;
  height: 6px;
  margin-top: 22px;
  margin-bottom: 19px;
`;
type FeedData = {
  id: number;
  user_name: string;
  fandom_name: string;
  profileImage: string;
  feedImgSrc: string;
  content: string;
  hashtag: string[];
};
type FeedImgProps = {
  feedUrl: string;
};
const Feed: React.FC = () => {
  const [openCommentId, setCommentId] = useState<number>();
  const [feedData, setFeedData] = useState<FeedData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/feed");
      setFeedData(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };
  const toggleComment = (id: number) => {
    if (openCommentId === id) {
      setCommentId(undefined);
    } else {
      setCommentId(id);
    }
  };

  return (
    <>
      {feedData.map((feed) => (
        <React.Fragment key={feed.id}>
          <FeedHeader feedData={feed} />
          <FeedImage feedUrl={feed.feedImgSrc} />
          <ItemBox />
          <FeedText feedData={feed} />
          <HashTag feedData={feed} />
          <BtnWrap>
            <LikeBtn />
            <CommentBtn
              commentOpen={() => toggleComment(feed.id)}
              commentClicked={openCommentId === feed.id}
            />
          </BtnWrap>
          {openCommentId === feed.id && <Comment />}
          <Line />
        </React.Fragment>
      ))}
    </>
  );
};

export default Feed;
