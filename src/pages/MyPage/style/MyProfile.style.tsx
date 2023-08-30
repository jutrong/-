import { styled } from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  margin-top: 14px;
  margin-bottom: 18px;
`;
export const UserImgEditBTN = styled.p`
  font-size: 14px;
  font-family: "Pretendard-Medium";
  color: #208df1;
  margin-bottom: 40px;
`;
export const UserNameBox = styled.div<{ color: boolean }>`
  width: 358px;
  height: 48px;
  position: relative;
  font-family: "Pretendard-Medium";
  font-size: 13px;
  color: ${(props) => (props.color ? "#bdbdbd" : "#FC1E6E")};
  text-align: right;
  line-height: 48px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background-color: #f6f6f6;
  padding: 0 16px;
  margin-bottom: 12px;
`;
export const UserName = styled.input`
  position: absolute;
  top: 0;
  left: 16px;
  width: 50%;
  height: 48px;
  font-size: 16px;
  color: #1d1b20;
  text-align: left;
  &::placeholder {
    text-align: left;
    font-family: "Pretendard-Medium";
    font-size: 16px;
    color: #bdbdbd;
  }
`;
export const IntroduceBox = styled.div<{ color: boolean }>`
  width: 358px;
  height: 48px;
  position: relative;
  font-family: "Pretendard-Medium";
  font-size: 13px;
  color: ${(props) => (props.color ? "#bdbdbd" : "#FC1E6E")};
  text-align: right;
  line-height: 48px;
  background-color: #f6f6f6;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 0 16px;
`;
export const Introduce = styled.input`
  position: absolute;
  top: 0;
  left: 16px;
  width: 50%;
  height: 48px;
  font-size: 16px;
  color: #1d1b20;
  text-align: left;
  &::placeholder {
    text-align: left;
    font-family: "Pretendard-Medium";
    font-size: 16px;
    color: #bdbdbd;
  }
`;
