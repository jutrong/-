import React, { useState } from "react";
import * as S from "../style/RequestWriterResponse.style";
import more from "../../../assets/images/svg/ic-more-horizontal.svg";
import select from "../../../assets/images/svg/ic-select.svg";
import LinkAttachItem from "../LinkAttachItem";
import AppAlertModal from "../../common/AlertModal/AppAlertModal";

const RequestWriterResponse: React.FC = () => {
  const [moreClick, setMoreClick] = useState(false);
  const [selectClick, setSeleteClick] = useState(false);
  const [result, setResult] = useState(true);

  const click = () => {
    setSeleteClick(false);
    setResult(false);
  };

  return (
    <>
      <S.Wrap>
        <S.ProfileBox>
          <S.ProfileImg />
          <S.ProfileInfo>
            <S.UserName>정의로운 손민수</S.UserName>
            <S.ResponesInfo>
              <S.ClearNumber>채택된 의뢰 20개</S.ClearNumber>
              <S.Date>10분전</S.Date>
            </S.ResponesInfo>
          </S.ProfileInfo>
          {result && (
            <S.More
              src={more}
              onClick={() => {
                setMoreClick(true);
              }}
            />
          )}
          {result && moreClick && (
            <S.MoreModal>
              <S.Selete
                onClick={() => {
                  setSeleteClick(true);
                }}
              >
                채택하기
              </S.Selete>
              <S.Delete>삭제하기</S.Delete>
            </S.MoreModal>
          )}
          {!result && <S.SeleteImg src={select} />}
        </S.ProfileBox>
        <S.ImgsBox>
          <LinkAttachItem deletevalue={false} />
        </S.ImgsBox>
      </S.Wrap>
      {selectClick && (
        <AppAlertModal
          title="채택하기"
          content="채택하시겠습니까?"
          yesContent="채택"
          yesClickHandler={click}
          setModalOpen={setSeleteClick}
        />
      )}
    </>
  );
};

export default RequestWriterResponse;
