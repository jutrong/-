import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 380px;
`;

export const Agreement = styled.h1`
  width: 100%;
  font-size: 16px;
  color: #6138f8;
  text-align: left;
  margin-top: 28px;
  margin-bottom: 12px;
  font-family: "Pretendard-Bold";
`;

export const SubAgreement = styled.h2`
  width: 100%;
  text-align: left;
  font-size: 24px;
  color: #1d1b20;
  font-family: "Pretendard-Medium";
  line-height: 140%;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputEmail = styled.input`
  padding: 16px;
  width: 100%;
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1em;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  background: #f6f6f6;
  &::placeholder {
    text-align: left;
    font-family: "Pretendard-Medium";
    font-size: 16px;
    color: #bdbdbd;
  }
`;

// export const InputNum = styled.input`
//   padding: 0.5em;
//   width: 60%;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   margin-bottom: 1em;
//   font-size: 16px;
//   outline: none;
// `;

export const SendButton = styled.button`
  background-color: #208df1;
  width: fit-content;
  height: 50px;
  color: #fff;
  padding: 0 16px;
  white-space: nowrap;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const TextWithLink = styled.p`
  color: #777;
  font-size: 13px;
  span {
    color: #007bff;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export const EmailContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const EmailVaildation = styled.p`
  margin-top: -8px;
  margin-bottom: 8px;
  font-size: 13px;
  color: #fc1e6e;
`;

export const ReSend = styled.span`
  margin-left: 10px;
  color: #a4a4a9;
  cursor: pointer;
`;
