import React, { useEffect, useRef } from "react";
import * as S from "./style/AppAlertModal.style";

type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: string;
  warning?: boolean;
};

const AppAlertModal: React.FC<ModalProps> = ({
  setModalOpen,
  title,
  content,
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
        <S.ModalText>
          <S.ModalTitle>{title}</S.ModalTitle>
          <S.ModalContent>{content}</S.ModalContent>
        </S.ModalText>
        <S.ModalBtn>
          <S.ModalNo
            onClick={() => {
              setModalOpen(false);
            }}
          >
            확인
          </S.ModalNo>
        </S.ModalBtn>
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default AppAlertModal;
