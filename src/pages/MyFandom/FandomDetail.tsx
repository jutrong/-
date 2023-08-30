import * as S from "./style/FandomDetail.style";
import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import HeaderBar from "../../components/common/HeaderBar/HeaderBar";

import FooterNavBar from "../../components/common/FooterNavBar/FooterNavBar";
import Notice from "../../components/MyFandom/Notice";
import { Button } from "../../elements/Button";
import { useParams, useNavigate } from "react-router-dom";

import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import FeedIndex from "../Feed/Feed";
import UpdateFandom from "./UpdateFandom";
import { styled } from "styled-components";

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
                    <HeaderBar BackButton={true} />

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
