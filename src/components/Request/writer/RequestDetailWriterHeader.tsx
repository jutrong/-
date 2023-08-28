import React, { useState } from "react";
import * as S from "../style/RequestDatilWriterHeader.style";
import question from "../../../assets/images/svg/ic-question.svg";
import more from "../../../assets/images/svg/ic-more-horizontal.svg";
import RequestMoreModal from "./RequestMoreModal";
import AppAlertModal from "../../common/AlertModal/AppAlertModal";

type RequestTitleProps = {
  title: string;
  username: string;
};

const RequestDetailWriterHeader: React.FC<RequestTitleProps> = ({
  title,
  username,
}) => {
  const [moreclick, setMoreClick] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);
  //const [deleteClick, setDeleteClick] = useState(false);

  const handleClickMore = () => {
    setMoreClick(true);
  };

  const click = () => {
    setDeleteAlert(false);
  };

  return (
    <>
      <S.Wrap>
        <S.Left>
          <S.QuestionSVG src={question} />
          <S.QuestionTitleBox>
            <S.QuestionTitle>{title}</S.QuestionTitle>
            <S.QuestionTitleInfo>
              <S.QuestionUserName>{username}</S.QuestionUserName>
              <S.QuestionDate>2023.08.10</S.QuestionDate>
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
            setDeleteAlert(true);
          }}
        />
      )}
      {deleteAlert && (
        <AppAlertModal
          title="삭제하기"
          content="삭제하시겠습니까?"
          yesContent="삭제"
          yesClickHandler={click}
          setModalOpen={setDeleteAlert}
        />
      )}
    </>
  );
};

export default RequestDetailWriterHeader;
