import React, { useEffect, useRef, useState } from "react";
import * as S from "../style/RepuestMoreModal.style";
import { useNavigate } from "react-router-dom";

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteClick: () => void;
  requestid: number;
};

const RequestMoreModal: React.FC<ModalProps> = ({
  setModalOpen,
  deleteClick,
  requestid,
}) => {
  const navigation = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (!modalRef.current?.contains(e.target)) {
        document.body.style.overflow = "unset";
        setModalOpen(false);
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <>
      <S.Overlay>
        <S.ModalContainer ref={modalRef}>
          <S.ModifyMenu
            onClick={() => {
              document.body.style.overflow = "unset";
              setModalOpen(false);
              navigation(`/requests/form/modify/${requestid}`);
            }}
          >
            수정하기
          </S.ModifyMenu>
          <S.DeleteMenu
            onClick={() => {
              document.body.style.overflow = "unset";
              setModalOpen(false);
              deleteClick();
            }}
          >
            삭제하기
          </S.DeleteMenu>
        </S.ModalContainer>
      </S.Overlay>
    </>
  );
};

export default RequestMoreModal;
