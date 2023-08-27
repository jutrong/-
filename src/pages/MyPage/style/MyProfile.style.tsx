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
  background: #ebeef2;
  margin-top: 14px;
  margin-bottom: 18px;
`;
export const UserImgEditBTN = styled.p`
  font-size: 14px;
  font-family: "Pretendard-Medium";
  color: #208df1;
  margin-bottom: 40px;
`;
export const UserName = styled.input`
  width: 358px;
  height: 50px;
  border-radius: 8px;
  background: #f6f6f6;
  border: 1px solid #e8e8e8;
  padding-left: 16px;
  margin-bottom: 12px;
  &::placeholder {
    font-size: 16px;
    color: #bdbdbd;
    font-family: "Pretendard-Medium";
  }
`;
export const Introduce = styled.input`
  width: 358px;
  height: 50px;
  border-radius: 8px;
  background: #f6f6f6;
  padding-left: 16px;
  border: 1px solid #e8e8e8;
  &::placeholder {
    font-size: 16px;
    color: #bdbdbd;
    font-family: "Pretendard-Medium";
  }
`;
