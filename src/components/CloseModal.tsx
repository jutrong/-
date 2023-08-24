import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
`;
const ModalContainer = styled.div`
  width: 270px;
  height: 137px;
  background-color: black;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  border-radius: 14px;
  background-color: rgba(30, 30, 30, 0.9);
  backdrop-filter: blur(11px);
  display: flex;
  flex-direction: column;
`;
const ModalText = styled.div`
  width: 100%;
  height: 74px;
  border-bottom: 0.5px solid rgba(84, 84, 88, 0.65);
  text-align: center;
  color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`;
const ModalTitle = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.408px;
`;
const ModalContent = styled.span`
  font-size: 13px;
  font-family: "Pretendard-Regular";
  line-height: 17px;
  letter-spacing: -0.078px;
`;
const ModalBtn = styled.div`
  display: flex;
  width: 100%;
  height: 62px;
  font-family: "Pretendard-Regular";
  letter-spacing: -0.408px;
  font-size: 17px;
  text-align: center;
  line-height: 22px;
`;
const ModalNo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 134px;
  height: 62px;
  border-right: 0.5px solid rgba(84, 84, 88, 0.65);
  color: rgba(10, 132, 255, 1);
  cursor: pointer;
`;
const ModalYes = styled.div<{ warning?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 134px;
  height: 62px;
  ${(props) =>
    props.warning
      ? "color: rgba(252, 30, 110, 1);"
      : "color: rgba(10, 132, 255, 1);"}
  cursor: pointer;
`;
type ModalProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  content: string;
  warning?: boolean;
  noContent: string;
  yesClickHandler: React.MouseEventHandler<HTMLDivElement>;
};
const CloseModal: React.FC<ModalProps> = ({
  setModalOpen,
  title,
  content,
  warning,
  noContent,
  yesClickHandler,
}) => {
  return (
    <Overlay>
      <ModalContainer>
        <ModalText>
          <ModalTitle>{title}</ModalTitle>
          <ModalContent>{content}</ModalContent>
        </ModalText>
        <ModalBtn>
          <ModalNo
            onClick={() => {
              setModalOpen(false);
            }}
          >
            {noContent}
          </ModalNo>
          <ModalYes warning={warning} onClick={yesClickHandler}>
            네
          </ModalYes>
        </ModalBtn>
      </ModalContainer>
    </Overlay>
  );
};

export default CloseModal;
