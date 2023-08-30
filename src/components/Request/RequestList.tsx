import React, { useEffect, useState } from "react";
import * as S from "./style/RequestLink.style";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { RequestListProps } from "../../types/request";

const RequestList: React.FC<RequestListProps> = ({
  img,
  title,
  username,
  date,
  userid,
  requestid,
}) => {
  const axiosPrivate = useAxiosPrivate();
  const navigation = useNavigate();
  const token = useSelector(({ auth }) => auth.accessToken);

  const [userdata, setUserData] = useState();

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get("/profile");
      setUserData(response.data.data.id);
      //return console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Wrap
      onClick={() => {
        if (token && userid === userdata) {
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
