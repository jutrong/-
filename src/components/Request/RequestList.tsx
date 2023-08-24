import React from "react";
import * as S from "./style/RequestLink.style";

type RequestListProps = {
  title: string;
  username: string;
  date: string;
};

const RequestList: React.FC<RequestListProps> = ({ title, username, date }) => {
  return (
    <S.Wrap
      onClick={() => {
        //주소 정보를 props로 받아서 전달하기
      }}
    >
      <S.ListImg />
      <S.LeftBox>
        <S.ListTitle>{title}</S.ListTitle>
        <S.ListInfo>
          <S.ListUserName>{username}</S.ListUserName>
          <S.ListTime>{date}</S.ListTime>
        </S.ListInfo>
      </S.LeftBox>
    </S.Wrap>
  );
};

export default RequestList;
