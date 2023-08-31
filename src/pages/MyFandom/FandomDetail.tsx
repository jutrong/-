import * as S from "./style/FandomDetail.style";

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import axios from "../../api/axios";

/////////// 팬덤 디테일 import ///////////
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import Notice from "../../components/MyFandom/Notice";
import UpdateFandom from "./UpdateFandom";

/////////// 피드 import ///////////
import FeedHeader from "../../components/Feed/FeedHeader";
import FeedText from "../../components/Feed/FeedText";
import ItemBox from "../../components/Feed/Item";
import HashTag from "../../components/Feed/HashTag";
import LikeBtn from "../../components/Feed/LikeBtn";
import CommentBtn from "../../components/Feed/CommentBtn";
import Comment from "../../components/Feed/Comment";
import FeedDelete from "../../components/Feed/FeedDelete";
import AppAlertModal from "../../components/common/AlertModal/AppAlertModal";
/////////// 팬덤 타입 ///////////
type Fandom = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    image: string;
    isAdmin: boolean;
    isSubscribe: boolean;
};
/////////// 팬덤 타입 ///////////
/////////// 피드 타입 ///////////
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
    sonminsuItems: SonminsuItems[];
    image: string;
    tags: string[];
    comments: number;
    groupName: string;
    artistName: string;
};
export type SonminsuItems = {
    id: number;
    originUrl: string;
    title: string;
    price: number;
    imgUrl: string;
    groupName: string;
    artistName: string;
};
type SonminsuItemType = {
    id: number;
    originUrl: string;
    title: string;
    price: number;
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
/////////// 피드 타입 ///////////

const FandomDetail: React.FC = () => {
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const { fandomId } = useParams();

    /////////// 팬덤 디테일 스테이트 ///////////
    const [data, setData] = useState<Fandom>();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isSubscribe, setIsSubscribe] = useState(false);
    const [isEditingModalOpen, setIsEditingModalOpen] = useState(false);
    /////////// 팬덤 디테일 스테이트 ///////////

    /////////// 피드 스테이트 ///////////
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
    /////////// 피드 스테이트 ///////////

    const initDataGet = async () => {
        try {
            const res = await axiosPrivate.get(`fandoms/${fandomId}`);
            setData(res.data.data);
            setIsAdmin(res.data.data.isAdmin);
            setIsSubscribe(res.data.data.isSubscribe);
        } catch (error) {
            console.error("Error", error);
        }
    };
    const handleJoinButtonClick = async () => {
        try {
            const res = await axiosPrivate.put(
                `/fandoms/${fandomId}/subscribe`
            );
            initDataGet();
        } catch (error) {
            console.error("Error", error);
        }
    };

    const renderJoinButton = () => {
        if (!isAdmin && !isSubscribe) {
            return (
                <S.JoimBtn onClick={handleJoinButtonClick}>팬덤 가입</S.JoimBtn>
            );
        } else if (!isAdmin && isSubscribe) {
            return (
                <S.JoimBtn onClick={handleJoinButtonClick}>팬덤 탈퇴</S.JoimBtn>
            );
        } else if (isAdmin) {
            return (
                <S.JoimBtn onClick={handleUpdateButtonClick}>
                    팬덤 편집
                </S.JoimBtn>
            );
        }
    };

    const handleUpdateButtonClick = () => {
        setIsEditingModalOpen(true);
    };

    // const closeEditingModal = () => {
    //     setIsEditingModalOpen(false);
    // };

    ////////////////// 피드 통신 함수//////////////////
    const fetchFeedData = async () => {
        try {
            const response = await axios.get(`/feeds/fandoms/${fandomId}`);
            setFeedData(response.data.data);
            console.log("피드res:", response.data.data);
            console.log("피드아이디찾기res:", response.data.data);
        } catch (error) {
            console.error("Error", error);
        }
    };
    const fetchComments = async (fandomId?: number) => {
        setIsLoadingComments(true);
        try {
            const response = await axios.get(`/comments/${fandomId}`);
            setComments(response.data.data);
            console.log("댓글res:", response.data.data);
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
            console.log("손민수아이템res:", response.data.data);
        } catch (error) {
            console.log("error", error);
        }
    };

    ////////////////// 피드 통신 함수//////////////////

    ////////////////// 피드 함수//////////////////
    const getItemFromResult = (sonIds: number[]): SonminsuItemType[] => {
        return sonminsuItem.filter((item) => sonIds.includes(item.id));
    };

    const showModal = (commentId: number) => {
        setSelectedCommentId(commentId);
        setModalOpen(true);
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
            fetchComments(openComment);
            fetchFeedData();
        } catch (error) {
            console.log("error", error);
        }
    };
    ////////////////// 피드 함수//////////////////

    useEffect(() => {
        initDataGet();
        fetchFeedData();
        fetchComments();
        fetchItem();
    }, []);

    console.log("팬덤아이디파람", fandomId);

    const renderFeedData = () => {
        return feedData?.map((feed) => {
            console.log("피드데이터:", feed);
            console.log("데이터팬덤아이디:", feed.fandom.id);
            if (feed.fandom.id === Number(fandomId)) {
                return (
                    <React.Fragment key={feed.fandom.id}>
                        <FeedHeader
                            feedData={feed}
                            setIsFeedDelete={setIsFeedDelete}
                            setFeedId={setFeedId}
                        />
                        <S.FeedImage
                            src={feed.image}
                            onClick={() => {
                                navigate(`/feed/${feed.id}`);
                            }}
                        />
                        <ItemBox
                            items={getItemFromResult(
                                feed.sonminsuItems.map((item) => item.id)
                            )}
                        />
                        <FeedText feedData={feed} />
                        <HashTag feedData={feed} />
                        <S.BtnWrap>
                            <LikeBtn feedId={feed.id} />
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
                                fetchFeedData={fetchFeedData}
                            />
                        )}
                    </React.Fragment>
                );
            } else {
                return null; // 해당 팬덤 아이디와 일치하지 않으면 null 반환하여 출력하지 않음
            }
        });
    };

    return (
        <>
            <S.Container>
                {isEditingModalOpen && data?.id && (
                    <div className="modal">
                        <div className="modal-content">
                            <UpdateFandom
                                key={data?.id}
                                image={data?.image}
                                fandomName={data.fandomName || ""}
                            />
                        </div>
                    </div>
                )}
                <S.HeaderBox>
                    {/* 수정 */}
                    <HeaderBar BackButton={true} />
                    {/* 가입 전에는 화살표만 */}
                    {/* <HeaderBar BackButton={true} items={} /> 가입후에는 글쓰기 */}
                    {/* <HeaderBar BackButton={true} items={} /> 어드민은 글쓰기 햄버거 */}
                    <S.Img src={data?.image} alt="API Img" />
                    <S.FandomName>{data?.fandomName}</S.FandomName>
                    <S.FandomMember>
                        멤버 {data?.memberLength}
                    </S.FandomMember>{" "}
                    <S.FandomJoinBox>{renderJoinButton()}</S.FandomJoinBox>
                </S.HeaderBox>
                <Notice noticeId={fandomId} />

                {renderFeedData()}

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
                {/* ///////////////////  피드 끝  /////////////////// */}
            </S.Container>
            <FooterNavBar />
        </>
    );
};
export default FandomDetail;
