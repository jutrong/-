import { styled } from "styled-components";

export const Overlay = styled.div`
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
export const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 320px;
  height: 395px;
  border-radius: 8px;
  background: #fff;
  padding: 0 16px;
`;
export const LinkTitle = styled.p`
  text-align: center;
  font-size: 16px;
  font-family: "Pretendard-Bold";
  color: #000;
  margin-top: 28px;
  margin-bottom: 20px;
`;
export const Close = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const LinkRegister = styled.input`
  width: 256px;
  height: 18px;
  background-color: #f6f6f6;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 35px;
  &::placeholder {
    font-family: "Pretendard-Medium";
    font-size: 16px;
    color: #bdbdbd;
  }
`;
export const LinkRegisterAlert = styled.p`
  font-family: "Pretendard-Medium";
  font-size: 13px;
  color: #fc1e6e;
`;
export const LinkAttachItemBox = styled.div`
  height: 142px;
  margin-bottom: 19px;
`;
export const LinkNumber = styled.p`
  font-size: 13px;
  font-family: "Pretendard-Medium";
  color: #6c7080;
  margin-bottom: 8px;
`;
