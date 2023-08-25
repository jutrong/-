import React from "react";
import * as S from "./style/RequestLink.style";
import { useNavigate } from "react-router-dom";

type RequestListProps = {
  title: string;
  username: string;
  date: string;
};

const RequestList: React.FC<RequestListProps> = ({ title, username, date }) => {
  const navigation = useNavigate();

  return (
    <S.Wrap
      onClick={() => {
        // if (작성자) {
        //   navigation("/requests/writer/:requestId");
        // } else {
        //   navigation("/requests/nowriter/:requestId");
        // }
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
