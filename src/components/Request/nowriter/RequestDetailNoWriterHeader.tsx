import React, { useEffect, useState } from "react";
import * as S from "../style/RequestDatailNoWriterHeader.style";
import question from "../../../assets/images/svg/ic-question.svg";
import pushginoff from "../../../assets/images/svg/ic-pushpin.svg";
import pushginon from "../../../assets/images/svg/ic-pushpin-on.svg";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RequestWriterTitleProps } from "../../../types/request";

const RequestDetaiNoWriterlHeader: React.FC<RequestWriterTitleProps> = ({
  title,
  username,
  date,
  id,
  setBookMarkData,
  userid,
  bookmarkdata,
}) => {
  const navigation = useNavigate();
  const token = useSelector(({ auth }) => auth.accessToken);

  //const [bookmarkdata, setBookMarkData] = useState("");
  //const [pushpinvalue, setPushPinValue] = useState(bookmarkstate);
  const axiosPrivate = useAxiosPrivate();

  const clickPushPin = async () => {
    try {
      const response = await axiosPrivate.put(
        `/sonminsu-requests/${id}/bookmarks`
      );
      setBookMarkData((prev) => !prev);
    } catch (err) {
      
    }
  };

  return (
    <S.Wrap>
      <S.Left>
        <S.QuestionSVG src={question} />
        <S.QuestionTitleBox>
          <S.QuestionTitle>{title}</S.QuestionTitle>
          <S.QuestionTitleInfo>
            <S.QuestionUserName
              onClick={() => {
                navigation(`/mypage/${userid}`);
              }}
            >
              {username}
            </S.QuestionUserName>
            <S.QuestionDate>{(date + "").substring(0, 10)}</S.QuestionDate>
          </S.QuestionTitleInfo>
        </S.QuestionTitleBox>
      </S.Left>
      {token && (
        <S.Right>
          <S.PushPin
            src={bookmarkdata ? pushginon : pushginoff}
            onClick={clickPushPin}
          />
        </S.Right>
      )}
    </S.Wrap>
  );
};

export default RequestDetaiNoWriterlHeader;
