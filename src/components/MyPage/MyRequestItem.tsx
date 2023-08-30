import React, { useEffect, useState } from "react";
import detailDate from "../../utils/time";
import * as S from "./style/MyRequestItem.style";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

type MyRequestItemType = {
  title: string;
  userName: string;
  date: string;
  mainimg: string;
  id: number;
  userid: number;
};

const MyRequestItem: React.FC<MyRequestItemType> = ({
  title,
  userName,
  date,
  mainimg,
  id,
  userid,
}) => {
  const axiosPrivate = useAxiosPrivate();
  const navigation = useNavigate();
  const [userdata, setUserData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

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
        if (userid === userdata) {
          navigation(`/requests/writer/${id}`);
        } else {
          navigation(`/requests/nowriter/${id}`);
        }
      }}
    >
      <S.RequestImg src={mainimg} />
      <S.RequestInfo>
        <S.RequestTitle>{title}</S.RequestTitle>
        <S.Box>
          <S.RequestUser>{userName}</S.RequestUser>
          <S.RequestDate>{detailDate(date)}</S.RequestDate>
        </S.Box>
      </S.RequestInfo>
    </S.Wrap>
  );
};

export default MyRequestItem;
