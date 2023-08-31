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
  max-width: 450px;
`;
export const Close = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const LinkTitle = styled.p`
  text-align: center;
  font-size: 16px;
  font-family: "Pretendard-Bold";
  color: #000;
  margin-top: 28px;
  margin-bottom: 20px;
`;
export const LinkRegisterBox = styled.div`
  display: flex;
  gap: 16px;
`;
export const LinkRegister = styled.input<{ border: boolean }>`
  width: 194px;
  height: 18px;
  background-color: #f6f6f6;
  ${(props) =>
    props.border ? `border : 1px solid #FC1E6E` : `border : 1px solid #E8E8E8`};
  border-radius: 8px;
  padding: 16px;
  &::placeholder {
    font-family: "Pretendard-Medium";
    font-size: 16px;
    color: #bdbdbd;
  }
`;
export const LinkRegisterBTN = styled.button`
  width: 78px;
  height: 50px;
  background: #208df1;
  color: #fff;
  font-size: 16px;
  font-family: "Pretendard-Medium";
  border-radius: 8px;
  text-align: center;
`;
export const LinkRegisterAlert = styled.p`
  font-family: "Pretendard-Medium";
  font-size: 13px;
  color: #fc1e6e;
  margin-top: 4px;
`;
export const LinkAttachItemBox = styled.div<{ margintop: boolean }>`
  width: 302px;
  height: 145px;
  ${(props) => (props.margintop ? `margin-top: 15px;` : `margin-top: 32px;`)};
  border-radius: 8px;
  margin-bottom: 19px;
  display: flex;
  gap: 10px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const LinkNumber = styled.p`
  font-size: 13px;
  font-family: "Pretendard-Medium";
  color: #6c7080;
  margin-bottom: 8px;
`;

export const FinishBTN = styled.button`
  width: 100%;
  height: 50px;
  background-color: #208df1;
  font-size: 16px;
  font-family: "Pretendard-Medium";
  color: #fff;
  border-radius: 8px;
  text-align: center;
`;
