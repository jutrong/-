import React, { useEffect, useState } from "react";
import * as S from "../style/RequestDatailNoWriterHeader.style";
import question from "../../../assets/images/svg/ic-question.svg";
import pushginoff from "../../../assets/images/svg/ic-pushpin.svg";
import pushginon from "../../../assets/images/svg/ic-pushpin-on.svg";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RequestTitleProps } from "../../../types/request";

const RequestDetaiNoWriterlHeader: React.FC<RequestTitleProps> = ({
  title,
  username,
  date,
  id,
  bookmarkstate,
}) => {
  const navigation = useNavigate();
  const token = useSelector(({ auth }) => auth.accessToken);

  const [bookmarkdata, setBookMarkData] = useState("");
  const [pushpinvalue, setPushPinValue] = useState(true);
  const axiosPrivate = useAxiosPrivate();

  const clickPushPin = async () => {
    try {
      const response = await axiosPrivate.put(
        `/sonminsu-requests/${id}/bookmarks`
      );
      setPushPinValue((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(bookmarkstate);

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
      {token && (
        <S.Right>
          <S.PushPin
            src={bookmarkstate && pushpinvalue ? pushginon : pushginoff}
            onClick={clickPushPin}
          />
        </S.Right>
      )}
    </S.Wrap>
  );
};

export default RequestDetaiNoWriterlHeader;
