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
export const ModalContainer = styled.div`
  width: 320px;
  height: 372px;
  border-radius: 8px;
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CloseBTN = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const Title = styled.p`
  font-size: 16px;
  color: #000;
  font-family: "Pretendard-Bold";
  text-align: center;
  margin-top: 28px;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  padding-left: 16px;
  width: 272px;
  height: 50px;
  background: #f6f6f6;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  &::placeholder {
    font-size: 16px;
    color: #bdbdbd;
    font-family: "Pretendard-Medium";
  }
`;
export const RegisterBTN = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 288px;
  height: 50px;
  background: #208df1;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  font-family: "Pretendard-Medium";
  line-height: 50px;
`;
