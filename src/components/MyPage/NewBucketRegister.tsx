import React, { useEffect, useRef, useState } from "react";
import * as S from "./style/NewBucketRegister.style";
import x from "../../assets/images/svg/ic-x.svg";

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  yesClickHandler: React.MouseEventHandler<HTMLDivElement>;
};

const NewBucketRegister: React.FC<ModalProps> = ({
  setModalOpen,
  yesClickHandler,
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
    <S.Overlay>
      <S.ModalContainer ref={modalRef}>
        <S.CloseBTN src={x} />
        <S.Title>새 버킷 추가</S.Title>
        <S.Input placeholder="새 버킷 이름을 입력해주세요" />
        <S.RegisterBTN onClick={yesClickHandler}>새 버킷 만들기</S.RegisterBTN>
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default NewBucketRegister;
