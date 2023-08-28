import React from "react";
import * as S from "./style/RequestLink.style";
import { useNavigate } from "react-router-dom";

type RequestListProps = {
  img: string;
  title: string;
  username: string;
  date: string;
  userid: number;
  requestid: number;
};

const RequestList: React.FC<RequestListProps> = ({
  img,
  title,
  username,
  date,
  userid,
  requestid,
}) => {
  const navigation = useNavigate();

  return (
    <S.Wrap
      onClick={() => {
        if (userid === 2) {
          navigation(`/requests/writer/${requestid}`);
        } else {
          navigation(`/requests/nowriter/${requestid}`);
        }
      }}
    >
      <S.ListImg src={img} />
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
