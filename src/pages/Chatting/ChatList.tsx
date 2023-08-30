import React, { useEffect, useState } from 'react';
import axios from 'axios';
import type { Fandom } from '../../types/chattingType';
import ChatFandom from '../../components/Chatting/ChatFandom';
import FooterNavBar from '../../components/common/FooterNavBar/FooterNavBar';
import logo from '../../assets/images/svg/ic-logo.svg';
import * as S from './styles/ChatList.style';



type FandomData = Fandom[];

const ChatList = () => {

    const [fandomData, setFandomData] = useState<FandomData>([]);

    useEffect(() => {
        getData();
    }, []);
    
    const getData = async () => {
        try {
            const res = await axios.get('http://146.56.143.108/api/v1/fandoms');
            setFandomData(res.data.data);
        } catch (err) {
            console.log("Error", err);
        }
    }

    return (
        <>
            <S.ChatHeader>
                <S.Logo src={logo} />
            </S.ChatHeader>
            <S.ChatListWindow>
                {fandomData?.map((fandom) => (
                    <React.Fragment key={fandom.id}>
                        <S.LinkItem to={`chatroom/${fandom.id}`}>
                            <ChatFandom 
                                id={fandom.id}
                                fandomName={fandom.fandomName} 
                                memberLength={fandom.memberLength} 
                                image={fandom.image}
                                lastCreateTime={fandom.lastCreateTime}
                            />
                        </S.LinkItem>
                    </React.Fragment>
                ))}
            </S.ChatListWindow>
            <FooterNavBar />
        </>
    )
}


export default ChatList;
