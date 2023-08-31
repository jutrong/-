import * as S from "./style/FandomDetail.style";
import React, { useState, useEffect } from "react";
import Edit from "./../../assets/images/svg/ic-edit.svg";

import HeaderBar from "../../components/common/HeaderBar/HeaderBar";
import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import Notice from "../../components/MyFandom/Notice";
import FandomDetailHeader from "../../components/MyFandom/FandomDetailHeader";
import { useParams, useNavigate } from "react-router-dom";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";

import UpdateFandom from "./UpdateFandom";

type Fandom = {
    fandomName: string;
    id: number;
    lastChatTime: null;
    memberLength: number;
    image: string;
    isAdmin: boolean;
    isSubscribe: boolean;
};

const FandomDetail: React.FC = () => {
    const axiosPrivate = useAxiosPrivate();

    const { fandomId } = useParams();

    const [data, setData] = useState<Fandom>();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isSubscribe, setIsSubscribe] = useState(false);
    const [isEditingModalOpen, setIsEditingModalOpen] = useState(false);

    useEffect(() => {
        initDataGet();
    }, []);

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
                <S.JoimBtn onClick={handleJoinButtonClick}>
                    팬덤 가입함
                </S.JoimBtn>
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

    const closeEditingModal = () => {
        setIsEditingModalOpen(false);
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
                    <S.FandomJoinBox>
                        <S.FandomName>{data?.fandomName}</S.FandomName>
                        <S.FandomMember>
                            멤버 {data?.memberLength}
                        </S.FandomMember>
                        {renderJoinButton()}
                    </S.FandomJoinBox>
                </S.HeaderBox>
                <Notice noticeId={fandomId} />
            </S.Container>
            <FooterNavBar />
        </>
    );
};
export default FandomDetail;
