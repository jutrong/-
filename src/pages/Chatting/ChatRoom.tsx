import React from 'react';
import { ChatProps, MyChat, OtherChat } from '../../components/Chatting/ChatBubble';
import BackButton from '../../components/Chatting/BackButton';
import ChatInputBar from '../../components/Chatting/ChatInputBar';
import iconMember from '../../assets/images/svg/ic-member.svg';
import ChatGridImage from '../../components/Chatting/ChatGridImage';
import * as S from './styles/ChatRoom.style';



const ChatRoom = () => {

    const chatData: ChatProps[] = [
        {
            id: 345,
            fandomId: 12345,
            author: "아마추어 손민수",
            content: "와아 ㅜㅜ 저도 이거 봤어요!! 꾹이가 리허설 할 때, 입은 연습복 정보도 감사합니당!! ㅎㅎ",
            profileImage: '',
            readCount: 22,
            createAt: new Date(),
        },
        {
            id: 123,
            fandomId: 12345,
            author: "나는야 손민수수",
            content: "ㅎ헷 이게 제 삶의 낙인걸요.. 큐큐 ㅋㅋㅋ",
            readCount: 22,
            createAt: new Date(),
        },
        {
            id: 123,
            fandomId: 12345,
            author: "나는야 손민수",
            content: "또 정보 필요하시면 언제든 말씀하세요!",
            readCount: 22,
            createAt: new Date(),
        },
    ]

    const myId = 123;

    const imageMock: string[] = [
        "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/06/17/4a3691f8-a5b9-4705-9c47-44be7988c66a.jpg",
        "https://jmagazine.joins.com/_data2/photo/2022/08/990874659_M2LfNeRF_3.jpg",
        "https://cdnweb01.wikitree.co.kr/webdata/editor/202203/20/img_20220320152018_d56ef2d9.webp",
        "https://image.jtbcplus.kr/data/contents/jam_photo/202209/21/37a8d815-ed8d-4cf5-8cd4-3714f3d8c649.jpg",
        "https://mblogthumb-phinf.pstatic.net/MjAyMTAyMDRfNzUg/MDAxNjEyMzY5MDQ2ODMw.k6txr5dsICIPp9EzfUknZABzC8RYutPHYkGSIrwbv-sg.Vb8kG_i1p1YpDLQVp7zAlYCdWm2O4aTjekdAOdIzM7wg.JPEG.kisluvme/IMG_2574.JPG?type=w800",
        "https://dimg.donga.com/wps/SPORTS/IMAGE/2022/01/27/111487379.1.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUURz18LJaYfQPqh2P0EWzvsGXJqZNI3UUA&usqp=CAU",
        "https://image.bugsm.co.kr/essential/images/500/540/54066.jpg",
        "https://play-lh.googleusercontent.com/4CyGC7CiaxkyDloyji4IMH07nTPUluhrlV1A0SJ-VkYbobIo--ndgJ1bikONNnr5zN0",
    ];

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
                    {
                        chatData.map((message) => (
                            message.id === myId ?
                                <MyChat 
                                    id={message.id}
                                    fandomId={message.fandomId}
                                    author={message.author}
                                    content={message.content}
                                    createAt={message.createAt}
                                    readCount={message.readCount}
                                />
                                : 
                                <OtherChat
                                    id={message.id}
                                    fandomId={message.fandomId}
                                    author={message.author}
                                    content={message.content}
                                    profileImage={message.profileImage}
                                    readCount={message.readCount}
                                    createAt={message.createAt}
                                />
                        ))
                    }
                    <ChatGridImage imageList={imageMock} />
                </S.ChatRoomWindow>
                <ChatInputBar ban={ban} />
            </>
            
    )
}

export default ChatRoom;