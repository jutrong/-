import React from 'react';
import { ChatProps, MyChat, OtherChat } from '../../components/Chatting/ChatBubble';
import BackButton from '../../components/Chatting/BackButton';
import ChatBar from '../../components/Chatting/ChatBar';
import iconMember from '../../assets/images/svg/ic-member.svg';
import ChatGridImage from '../../components/Chatting/ChatGridImage';
import * as S from './styles/ChatRoom.style';



const ChatRoom = () => {

    const chatData: ChatProps = {
        id: 123,
        fandomId: 12345,
        author: "아마추어 손민수",
        content: "ㅎ헷 이게 제 삶의 낙인걸요.. 큐큐 ㅋㅋㅋ",
        readCount: 22,
        createAt: new Date(),
    }

    const chatDataOther: ChatProps = {
        id: 345,
        fandomId: 12345,
        author: "아마추어 손민수",
        content: "와아 ㅜㅜ 저도 이거 봤어요!! 꾹이가 리허설 할 때, 입은 연습복 정보도 감사합니당!! ㅎㅎ",
        profileImage: '',
        readCount: 22,
        createAt: new Date(),
    }

    const ban: boolean = false;

    return (
            <>
                <S.ChatHeader>
                    <BackButton />
                    <S.ChatTitle>A.R.M.Y</S.ChatTitle>
                    <S.LinkItem to="/chatting/chatmember/1">
                        <S.IconButton src={iconMember} />
                    </S.LinkItem>
                </S.ChatHeader>
                <S.ChatRoomWindow>
                    <OtherChat 
                         id={chatDataOther.id}
                         fandomId={chatDataOther.fandomId}
                         author={chatDataOther.author}
                         content={chatDataOther.content}
                         profileImage={chatDataOther.profileImage}
                         readCount={chatDataOther.readCount}
                         createAt={chatDataOther.createAt}
                    />
                    <MyChat 
                        id={chatData.id}
                        fandomId={chatData.fandomId}
                        author={chatData.author}
                        content={chatData.content}
                        readCount={chatData.readCount}
                        createAt={chatData.createAt}
                    />
                    <ChatGridImage />
                </S.ChatRoomWindow>
                <ChatBar ban={ban} />
            </>
            
    )
}

export default ChatRoom;