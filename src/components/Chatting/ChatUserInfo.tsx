import React, { useContext, useEffect, useState } from 'react';
import * as S from './style/ChatUserInfo.style';
import { MemberType, UserInfoType } from '../../types/chattingType';
import { useLocation, useNavigate } from 'react-router';
import { SocketContext } from '../../App';
import { Socket } from 'socket.io-client';
import { isBrowser } from 'react-device-detect';
import AppAlertModal from '../common/AlertModal/AppAlertModal';
import WebAlertModal from '../common/AlertModal/WebAlertModal';
    


const ChatUserInfo = ({id, isAdmin, nickName, image, isJail}:MemberType) => {

    const socket = useContext<Socket | undefined>(SocketContext);
    const admin = "관리자";
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const roomId = Number(pathname.split("/chatting/chatmember/")[1]);
    const [myInfo, setMyInfo] = useState<UserInfoType | undefined>(undefined);
    const [onAlert, setOnAlert] = useState<boolean>(false);

    const userBanHandler = () => {
        if (socket) {
            socket.emit("jail", {room: roomId, userId: id});
            setOnAlert(false);
        }
    }

    useEffect(() => {
        if(socket) {
            const getMyInfo = (v: React.SetStateAction<UserInfoType | undefined>) => setMyInfo(v);

            socket.emit("myInfo", roomId);
            socket.on("myInfo", getMyInfo);
  
            return () => {
                socket.emit("myInfo", roomId);
                socket.off("myInfo", getMyInfo);
            }
        }
    }, [socket])
    

    return (
        <S.UserInfoWrapper>
            <S.UserWrapper>
                <S.UserImage 
                    src={image} 
                    onClick={() => navigate(`/mypage/${id}`)}
                />
                <S.UserName onClick={() => navigate(`/mypage/${id}`)}>{nickName}</S.UserName>
            </S.UserWrapper>
            {   // 정지상태 표시
                myInfo?.isAdmin &&
                    id !== myInfo.userId &&
                        <S.BanButton $ban={isJail} onClick={() => setOnAlert(true)}>{isJail ? '채팅정지 취소' : '채팅정지'}</S.BanButton>
                        
            }
            {   // 관리자 표시
                isAdmin && <S.AdminButton>{admin}</S.AdminButton>
            }
            {
                onAlert ? 
                    isBrowser ?
                    <WebAlertModal
                        setModalOpen={setOnAlert}
                        title={isJail ? "채팅정지 취소" : "채팅정지"}
                        content={isJail ? `${nickName}님의 채팅정지를 취소하시겠습니까?` : `${nickName}님의 채팅을 정지하시겠습니까?`}
                        warning={true}
                        yesContent={isJail ? "정지 취소" : "정지"}
                        yesClickHandler={userBanHandler}
                    />
                    :
                    <AppAlertModal 
                        setModalOpen={setOnAlert}
                        title={isJail ? "채팅정지 취소" : "채팅정지"}
                        content={isJail ? `${nickName}님의 채팅정지를 취소하시겠습니까?` : `${nickName}님의 채팅을 정지하시겠습니까?`}
                        warning={true}
                        yesContent={isJail ? "정지 취소" : "정지"}
                        yesClickHandler={userBanHandler}
                    />
                    : null
            }
        </S.UserInfoWrapper>
    )
}


export default ChatUserInfo;