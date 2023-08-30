import React, { useEffect, useState } from 'react';
import type {ChatMember} from '../../types/chattingType';
import ChatUserInfo from './ChatUserInfo';
import iconArrow from '../../assets/images/svg/ic-arrow-left.svg';
import * as S from './style/ChatSearchMember.style';



type SearchMember = {
    setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

const memberMock:ChatMember[] = [
    {
        $ban: false,
        userName: "아마추어 손민수1",
    },
    {
        $ban: false,
        userName: "나는야 손민수",
    },
    {
        $ban: false,
        userName: "손민수 하러 옴",
    },
    {
        $ban: true,
        userName: "룰라랄라",
    },
    {
        $ban: true,
        userName: "호에에엥",
    },
];

const ChatSearchMember = ({setOpenSearch}: SearchMember) => {

    const [userInput, setUserInput] = useState<string>('');
    
    const searchHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    }
    
    const userFiltered = memberMock.filter((member) => member.userName.toUpperCase().includes(userInput));

    
    return (
        <S.SearchMemberWrapper>
            <S.SearchHeader>
                <S.BackButtonIcon src={iconArrow} onClick={() => setOpenSearch(false)} />
                <S.SearchInput 
                    type="text" 
                    placeholder='채팅방 멤버를 검색해주세요.' 
                    onChange={searchHandler}
                />
            </S.SearchHeader>
            <S.SearchMemberContainer>
            {userInput && userFiltered
                .map((member, index) => (
                    <React.Fragment key={index}>
                        <ChatUserInfo $ban={member.$ban} userName={member.userName} />         
                    </React.Fragment>
            ))}
            </S.SearchMemberContainer>
        </S.SearchMemberWrapper>
    )
}

export default ChatSearchMember;