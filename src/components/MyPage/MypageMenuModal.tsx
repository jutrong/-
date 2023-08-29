import React, { useEffect, useRef, useState } from "react";
import * as S from "./style/MypageMenuModal.style";
import { useNavigate } from "react-router-dom";

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MypageMenuModal: React.FC<ModalProps> = ({ setModalOpen }) => {
  const navigation = useNavigate();
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
          <S.FandomMenu>마이 팬덤</S.FandomMenu>
          <S.RequestMenu>나의 의뢰</S.RequestMenu>
          <S.DeleteMenu>버킷리스트 수정</S.DeleteMenu>
        </S.ModalContainer>
      </S.Overlay>
    </>
  );
};

export default MypageMenuModal;
