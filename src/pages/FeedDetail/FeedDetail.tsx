import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FeedHeaderBar from "../../components/Feed/FeedHeaderBar";
import FeedHeader from "../../components/Feed/FeedHeader";
import ItemBox from "../../components/Feed/Item";
import HashTag from "../../components/Feed/HashTag";
import LikeBtn from "../../components/Feed/LikeBtn";
import CommentBtn from "../../components/Feed/CommentBtn";
import FeedText from "../../components/Feed/FeedText";
import Comment from "../../components/Feed/Comment";
import FeedDetailHeaderBar from "../../components/Feed/FeedDetailHearder";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import FeedDelete from "../../components/Feed/FeedDelete";
import AppAlertModal from "../../components/common/AlertModal/AppAlertModal";
import axios from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import * as S from "../Feed/style/Feed.style";

export type Data = {
  id: number;
  content: string;
  createdAt: string;
  author: {
    id: number;
    image: string;
    nickName: string;
  };
  fandom: {
    id: number;
    fandomName: string;
  };
  sonminsuItems: SonminsuItem[];
  groupName: string;
  artistName: string;
  image: string;
  tags: string[];
  comments: number;
};

type SonminsuItem = {
  id: number;
  originUrl: string;
  imgUrl: string;
  title: string;
  price: string | number;
  groupName?: string;
  artistName?: string;
};
type SonminsuItemType = {
  id: number;
  originUrl: string;
  title: string;
  price: number | number;
  imgUrl: string;
  groupName: string;
  artistName: string;
  isInBucket: boolean;
  createdAt: string;
};
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

function FeedDetail() {
  const { FeedId } = useParams();
  const [feedItem, setFeedItem] = useState<Data>();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const [openComment, setOpenComment] = useState<number | undefined>();
  const [feedData, setFeedData] = useState<Data[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [isFeedDelete, setIsFeedDelete] = useState<boolean>(false);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [isLoadingComments, setIsLoadingComments] = useState(false);
  const [feedId, setFeedId] = useState<number | undefined>();
  const [sonminsuItem, setSonminsuItem] = useState<SonminsuItemType[]>([]);
  const [selectedCommentId, setSelectedCommentId] = useState<
    number | undefined
  >();

  useEffect(() => {
    fetchFeedDetail();
    fetchItem();
    fetchFeedData();
    console.log(FeedId);
  }, []);
  const fetchFeedDetail = async () => {
    try {
      const response = await axios.get(`/feeds/${FeedId}`);
      setFeedItem(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

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
      setSonminsuItem(response.data.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  const getItemFromResult = (sonIds: number[]): SonminsuItemType[] => {
    return sonminsuItem.filter((item) => sonIds.includes(item.id));
  };
  const toggleComment = (id: number) => {
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
      setComments((prevComments) =>
        prevComments.filter((comment) => comment.id !== id)
      );
    } catch (error) {
      console.log("error", error);
    }
  };
  const showModal = (commentId: number) => {
    setSelectedCommentId(commentId);
    setModalOpen(true);
  };

  return (
    <>
      {feedItem ? (
        <S.FeedContainer>
          <FeedDetailHeaderBar />
          <FeedHeader
            feedData={feedItem}
            setIsFeedDelete={setIsFeedDelete}
            setFeedId={setFeedId}
          />
          <S.FeedImage src={feedItem.image} />
          <ItemBox
            items={getItemFromResult(
              feedItem.sonminsuItems.map((item) => item.id)
            )}
          />
          <FeedText feedData={feedItem} />
          <HashTag feedData={feedItem} />
          <S.BtnWrap>
            <LikeBtn feedId={feedItem.id} />
            <CommentBtn
              commentOpen={() => toggleComment(feedItem.id)}
              commentClicked={openComment === feedItem.id}
              feedData={feedItem}
            />
          </S.BtnWrap>
          {!isLoadingComments && openComment === feedItem?.id && (
            <Comment
              showModal={showModal}
              comments={comments}
              feedId={feedItem.id}
              fetchFeedData={fetchFeedData}
            />
          )}
          <S.Line />
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
      ) : null}
    </>
  );
}

export default FeedDetail;
