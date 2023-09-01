import React, { useEffect, useRef, useState } from "react";
import * as S from "../style/RequestWriterResponse.style";
import more from "../../../assets/images/svg/ic-more-horizontal.svg";
import select from "../../../assets/images/svg/ic-select.svg";
import LinkAttachItem from "../LinkAttachItem";
import AppAlertModal from "../../common/AlertModal/AppAlertModal";
import axios from "../../../api/axios";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import detailDate from "../../../utils/time";
import { useParams } from "react-router-dom";
import { RequestAnswerProps, RequestDescType } from "../../../types/request";
import { useNavigate } from "react-router-dom";

const RequestWriterResponse: React.FC<RequestAnswerProps> = ({
  answeruserid,
  answerUsername,
  answerUserimg,
  answerUserclearNum,
  answerDate,
  answerItems,
  answerId,
  answerIsChoosed,
}) => {
  const axiosPrivate = useAxiosPrivate();
  let { requestId } = useParams();
  const navigation = useNavigate();

  const [moreClick, setMoreClick] = useState(false);
  const [selectClick, setSeleteClick] = useState(false);
  const [deleteClick, setDeleteClick] = useState(false);
  const [requestdata, setRequestData] = useState<RequestDescType>(Object);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/sonminsu-requests/${requestId}`);
      setRequestData(response.data.data);
    } catch (err) {
      
    }
  };

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

  const handleselectClick = async () => {
    setSeleteClick(false);

    try {
      const response = await axiosPrivate.put(
        `/sonminsu-answers/${answerId}/choose`
      );
      window.location.replace(`/requests/writer/${requestId}`);
    } catch (err) {
      
    }
  };

  const handledeleteClick = async () => {
    setDeleteClick(false);

    try {
      const response = await axiosPrivate.delete(
        `/sonminsu-answers/${answerId}`
      );
      window.location.replace(`/requests/writer/${requestId}`);
    } catch (err) {
      
    }
  };

  return (
    <>
      <S.Wrap>
        <S.ProfileBox>
          <S.ProfileImg
            src={answerUserimg}
            onClick={() => {
              navigation(`/mypage/${answeruserid}`);
            }}
          />
          <S.ProfileInfo>
            <S.UserName>{answerUsername}</S.UserName>
            <S.ResponesInfo>
              <S.ClearNumber>채택된 의뢰 {answerUserclearNum}개</S.ClearNumber>
              <S.Date>{detailDate(answerDate)}</S.Date>
            </S.ResponesInfo>
          </S.ProfileInfo>
          {!answerIsChoosed &&
            requestdata.answers &&
            !requestdata.answers.find(
              (answer) => answer.isChoosed === true
            ) && (
              <S.More
                src={more}
                onClick={() => {
                  setMoreClick(true);
                }}
              />
            )}
          {!answerIsChoosed && moreClick && (
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
          {answerIsChoosed && <S.SeleteImg src={select} />}
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
                itemUrl={item.originUrl}
              />
            ))}
        </S.ImgsBox>
      </S.Wrap>
      {selectClick && (
        <AppAlertModal
          title="채택하기"
          content="채택하시겠습니까?"
          yesContent="채택"
          yesClickHandler={handleselectClick}
          setModalOpen={setSeleteClick}
        />
      )}
      {deleteClick && (
        <AppAlertModal
          title="삭제하기"
          content="삭제하시겠습니까?"
          yesContent="삭제"
          yesClickHandler={handledeleteClick}
          setModalOpen={setDeleteClick}
        />
      )}
    </>
  );
};

export default RequestWriterResponse;
