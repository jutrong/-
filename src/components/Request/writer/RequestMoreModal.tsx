import React, { useEffect, useRef, useState } from "react";
import AppAlertModal from "../../common/AlertModal/AppAlertModal";
import * as S from "../style/RepuestMoreModal.style";

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteClick: () => void;
};

const RequestMoreModal: React.FC<ModalProps> = ({
  setModalOpen,
  deleteClick,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: any) => {
      if (!modalRef.current?.contains(e.target)) {
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
              setModalOpen(false);
            }}
          >
            수정하기
          </S.ModifyMenu>
          <S.DeleteMenu
            onClick={() => {
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
