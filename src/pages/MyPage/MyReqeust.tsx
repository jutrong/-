import React from "react";
import MyRequestItem from "../../components/MyPage/MyRequestItem";
import * as S from "./style/MyRequest.style";

const MyReqeust: React.FC = () => {
  return (
    <S.Wrap>
      <S.Nav>
        <S.MyRequestBTN>나의 의뢰</S.MyRequestBTN>
        <S.MySelectRequestBTN>찜한 의뢰</S.MySelectRequestBTN>
        <S.MyClearRequestBTN>완료된 의뢰</S.MyClearRequestBTN>
      </S.Nav>
      <S.RequestList>
        <MyRequestItem />
        <MyRequestItem />
        <MyRequestItem />
        <MyRequestItem />
        <MyRequestItem />
      </S.RequestList>
    </S.Wrap>
  );
};

export default MyReqeust;
