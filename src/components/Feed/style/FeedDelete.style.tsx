import styled, { keyframes } from "styled-components";

export const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 450px;
  background: rgba(0, 0, 0, 0.8);
  margin: 0 auto;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;
export const UpSlide = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: 46px;
  border-radius: 16px 16px 0px 0px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  padding-left: 42px;
  font-family: "Pretendard-Bold";
  animation: ${slideUp} 0.5s linear forwards;
  box-sizing: border-box;
`;
export const UpdateFeed = styled.div`
  width: 100%;
  height: 50%;
  cursor: pointer;
  padding-top: 34px;
`;
export const DeleteFeed = styled.div`
  width: 100%;
  padding-top: 30px;
  cursor: pointer;
  height: 50%;
`;
