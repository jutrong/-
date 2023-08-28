import React, { useEffect, useRef, useState } from "react";
import * as S from "../style/RequestWriterResponse.style";
import more from "../../../assets/images/svg/ic-more-horizontal.svg";
import select from "../../../assets/images/svg/ic-select.svg";
import LinkAttachItem from "../LinkAttachItem";
import AppAlertModal from "../../common/AlertModal/AppAlertModal";

type answerItmesType = {
  id: number;
  originUrl: string;
  imgUrl: string;
  price: string;
  title: string;
};

type RequestAnswerProps = {
  answerUsername: string;
  answerUserimg: string;
  answerUserclearNum: number;
  answerDate: string;
  answerItems: answerItmesType[];
};

const RequestWriterResponse: React.FC<RequestAnswerProps> = ({
  answerUsername,
  answerUserimg,
  answerUserclearNum,
  answerDate,
  answerItems,
}) => {
  const [moreClick, setMoreClick] = useState(false);
  const [selectClick, setSeleteClick] = useState(false);
  const [deleteClick, setDeleteClick] = useState(false);
  const [result, setResult] = useState(true);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (!modalRef.current?.contains(e.target)) {
        setMoreClick(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  const click = () => {
    setSeleteClick(false);
    setResult(false);
  };
  const deleteclick = () => {
    setDeleteClick(false);
  };

  return (
    <>
      <S.Wrap>
        <S.ProfileBox>
          <S.ProfileImg src={answerUserimg} />
          <S.ProfileInfo>
            <S.UserName>{answerUsername}</S.UserName>
            <S.ResponesInfo>
              <S.ClearNumber>채택된 의뢰 {answerUserclearNum}개</S.ClearNumber>
              <S.Date>{answerDate}</S.Date>
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
            <S.MoreModal ref={modalRef}>
              <S.Selete
                onClick={() => {
                  setSeleteClick(true);
                }}
              >
                채택하기
              </S.Selete>
              <S.Delete
                onClick={() => {
                  setDeleteClick(true);
                }}
              >
                삭제하기
              </S.Delete>
            </S.MoreModal>
          )}
          {!result && <S.SeleteImg src={select} />}
        </S.ProfileBox>
        <S.ImgsBox>
          {answerItems &&
            answerItems.map((item) => (
              <LinkAttachItem
                key={item.id}
                deletevalue={false}
                itemImg={item.imgUrl}
                itemPrice={item.price}
                itemName={item.title}
              />
            ))}
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
      {deleteClick && (
        <AppAlertModal
          title="삭제하기"
          content="삭제하시겠습니까?"
          yesContent="삭제"
          yesClickHandler={deleteclick}
          setModalOpen={setDeleteClick}
        />
      )}
    </>
  );
};

export default RequestWriterResponse;
