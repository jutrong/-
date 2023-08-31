import { styled } from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9999;
  max-width: 450px;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 142px;
  background-color: black;
  position: fixed;
  bottom: 0;
  z-index: 99;
  border-radius: 16px 16px 0px 0px;
  background: #fff;
  backdrop-filter: blur(11px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 42px;
  max-width: 450px;
`;

export const FandomMenu = styled.div`
  margin: 43px auto 0 0;
  height: 53px;
  font-size: 16px;
  color: #1d1b20;
  font-family: "Pretendard-Bold";
  text-align: left;
`;
export const RequestMenu = styled.div`
  margin: 0 auto 0 0;
  height: 53px;
  font-size: 16px;
  color: #1d1b20;
  font-family: "Pretendard-Bold";
  text-align: left;
`;
