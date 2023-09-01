import { styled } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  width: 273px;
  height: 174px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  border-radius: 14px;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(11px);
  display: flex;
  flex-direction: column;
`;
export const ModalText = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 74px;
  text-align: center;
  color: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 17px;
`;
export const ModalTitle = styled.p`
  font-family: "Pretendard-Bold";
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.408px;
`;
export const ModalContent = styled.span`
  font-size: 13px;
  font-family: "Pretendard-Regular";
  line-height: 17px;
  letter-spacing: -0.078px;
`;
export const ModalBtn = styled.div`
  display: flex;
  width: 100%;
  height: 62px;
  font-family: "Pretendard-Regular";
  letter-spacing: -0.408px;
  font-size: 17px;
  text-align: center;
  line-height: 22px;
  align-items: flex-end;
  justify-content: center;
  gap: 23px;
}
`;
export const ModalNo = styled.div`
  width: 101px;
  height: 35px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #6138f8;
  color: #6138f8;
  cursor: pointer;
`;

export const ModalYes = styled.div<{ warning?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 101px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 4px;

  ${(props) =>
    props.warning
      ? `border: 1px solid #FC1E6E;
      color: #FC1E6E;`
      : `border: 1px solid #6138f8;
        color: #6138f8;`}
  cursor: pointer;
`;
