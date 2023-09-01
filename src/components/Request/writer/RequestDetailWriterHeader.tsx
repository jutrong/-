import React, { useState } from "react";
import * as S from "../style/RequestDatilWriterHeader.style";
import question from "../../../assets/images/svg/ic-question.svg";
import more from "../../../assets/images/svg/ic-more-horizontal.svg";
import RequestMoreModal from "./RequestMoreModal";
import AppAlertModal from "../../common/AlertModal/AppAlertModal";
import axios from "../../../api/axios";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { RequestTitleProps } from "../../../types/request";

const RequestDetailWriterHeader: React.FC<RequestTitleProps> = ({
  title,
  username,
  date,
  id,
  userid,
}) => {
  const axiosPrivate = useAxiosPrivate();
  const navigation = useNavigate();

  const [moreclick, setMoreClick] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);
  //const [deleteClick, setDeleteClick] = useState(false);

  const handleClickMore = () => {
    document.body.style.overflow = "hidden";
    setMoreClick(true);
  };

  const deleteClick = async () => {
    document.body.style.overflow = "unset";
    setDeleteAlert(false);

    try {
      const response = await axiosPrivate.delete(`/sonminsu-requests/${id}`);
      navigation(`/requests/`);
    } catch (err) {
      
    }
  };

  return (
    <>
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
        <S.Right>
          <S.More src={more} onClick={handleClickMore} />
        </S.Right>
      </S.Wrap>
      {moreclick && (
        <RequestMoreModal
          setModalOpen={setMoreClick}
          deleteClick={() => {
            document.body.style.overflow = "hidden";
            setDeleteAlert(true);
          }}
          requestid={id}
        />
      )}
      {deleteAlert && (
        <AppAlertModal
          title="삭제하기"
          content="삭제하시겠습니까?"
          yesContent="삭제"
          yesClickHandler={deleteClick}
          setModalOpen={setDeleteAlert}
        />
      )}
    </>
  );
};

export default RequestDetailWriterHeader;
