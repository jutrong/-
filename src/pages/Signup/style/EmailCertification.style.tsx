import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Agreement = styled.h1`
  font-size: 16px;
  color: #6138f8;
  margin-bottom: 10px;
`;

export const SubAgreement = styled.h2`
  font-size: 24px;
  color: #1d1b20;
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

export const ReSend = styled.span`
  margin-left: 10px;
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
`;
