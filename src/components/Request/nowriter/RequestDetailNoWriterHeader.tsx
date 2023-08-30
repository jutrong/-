import React, { useState } from "react";
import * as S from "../style/RequestDatailNoWriterHeader.style";
import question from "../../../assets/images/svg/ic-question.svg";
import pushginoff from "../../../assets/images/svg/ic-pushpin.svg";
import pushginon from "../../../assets/images/svg/ic-pushpin-on.svg";
import axios, { axiosPrivate } from "../../../api/axios";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

type RequestTitleProps = {
  title: string;
  username: string;
  date: string;
  id: number;
};

const RequestDetaiNoWriterlHeader: React.FC<RequestTitleProps> = ({
  title,
  username,
  date,
  id,
}) => {
  const [pushpinvalue, setPushPinValue] = useState(false);

  const clickPushPin = async () => {
    setPushPinValue((prev) => !prev);

    try {
      const response = await axiosPrivate.put(
        `/users/sonminsu-requests/${id}/bookmarks`
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Wrap>
      <S.Left>
        <S.QuestionSVG src={question} />
        <S.QuestionTitleBox>
          <S.QuestionTitle>{title}</S.QuestionTitle>
          <S.QuestionTitleInfo>
            <S.QuestionUserName>{username}</S.QuestionUserName>
            <S.QuestionDate>{(date + "").substring(0, 10)}</S.QuestionDate>
          </S.QuestionTitleInfo>
        </S.QuestionTitleBox>
      </S.Left>
      <S.Right>
        <S.PushPin
          src={pushpinvalue ? pushginon : pushginoff}
          onClick={clickPushPin}
        />
      </S.Right>
    </S.Wrap>
  );
};

export default RequestDetaiNoWriterlHeader;
