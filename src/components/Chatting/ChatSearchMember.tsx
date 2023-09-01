import React, { useEffect, useState } from 'react';
import type { MemberType } from '../../types/chattingType';
import ChatUserInfo from './ChatUserInfo';
import iconArrow from '../../assets/images/svg/ic-arrow-left.svg';
import * as S from './style/ChatSearchMember.style';



type SearchMemberType = {
    setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
    members: MemberType[];
}

const ChatSearchMember = ({setOpenSearch, members}: SearchMemberType) => {

    const [userInput, setUserInput] = useState<string>('');
    
    const searchHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(e.target.value);
    }
    
    const userFiltered = members.filter((member) => member.nickName.toUpperCase().includes(userInput));

    
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
            {/* {userInput && userFiltered */}
            { userFiltered
                .map((member, index) => (
                    <React.Fragment key={index}>
                        <ChatUserInfo  
                            id={member.id}
                            isAdmin={member.isAdmin}
                            nickName={member.nickName}
                            image={member.image}
                            isJail={member.isJail}
                        />         
                    </React.Fragment>
            ))}
            </S.SearchMemberContainer>
        </S.SearchMemberWrapper>
    )
}

export default ChatSearchMember;